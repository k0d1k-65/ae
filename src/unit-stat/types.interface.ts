import { LightShadowType } from "../common/constants/LightShadowType";
import { StyleType } from "../common/constants/StyleType";
import { WeaponType } from "../common/constants/WeaponType";

export type IPersonalitiesForm = {
  /** 武器選択 */
  weapon: WeaponType;
  /** ユニット名入力 */
  unitName: string;
  /** パーソナリティ */
  personalities: string[];
};

export type IStatsForm = {
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
};

export type IAbilitiesForm = {
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
};

export type ISkillProperty = {
  /** スキル名 */
  name: string;
  /** 消費MP */
  mp: number;
  /** 詳細 */
  detail: string;
};

export type ISkillsForm = {
  /** ★1 スキル */
  first: ISkillProperty;

  /** ★2 スキル */
  second: ISkillProperty;

  /** ★3A スキル */
  thirdA: ISkillProperty;
  /** ★3B スキル */
  thirdB: ISkillProperty;

  /** ★4A スキル */
  fourthA: ISkillProperty;
  /** ★4B スキル */
  fourthB: ISkillProperty;

  /** ★5A スキル */
  fifthA: ISkillProperty;
  /** ★5B スキル */
  fifthB: ISkillProperty;
};

export type IUnitForm = IPersonalitiesForm & IStatsForm & IAbilitiesForm & ISkillsForm;
