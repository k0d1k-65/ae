import { readLocalStorage, saveLocalStorage } from "./LocalStorageService";
import { StyleType } from "../constants/StyleType";
import { IUnitAbilities, IUnitPersonalities, IUnitSkills, IUnitStatModel, IUnitStats } from "../models/UnitModel";
import { WeaponType } from "../constants/WeaponType";

const unitsKey = "UnitModel";

export const defaultUnitPersonalities: IUnitPersonalities = {
  weapon: WeaponType.Lod,
  unitName: "",
  style: StyleType.NS,
  className: "",
  personalities: null,
  unitTrueName: null,
} as const;

export const defaultUnitStats: IUnitStats = {
  statHp: null,
  statMp: null,
  statPower: null,
  statEndure: null,
  statLuck: null,
  statIntelligense: null,
  statSpeed: null,
  statSplit: null,
  lightShadow: null,
  lightShadowNumber: null,
  ls_5: null,
  ls_15: null,
  ls_30: null,
  ls_50: null,
  ls_75: null,
  ls_105: null,
  ls_140: null,
  ls_175: null,
  ls_215: null,
  ls_255: null,
  styleBoardBonus: null,
} as const;

export const defaultUnitAbilities: IUnitAbilities = {
  variablechantName: null,
  variablechantDetail: null,
  variablechantEnhancedDetail: null,
  extraSpecialMoveName: null,
  extraSpecialMoveDetail: null,
  anotherSenceName: null,
  anotherSenceDetail: null,
  abilities: null,
} as const;

export const defaultUnitSkills: IUnitSkills = {
  extra: { name: null, mp: null, detail: null },
  first: { name: null, mp: null, detail: null },
  second: { name: null, mp: null, detail: null },
  thirdA: { name: null, mp: null, detail: null },
  thirdB: { name: null, mp: null, detail: null },
  fourthA: { name: null, mp: null, detail: null },
  fourthB: { name: null, mp: null, detail: null },
  fifthA: { name: null, mp: null, detail: null },
  fifthB: { name: null, mp: null, detail: null },
} as const;

export const defaultUnitStat = {
  ...defaultUnitPersonalities,
  ...defaultUnitStats,
  ...defaultUnitAbilities,
  ...defaultUnitSkills,
} as const;

/** ちゃんとマッピング */
export const mapModelUnitStat = (obj?: unknown): IUnitStatModel => {
  // オブジェクトですらない
  if (obj == null || typeof obj !== "object") {
    return defaultUnitStat;
  }

  const unitStat = obj as IUnitStatModel;

  // 必須チェック
  if (!unitStat.weapon || !unitStat.unitName || !unitStat.style || !unitStat.className) {
    return defaultUnitStat;
  }

  unitStat.personalities = unitStat.personalities || null;
  unitStat.unitTrueName = unitStat.unitTrueName || null;

  unitStat.statHp = unitStat.statHp || null;
  unitStat.statMp = unitStat.statMp || null;
  unitStat.statPower = unitStat.statPower || null;
  unitStat.statEndure = unitStat.statEndure || null;
  unitStat.statLuck = unitStat.statLuck || null;
  unitStat.statIntelligense = unitStat.statIntelligense || null;
  unitStat.statSpeed = unitStat.statSpeed || null;
  unitStat.statSplit = unitStat.statSplit || null;

  unitStat.lightShadow = unitStat.lightShadow || null;
  unitStat.lightShadowNumber = unitStat.lightShadowNumber || null;

  unitStat.ls_5 = unitStat.ls_5?.statType ? unitStat.ls_5 : null;
  unitStat.ls_15 = unitStat.ls_15?.statType ? unitStat.ls_15 : null;
  unitStat.ls_30 = unitStat.ls_30?.statType ? unitStat.ls_30 : null;
  unitStat.ls_50 = unitStat.ls_50?.statType ? unitStat.ls_50 : null;
  unitStat.ls_75 = unitStat.ls_75?.statType ? unitStat.ls_75 : null;
  unitStat.ls_105 = unitStat.ls_105?.statType ? unitStat.ls_105 : null;
  unitStat.ls_140 = unitStat.ls_140?.statType ? unitStat.ls_140 : null;
  unitStat.ls_175 = unitStat.ls_175?.statType ? unitStat.ls_175 : null;
  unitStat.ls_215 = unitStat.ls_215?.statType ? unitStat.ls_215 : null;
  unitStat.ls_255 = unitStat.ls_255?.statType ? unitStat.ls_255 : null;

  unitStat.styleBoardBonus = unitStat.styleBoardBonus?.statType ? unitStat.styleBoardBonus : null;

  unitStat.variablechantName = unitStat.variablechantName || null;
  unitStat.variablechantDetail = unitStat.variablechantDetail || null;
  unitStat.variablechantEnhancedDetail = unitStat.variablechantEnhancedDetail || null;

  unitStat.extraSpecialMoveName = unitStat.extraSpecialMoveName || null;
  unitStat.extraSpecialMoveDetail = unitStat.extraSpecialMoveDetail || null;

  unitStat.anotherSenceName = unitStat.anotherSenceName || null;
  unitStat.anotherSenceDetail = unitStat.anotherSenceDetail || null;

  unitStat.abilities = unitStat.abilities || null;

  unitStat.extra = unitStat.extra?.name ? unitStat.extra : defaultUnitStat.extra;
  unitStat.first = unitStat.first?.name ? unitStat.first : defaultUnitStat.first;
  unitStat.second = unitStat.second?.name ? unitStat.second : defaultUnitStat.second;
  unitStat.thirdA = unitStat.thirdA?.name ? unitStat.thirdA : defaultUnitStat.thirdA;
  unitStat.thirdB = unitStat.thirdB?.name ? unitStat.thirdB : defaultUnitStat.thirdB;
  unitStat.fourthA = unitStat.fourthA?.name ? unitStat.fourthA : defaultUnitStat.fourthA;
  unitStat.fourthB = unitStat.fourthB?.name ? unitStat.fourthB : defaultUnitStat.fourthB;
  unitStat.fifthA = unitStat.fifthA?.name ? unitStat.fifthA : defaultUnitStat.fifthA;
  unitStat.fifthB = unitStat.fifthB?.name ? unitStat.fifthB : defaultUnitStat.fifthB;

  return unitStat;
};

/** ユニットデータをローカルストレージから取得 */
export const retrieveUnits = (): IUnitStatModel[] => {
  const UnitModels = readLocalStorage<IUnitStatModel[]>(unitsKey, []);

  console.log({ UnitModels });

  return UnitModels;
};

/** ユニットデータをローカルストレージから取得して、ユニット名と武器種でソートして返却 */
export const sortUnits = (units: IUnitStatModel[]): IUnitStatModel[] => {
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
