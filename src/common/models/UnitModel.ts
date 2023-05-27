import { LightShadowType } from "../constants/LightShadowType";
import { StyleType } from "../constants/StyleType";
import { WeaponType } from "../constants/WeaponType";

// TODO: なんとか共通化できねーの？
export type IStatBonusTypes =
  | "HP"
  | "MP"
  | "POWER"
  | "ENDURE"
  | "LUCK"
  | "INTELLIGENCE"
  | "SPLIT"
  | "SPEED"
  | "CRITICAL";

export type IStatBonus = {
  /** ステータス種 */
  statType: IStatBonusTypes;
  /** 補正値 */
  statAmount: number;
  /** 演算子 */
  operator: "+" | "%";
};

/** パーソナリティ */
export type IUnitPersonalities = {
  /** 武器選択 */
  weapon: WeaponType;
  /** ユニット名入力 */
  unitName: string;
  /** パーソナリティ */
  personalities?: string[];
  /** 真の名前 */
  unitTrueName?: string;
  /** スタイルコンプリートボーナス */
  styleBoardBonus?: IStatBonus;
};

/** ステータス */
export type IUnitStats = {
  /** クラス名 */
  className?: string;
  /** スタイル選択 */
  style: StyleType;
  /** HP */
  statHp?: number;
  /** MP */
  statMp?: number;
  /** 天冥選択 */
  lightShadow?: LightShadowType;
  /** 天冥入力 */
  lightShadowNumber?: number;
  /** 腕力 */
  statPower?: number;
  /** 耐久 */
  statEndure?: number;
  /** 幸運 */
  statLuck?: number;
  /** 知性 */
  statIntelligense?: number;
  /** 速度 */
  statSpeed?: number;
  /** 精神 */
  statSplit?: number;
  /** 天冥ボーナス 5 */
  ls_5?: IStatBonus;
  /** 天冥ボーナス 15 */
  ls_15?: IStatBonus;
  /** 天冥ボーナス 30 */
  ls_30?: IStatBonus;
  /** 天冥ボーナス 50 */
  ls_50?: IStatBonus;
  /** 天冥ボーナス 75 */
  ls_75?: IStatBonus;
  /** 天冥ボーナス 105 */
  ls_105?: IStatBonus;
  /** 天冥ボーナス 140 */
  ls_140?: IStatBonus;
  /** 天冥ボーナス 175 */
  ls_175?: IStatBonus;
  /** 天冥ボーナス 215 */
  ls_215?: IStatBonus;
  /** 天冥ボーナス 255 */
  ls_255?: IStatBonus;
};

/** アビリティ */
export type IUnitAbilities = {
  /** ヴァリアブルチャント名 */
  variablechantName?: string;
  /** ヴァリアブルチャント詳細 */
  variablechantDetail?: string;
  /** 強化ヴァリアブルチャント名 */
  variablechantEnhancedName?: string;
  /** 強化ヴァリアブルチャント詳細 */
  variablechantEnhancedDetail?: string;
  /** Ex必殺技名 */
  extraSpecialMoveName?: string;
  /** Ex必殺技詳細 */
  extraSpecialMoveDetail?: string;
  /** アナザーセンス名 */
  anotherSenceName?: string;
  /** アナザーセンス詳細 */
  anotherSenceDetail?: string;
  /** 個人アビリティ */
  abilities?: string[];
};

export type ISkillProperty = {
  /** スキル名 */
  name?: string;
  /** 消費MP */
  mp?: number;
  /** 詳細 */
  detail?: string;
};

/** スキル */
export type IUnitSkills = {
  // - 通常攻撃変化
  extra?: ISkillProperty;

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
