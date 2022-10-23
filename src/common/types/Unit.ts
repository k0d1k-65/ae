import { LightShadowType } from "../constants/LightShadowType";
import { StyleType } from "../constants/StyleType";
import { WeaponType } from "../constants/WeaponType";

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
  hp: number,
  mp: number,
  power: number,
  endure: number,
  luck: number,
  intelligence: number,
  split: number,
  speed: number,
};
