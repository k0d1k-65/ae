import { UnitStatType } from "../constants/UnitStatType";

export type LightShadowBonus = {
  lightShadow: number,
  statType: UnitStatType,
  pattern: "additional" | "multiple",
  amount: number,
};