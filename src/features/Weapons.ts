import { EquipmentType } from "../common/constants/EquipmentType";
import { WeaponType } from "../common/constants/WeaponType";
import { Equipment } from "../common/types/Equiqment";

const weapons = (() => {
  const _weapons: Equipment[] = [
    {
      name: "ムジマ・ロッド",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Lod,
      stat: {
        atk: 23,
        matk: 190,
      }
    },
    {
      name: "復元せし時刻みの剣",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Sward,
      stat: {
        atk: 165,
        matk: 20,
        hp: 500,
        mp: 100,
      }
    },
    {
      name: "黎明の刀",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Katana,
      stat: {
        atk: 153,
        matk: 25,
      }
    },
  ];

  return _weapons;
})();

export function fetchWeapons() {
  return weapons;
}
