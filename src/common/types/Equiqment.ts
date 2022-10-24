import { ArmourType } from "../constants/ArmourType";
import { EquipmentType } from "../constants/EquipmentType";
import { WeaponType } from "../constants/WeaponType";

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
    effects: EquipmentEffects,
  },
  effects: EquipmentEffects,
};

type EquipmentEffects = {
  atk?: number,
  def?: number,
  matk?: number,
  mdef?: number,
  hp?: number,
  mp?: number,
  power?: number,
  endure?: number,
  luck?: number,
  intelligence?: number,
  split?: number,
  speed?: number,
  // TODO: 物理耐性+ とか、HP最大時強化とか。
}