import { WeaponType } from "./WeaponType";

enum ArmourType {
  bracelet = "腕輪",
  neckless = "首輪",
  ring = "指輪",
}

export { ArmourType };

export function getArmourByWeapon (weapon: WeaponType) {
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
};