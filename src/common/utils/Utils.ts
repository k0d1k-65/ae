import { ArmourType } from "../constants/ArmourType";
import { WeaponType } from "../constants/WeaponType";

export function getArmourByWeapon(weapon: WeaponType) {
  switch (weapon) {
    case WeaponType.Lod:
      return ArmourType.ring;
    case WeaponType.Sward:
      return ArmourType.bracelet;
    case WeaponType.Katana:
      return ArmourType.ring;
    case WeaponType.Axe:
      return ArmourType.neckless;
    case WeaponType.Lance:
      return ArmourType.bracelet;
    case WeaponType.Bow:
      return ArmourType.ring;
    case WeaponType.Fist:
      return ArmourType.neckless;
    case WeaponType.Hammer:
      return ArmourType.bracelet;
  }
}
