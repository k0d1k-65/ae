import { EquipmentType } from "../constants/units/EquipmentType";
import { WeaponType } from "../constants/units/WeaponType";
import { Equipment } from "../types/units/Equiqment";
import { UnitStat } from "../types/units/UnitStat";

const weapons = (() => {
  const _weapons: Equipment[] = [
    {
      name: "ムジマ・ロッド",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Lod,
      stat: new UnitStat({
        atk: 23,
        matk: 190,
      })
    },
    {
      name: "復元せし時刻みの杖",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Lod,
      stat: new UnitStat({
        atk: 20,
        matk: 165,
        mp: 100,
      })
    },
    {
      name: "オーガペイン・天",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Sward,
      stat: new UnitStat({
        atk: 190,
        matk: 23,
      }),
      equipOnly: {
        targets: ["ドラゴンベアラー"],
      },
      effectOnly: {
        targets: ["ドラゴンベアラー"],
        effects: new UnitStat({atk: 999}),
      }
    },
    {
      name: "復元せし時刻みの剣",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Sward,
      stat: new UnitStat({
        atk: 165,
        matk: 20,
        hp: 500,
        mp: 100,
      })
    },
    {
      name: "黎明の刀",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Katana,
      stat: new UnitStat({
        atk: 153,
        matk: 25,
      })
    },
  ];

  return _weapons;
})();

export function fetchWeapons() {
  return weapons;
}
