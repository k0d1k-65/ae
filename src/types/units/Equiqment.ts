import { ArmourType } from "../../constants/common/ArmourType";
import { EquipmentType } from "../../constants/common/EquipmentType";
import { WeaponType } from "../../constants/common/WeaponType";
import { UnitStat } from "./UnitStat";

export type Equipment = {
  // 武器名
  name: string,
  // 装備種別
  type: EquipmentType,
  weaponType?: WeaponType,
  armourType?: ArmourType,
  // 装備限定
  equipOnly?: {
    targets: string[],
  },
  // 効果限定
  effectOnly?: {
    targets: string[],
    effects: UnitStat,
    // additionalas: any[],
  },
  stat: UnitStat,
  // additionalas: any[],
};