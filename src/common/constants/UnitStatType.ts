/** ステータス種 */
export enum UnitStatType {
  HP = "HP",
  MP = "MP",
  ATK = "攻撃",
  DEF = "防御",
  MATK = "魔力",
  MDEF = "魔防",
  POWER = "腕力",
  ENDURE = "耐久",
  LUCK = "幸運",
  INTELLIGENCE = "知性",
  SPLIT = "精神",
  SPEED = "速度",
}

/** ボーナスステータス種 */
export type UnitStatBonusType = keyof typeof UnitStatBonus;

export const UnitStatBonus = {
  HP: "HP",
  MP: "MP",
  POWER: "腕力",
  ENDURE: "耐久",
  LUCK: "幸運",
  INTELLIGENCE: "知性",
  SPLIT: "精神",
  SPEED: "速度",
  CRITICAL: "クリティカル率",
} as const;
