import { EquipmentType } from "../constants/common/EquipmentType";
import { WeaponType } from "../constants/common/WeaponType";
import { Equipment } from "../types/common/Equiqment";
import { UnitStatModel } from "../types/models/UnitStatModel";

const weapons = (() => {
  const _weapons: Equipment[] = [
    {
      name: "ムジマ・ロッド",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Lod,
      stat: new UnitStatModel({
        atk: 23,
        matk: 190,
      })
    },
    {
      name: "復元せし時刻みの杖",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Lod,
      stat: new UnitStatModel({
        atk: 20,
        matk: 165,
        mp: 100,
      })
    },
    {
      name: "オーガペイン・天",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Sward,
      stat: new UnitStatModel({
        atk: 190,
        matk: 23,
      }),
      equipOnly: {
        targets: ["ドラゴンベアラー"],
      },
      effectOnly: {
        targets: ["ドラゴンベアラー"],
        effects: new UnitStatModel({atk: 999}),
      }
    },
    {
      name: "復元せし時刻みの剣",
      type: EquipmentType.Weapon,
      weaponType: WeaponType.Sward,
      stat: new UnitStatModel({
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
      stat: new UnitStatModel({
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
