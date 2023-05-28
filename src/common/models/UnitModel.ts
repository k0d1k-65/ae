import { LightShadowType } from "../constants/LightShadowType";
import { StyleType } from "../constants/StyleType";
import { UnitStatBonusType } from "../constants/UnitStatType";
import { WeaponType } from "../constants/WeaponType";

export type IStatBonus = {
  /** ステータス種 */
  statType: UnitStatBonusType | null;
  /** 補正値 */
  statAmount: number | null;
  /** 演算子 */
  operator: "+" | "%" | null;
};

/** パーソナリティ */
export type IUnitPersonalities = {
  /** 武器選択 */
  weapon: WeaponType;
  /** ユニット名入力 */
  unitName: string;
  /** パーソナリティ */
  personalities: string[] | null;
  /** 真の名前 */
  unitTrueName: string | null;
  /** スタイルコンプリートボーナス */
  styleBoardBonus: IStatBonus | null;
};

/** ステータス */
export type IUnitStats = {
  /** クラス名 */
  className: string | null;
  /** スタイル選択 */
  style: StyleType;
  /** HP */
  statHp: number | null;
  /** MP */
  statMp: number | null;
  /** 天冥選択 */
  lightShadow: LightShadowType | null;
  /** 天冥入力 */
  lightShadowNumber: number | null;
  /** 腕力 */
  statPower: number | null;
  /** 耐久 */
  statEndure: number | null;
  /** 幸運 */
  statLuck: number | null;
  /** 知性 */
  statIntelligense: number | null;
  /** 速度 */
  statSpeed: number | null;
  /** 精神 */
  statSplit: number | null;
  /** 天冥ボーナス 5 */
  ls_5: IStatBonus | null;
  /** 天冥ボーナス 15 */
  ls_15: IStatBonus | null;
  /** 天冥ボーナス 30 */
  ls_30: IStatBonus | null;
  /** 天冥ボーナス 50 */
  ls_50: IStatBonus | null;
  /** 天冥ボーナス 75 */
  ls_75: IStatBonus | null;
  /** 天冥ボーナス 105 */
  ls_105: IStatBonus | null;
  /** 天冥ボーナス 140 */
  ls_140: IStatBonus | null;
  /** 天冥ボーナス 175 */
  ls_175: IStatBonus | null;
  /** 天冥ボーナス 215 */
  ls_215: IStatBonus | null;
  /** 天冥ボーナス 255 */
  ls_255: IStatBonus | null;
};

/** アビリティ */
export type IUnitAbilities = {
  /** ヴァリアブルチャント名 */
  variablechantName: string | null;
  /** ヴァリアブルチャント詳細 */
  variablechantDetail: string | null;
  /** 強化ヴァリアブルチャント名 */
  variablechantEnhancedName: string | null;
  /** 強化ヴァリアブルチャント詳細 */
  variablechantEnhancedDetail: string | null;
  /** Ex必殺技名 */
  extraSpecialMoveName: string | null;
  /** Ex必殺技詳細 */
  extraSpecialMoveDetail: string | null;
  /** アナザーセンス名 */
  anotherSenceName: string | null;
  /** アナザーセンス詳細 */
  anotherSenceDetail: string | null;
  /** 個人アビリティ */
  abilities: string[] | null;
};

export type ISkillProperty = {
  /** スキル名 */
  name: string | null;
  /** 消費MP */
  mp: number | null;
  /** 詳細 */
  detail: string | null;
};

/** スキル */
export type IUnitSkills = {
  // - 通常攻撃変化
  extra: ISkillProperty;

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

export type IUnitStatModel = IUnitPersonalities & IUnitStats & IUnitAbilities & IUnitSkills;
