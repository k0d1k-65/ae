import { readLocalStorage, saveLocalStorage } from "./LocalStorageService";
import { UnitModel } from "../models/UnitModel";

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

/** ユニットデータをローカルストレージに突っ込む */
export const saveUnit = (unit: UnitModel): SaveResult => {
  const units = retrieveUnits();

  const duplicateIndex = units.findIndex((u) => u.unitName === unit.unitName && u.style === unit.style);

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
