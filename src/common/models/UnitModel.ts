import { LightShadowType } from "../constants/LightShadowType";
import { StyleType } from "../constants/StyleType";
import { WeaponType } from "../constants/WeaponType";

type UnitSkillModel = {
  /** スキル名 */
  name: string;
  /** 消費MP */
  mp: number;
  /** 詳細 */
  detail: string;
};

export type UnitModel = {
  /** 武器選択 */
  weapon: WeaponType;
  /** ユニット名入力 */
  unitName: string;
  /** パーソナリティ */
  personalities: string[];

  /** クラス名 */
  className: string;
  /** スタイル選択 */
  style: StyleType;
  /** HP */
  statHp: number;
  /** MP */
  statMp: number;
  /** 天冥選択 */
  lightShadow: LightShadowType;
  /** 天冥入力 */
  lightShadowNumber: number;
  /** 腕力 */
  statPower: number;
  /** 耐久 */
  statEndure: number;
  /** 幸運 */
  statLuck: number;
  /** 知性 */
  statIntelligense: number;
  /** 速度 */
  statSpeed: number;
  /** 精神 */
  statSplit: number;

  /** ヴァリアブルチャント名 */
  variablechantName: string;
  /** ヴァリアブルチャント詳細 */
  variablechantDetail: string;
  /** Ex必殺技名 */
  extraSpecialMoveName: string;
  /** Ex必殺技詳細 */
  extraSpecialMoveDetail: string;
  /** アナザーセンス名 */
  anotherSenceName: string;
  /** アナザーセンス詳細 */
  anotherSenceDetail: string;
  /** 個人アビリティ */
  abilities: string[];

  /** ★1 スキル */
  first: UnitSkillModel;

  /** ★2 スキル */
  second: UnitSkillModel;

  /** ★3A スキル */
  thirdA: UnitSkillModel;
  /** ★3B スキル */
  thirdB: UnitSkillModel;

  /** ★4A スキル */
  fourthA: UnitSkillModel;
  /** ★4B スキル */
  fourthB: UnitSkillModel;

  /** ★5A スキル */
  fifthA: UnitSkillModel;
  /** ★5B スキル */
  fifthB: UnitSkillModel;
};
