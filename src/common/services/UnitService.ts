import { readLocalStorage, saveLocalStorage } from "./LocalStorageService";
import { UnitModel } from "../models/UnitModel";
import { StyleType } from "../constants/StyleType";

const unitsKey = "UnitModel";

/** ユニットデータをローカルストレージから取得 */
export const retrieveUnits = (): UnitModel[] => {
  const UnitModels = readLocalStorage<UnitModel[]>(unitsKey, []);

  return UnitModels;
};

type SaveResult = {
  result: "created" | "updated";
  updated: UnitModel[];
};

/**
 * ユニットデータをローカルストレージに突っ込む
 * @param unit 入力
 * @param unitName 主キー
 * @param style 主キー
 * @returns 更新後アイテム
 */
export const saveUnit = (unit: UnitModel, unitName?: string, style?: StyleType): SaveResult => {
  const units = retrieveUnits();

  const pkUnitName = unitName || unit.unitName;
  const pkStyle = style || unit.style;

  const duplicateIndex = units.findIndex((u) => u.unitName === pkUnitName && u.style === pkStyle);

  try {
    // 名前とスタイルが一致している場合、上書き
    if (duplicateIndex >= 0) {
      units[duplicateIndex] = unit;
      saveLocalStorage<UnitModel[]>(unitsKey, units);

      return { result: "created", updated: units };
    }
    // それ以外は、新規追加
    else {
      const newUnits = [...units, unit];
      saveLocalStorage<UnitModel[]>(unitsKey, newUnits);

      return { result: "updated", updated: newUnits };
    }
  } catch (err) {
    console.log("unit-service save: ", err);

    throw err;
  }
};

type DeleteResult = {
  result: "deleted" | "no update";
  updated: UnitModel[];
};

/** ローカルストレージから1件削除 */
export const deleteUnit = (unit: UnitModel): DeleteResult => {
  const units = retrieveUnits();

  const target = units.findIndex((u) => u.unitName === unit.unitName && u.style === unit.style);

  try {
    // 削除対象があれば削除が一致している場合、上書き
    if (target >= 0) {
      units.splice(target, 1);
      saveLocalStorage<UnitModel[]>(unitsKey, units);

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
    const newUnits = JSON.parse(json) as UnitModel[];

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

    saveLocalStorage<UnitModel[]>(unitsKey, units);

    return units;
  } catch (err) {
    console.log("unit-service import: ", err);

    return units;
  }
};
