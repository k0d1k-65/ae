import { LightShadowType } from "../constants/units/LightShadowType"
import { StyleType } from "../constants/units/StyleType"
import { WeaponType } from "../constants/units/WeaponType"
import { Unit } from "../types/units/Unit"
import { UnitStat } from "../types/units/UnitStat"

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
      styleBonus: new UnitStat({atk: 10})
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
      styleBonus: new UnitStat({hp: 200})
    },
    {
      weapon: WeaponType.Sward,
      name: "アルド",
      namekana: "アルド",
      lightShadow: LightShadowType.Light,
      className: "ドラゴンベアラー",
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
    {
      weapon: WeaponType.Lance,
      name: "フォラン",
      namekana: "フォラン",
      lightShadow: LightShadowType.Light,
      className: "ハスタアンティカ",
      styleType: StyleType.AS,
      stat: new UnitStat({
        hp: 3142,
        mp: 512,
        power: 241,
        endure: 166,
        luck: 163,
        intelligence: 152,
        split: 178,
        speed: 246,
      }),
      lsBonus: [
        {
          lightShadow: 5,
          stat: new UnitStat({luck: 5}),
        },
        {
          lightShadow: 15,
          stat: new UnitStat({hp: 100}),
        },
        {
          lightShadow: 30,
          stat: new UnitStat({mp: 40}),
        },
        {
          lightShadow: 50,
          stat: new UnitStat({intelligence: 10}),
        },
      ],
    },
  ];

  return _units
    .sort((a, b) => a.namekana >= b.namekana ? 1 : -1)
    .sort((a, b) => a.weapon >= b.weapon ? 1 : -1);
})();

export function fetchUnits() {
  return units;
}
