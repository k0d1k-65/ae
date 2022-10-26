import { LightShadowType } from "../common/constants/LightShadowType";
import { StyleType } from "../common/constants/StyleType";
import { WeaponType } from "../common/constants/WeaponType";
import { Unit } from "../common/types/Unit";
import { UnitStat } from "../common/types/UnitStat";

const units: Unit[] = (() => {
  const _units: Unit[] = [
    {
      weapon: WeaponType.Lod,
      name: "マリエル",
      namekana: "マリエル",
      lightShadow: LightShadowType.Light,
      className: "ハイエロファント",
      styleType: StyleType.NS,
      stat: new UnitStat({
        hp: 3444,
        mp: 655,
        power: 211,
        endure: 190,
        luck: 180,
        intelligence: 182,
        split: 190,
        speed: 202,
      }),
      lsBonus: [],
    },
    {
      weapon: WeaponType.Fist,
      name: "ハーディー",
      namekana: "ハーディー",
      lightShadow: LightShadowType.Shadow,
      className: "グレイハウンド",
      styleType: StyleType.NS,
      stat: new UnitStat({
        hp: 3444,
        mp: 655,
        power: 211,
        endure: 190,
        luck: 180,
        intelligence: 182,
        split: 190,
        speed: 202,
      }),
      lsBonus: [],
    },
    {
      weapon: WeaponType.Katana,
      name: "イスカ",
      namekana: "イスカ",
      lightShadow: LightShadowType.Light,
      className: "アドミラル",
      styleType: StyleType.NS,
      stat: new UnitStat({
        hp: 3444,
        mp: 655,
        power: 211,
        endure: 190,
        luck: 180,
        intelligence: 182,
        split: 190,
        speed: 202,
      }),
      lsBonus: [],
    },
    {
      weapon: WeaponType.Fist,
      name: "ロキド",
      namekana: "ロキド",
      lightShadow: LightShadowType.Light,
      className: "フィエルテベート",
      styleType: StyleType.AS,
      stat: new UnitStat({
        hp: 3444,
        mp: 655,
        power: 211,
        endure: 190,
        luck: 180,
        intelligence: 182,
        split: 190,
        speed: 202,
      }),
      lsBonus: [],
    },
    {
      weapon: WeaponType.Sward,
      name: "イスカ",
      namekana: "イスカ",
      lightShadow: LightShadowType.Light,
      className: "ユースティティア",
      styleType: StyleType.ES,
      stat: new UnitStat({
        hp: 3444,
        mp: 655,
        power: 211,
        endure: 190,
        luck: 180,
        intelligence: 182,
        split: 190,
        speed: 202,
      }),
      lsBonus: [],
    },
    {
      weapon: WeaponType.Katana,
      name: "黒衣の刀使い",
      namekana: "コクイノカタナツカイ",
      lightShadow: LightShadowType.Shadow,
      className: "ユダ",
      styleType: StyleType.NS,
      stat: new UnitStat({
        hp: 3444,
        mp: 655,
        power: 211,
        endure: 190,
        luck: 180,
        intelligence: 182,
        split: 190,
        speed: 202,
      }),
      lsBonus: [],
    },
    {
      weapon: WeaponType.Lod,
      name: "デュナリス",
      namekana: "デュナリス",
      lightShadow: LightShadowType.Shadow,
      className: "ソウルブリンガー",
      styleType: StyleType.NS,
      stat: new UnitStat({
        hp: 3444,
        mp: 655,
        power: 211,
        endure: 190,
        luck: 180,
        intelligence: 182,
        split: 190,
        speed: 202,
      }),
      lsBonus: [],
    },
  ];

  return _units
    .sort((a, b) => a.namekana >= b.namekana ? 1 : -1)
    .sort((a, b) => a.weapon >= b.weapon ? 1 : -1);
})();

export function fetchUnits() {
  return units;
}
