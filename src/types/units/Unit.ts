import { LightShadowType } from "../../constants/common/LightShadowType";
import { StyleType } from "../../constants/common/StyleType";
import { WeaponType } from "../../constants/common/WeaponType";
import { LightShadowBonus } from "./LightShadowBonus";
import { UnitStat } from "./UnitStat";

export type Unit = {
  // 武器
  weapon: WeaponType,
  // 名前
  name: string,
  // ソート用カナ
  namekana: string,
  // 天 or 冥
  lightShadow: LightShadowType,
  // ★5クラス名
  className: string,
  // NS or AS or ES
  styleType: StyleType,
  // ベースステータス
  stat: UnitStat,
  // 天冥ボーナス
  lsBonus: LightShadowBonus[],
  // スタイルコンプリートボーナス
  styleBonus?: UnitStat,
};

export function findStyles(units: Unit[], needle: Unit) {
  const others = units.filter(x => x.name === needle.name && x.styleType !== needle.styleType);

  return others;
}