import { LightShadowType } from "../../constants/common/LightShadowType";
import { StyleType } from "../../constants/common/StyleType";
import { WeaponType } from "../../constants/common/WeaponType";
import { LightShadowBonus } from "../common/LightShadowBonus";
import { UnitStat } from "../common/UnitStat";

/** ユニット */
export type Unit = {
  /** 武器 */
  weapon: WeaponType;
  /** 名前 */
  name: string;
  /** ソート用カナ */
  namekana: string;
  /** 天 or 冥 */
  lightShadow: LightShadowType;
  /** ★5クラス名 */
  className: string;
  /** NS or AS or ES */
  styleType: StyleType;
  /** ベースステータス */
  stat: UnitStat;
  /** 天冥ボーナス */
  lsBonus: LightShadowBonus[];
  /** スタイルコンプリートボーナス */
  styleBonus?: UnitStat;
};

// TODO: unit-service内に移動し、引数unitsはインスタンス内を参照するような形式にする。
export function findOtherStyles(units: Unit[], needle: Unit) {
  const others = units.filter((x) => x.name === needle.name && x.styleType !== needle.styleType);

  return others;
}
