import { ArmourType } from "../../constants/common/ArmourType";
import { EquipmentType } from "../../constants/common/EquipmentType";
import { WeaponType } from "../../constants/common/WeaponType";
import { UnitStatModel } from "../models/UnitStatModel";

/** 装備 */
export type Equipment = {
  /** 装備名 */
  name: string;
  /** 装備種別 */
  type: EquipmentType;
  /** 武器種 */
  weaponType?: WeaponType;
  /** 防具種 */
  armourType?: ArmourType;
  /** 装備限定 */
  equipOnly?: {
    /** 装備可能ユニット名 */
    targets: string[];
  };
  /** 効果限定 */
  effectOnly?: {
    /** 効果適用ユニット名 */
    targets: string[];
    /** ステータス補正内容 */
    effects: UnitStatModel;
    // additionalas: any[],
  };
  /** ステータス補正内容 */
  stat: UnitStatModel;
  // additionalas: any[],
};
