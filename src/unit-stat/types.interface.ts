import { LightShadowType } from "../common/constants/LightShadowType";
import { StyleType } from "../common/constants/StyleType";
import { WeaponType } from "../common/constants/WeaponType";

export interface IPersonalitiesForm {
  /** 武器選択 */
  weapon: WeaponType;
  /** ユニット名入力 */
  unitName: string;
  /** パーソナリティ */
  personalities: string[];
}

export interface IStatsForm {
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
}

export interface IAbilitiesForm {
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
}

export interface ISkillsForm {
  /** ★1 スキル */
  first: string;
  /** 消費MP */
  firstMp: number;
  /** 詳細 */
  firstDetail: string;

  /** ★2 スキル */
  second: string;
  /** 消費MP */
  secondMp: number;
  /** 詳細 */
  secondDetail: string;

  /** ★3A スキル */
  thirdA: string;
  /** 消費MP */
  thirdAMp: number;
  /** 詳細 */
  thirdADetail: string;
  /** ★3B スキル */
  thirdB: string;
  /** 消費MP */
  thirdBMp: number;
  /** 詳細 */
  thirdBDetail: string;

  /** ★4A スキル */
  fourthA: string;
  /** 消費MP */
  fourthAMp: number;
  /** 詳細 */
  fourthADetail: string;
  /** ★4B スキル */
  fourthB: string;
  /** 消費MP */
  fourthBMp: number;
  /** 詳細 */
  fourthBDetail: string;

  /** ★5A スキル */
  fifthA: string;
  /** 消費MP */
  fifthAMp: number;
  /** 詳細 */
  fifthADetail: string;
  /** ★5B スキル */
  fifthB: string;
  /** 消費MP */
  fifthBMp: number;
  /** 詳細 */
  fifthBDetail: string;
}
