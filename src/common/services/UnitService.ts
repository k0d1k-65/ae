import { readLocalStorage, saveLocalStorage } from "./LocalStorageService";
import { StyleType } from "../constants/StyleType";
import { IUnitStatModel } from "../models/UnitModel";
import { WeaponType } from "../constants/WeaponType";
import { UnitStatType } from "../constants/UnitStatType";

const unitsKey = "UnitModel";

/** ちゃんとマッピング */
export const mapModelUnitStat = (unitStat: any): IUnitStatModel | null => {
  // オブジェクトですらない
  if (typeof unitStat !== "object") {
    return null;
  }

  // 名前とスタイル情報は必須
  if (!unitStat.unitName || !unitStat.style) {
    return null;
  }

  const response = unitStat as IUnitStatModel;

  // TODO: カスタムタイプに合わないやつとか、型違反しているデータを弾く

  // ステータスボーナスは、ステータス珠の指定がない場合nullにしておく
  const bonusProps: (keyof IUnitStatModel)[] = [
    "styleBoardBonus",
    "ls_5",
    "ls_15",
    "ls_30",
    "ls_50",
    "ls_75",
    "ls_105",
    "ls_140",
    "ls_175",
    "ls_215",
    "ls_255",
  ];
  // TODO: なんとかして。
  // for (const keyName of bonusProps) {
  //   if (!Object.keys(UnitStatType).includes(response[keyName]?.statType || "")) {
  //     response[keyName] = null;
  //   }
  // }

  return response;
};

/** ユニットデータをローカルストレージから取得 */
export const retrieveUnits = (): IUnitStatModel[] => {
  const UnitModels = readLocalStorage<IUnitStatModel[]>(unitsKey, []);

  console.log({ UnitModels });

  return UnitModels;
};

/** ユニットデータをローカルストレージから取得して、ユニット名と武器種でソートして返却 */
export const retrieveAndSortUnits = (): IUnitStatModel[] => {
  const units = retrieveUnits();

  return (
    units
      // スタイルをソート
      .sort((a, b) => {
        const styleTypeIndex = Object.values(StyleType);

        // TODO: 漢字とか、ヴとかひらがな・カタカナ？とかの擦り合わせ
        return styleTypeIndex.indexOf(a.style) >= styleTypeIndex.indexOf(b.style) ? 1 : -1;
      })
      // 名前でソート
      .sort((a, b) => (a.unitName >= b.unitName ? 1 : -1))
      // 武器種でソート
      .sort((a, b) => {
        const weaponTypeIndex = Object.values(WeaponType);

        return weaponTypeIndex.indexOf(a.weapon) >= weaponTypeIndex.indexOf(b.weapon) ? 1 : -1;
      })
  );
};

type SaveResult = {
  result: "created" | "updated";
  updated: IUnitStatModel[];
};

/**
 * ユニットデータをローカルストレージに突っ込む
 * @param unit 入力
 * @param unitName 主キー
 * @param style 主キー
 * @returns 更新後アイテム
 */
export const saveUnit = (unit: IUnitStatModel, unitName?: string, style?: StyleType): SaveResult => {
  const units = retrieveUnits();

  const pkUnitName = unitName || unit.unitName;
  const pkStyle = style || unit.style;

  const duplicateIndex = units.findIndex((u) => u.unitName === pkUnitName && u.style === pkStyle);

  try {
    // 名前とスタイルが一致している場合、上書き
    if (duplicateIndex >= 0) {
      units[duplicateIndex] = unit;
      saveLocalStorage<IUnitStatModel[]>(unitsKey, units);

      return { result: "created", updated: units };
    }
    // それ以外は、新規追加
    else {
      const newUnits = [...units, unit];
      saveLocalStorage<IUnitStatModel[]>(unitsKey, newUnits);

      return { result: "updated", updated: newUnits };
    }
  } catch (err) {
    console.log("unit-service save: ", err);

    throw err;
  }
};

type DeleteResult = {
  result: "deleted" | "no update";
  updated: IUnitStatModel[];
};

/** ローカルストレージから1件削除 */
export const deleteUnit = (unit: IUnitStatModel): DeleteResult => {
  const units = retrieveUnits();

  const target = units.findIndex((u) => u.unitName === unit.unitName && u.style === unit.style);

  try {
    // 削除対象があれば削除が一致している場合、上書き
    if (target >= 0) {
      units.splice(target, 1);
      saveLocalStorage<IUnitStatModel[]>(unitsKey, units);

      return { result: "deleted", updated: units };
    }
    // それ以外は、新規追加
    else {
      return { result: "no update", updated: units };
    }
  } catch (err) {
    console.log("unit-service delete: ", err);

    throw err;
  }
};

export const importUnits = (json: string, overwrite = false) => {
  let units = retrieveUnits();

  try {
    const newUnits = JSON.parse(json) as IUnitStatModel[];

    for (const newItem of newUnits) {
      const duplicateIndex = units.findIndex((u) => u.unitName === newItem.unitName && u.style === newItem.style);

      // 名前とスタイルが一致している場合、上書きor既存優先
      if (duplicateIndex >= 0) {
        if (overwrite) {
          units[duplicateIndex] = { ...units[duplicateIndex], ...newItem };
        } else {
          units[duplicateIndex] = { ...newItem, ...units[duplicateIndex] };
        }
      }
      // それ以外は、新規追加
      else {
        units = [...units, newItem];
      }
    }

    saveLocalStorage<IUnitStatModel[]>(unitsKey, units);

    return units;
  } catch (err) {
    console.log("unit-service import: ", err);

    return units;
  }
};

/** ローカルストレージから1件削除 */
export const trancateUnit = () => {
  saveLocalStorage(unitsKey, []);
};
