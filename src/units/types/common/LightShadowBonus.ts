import { UnitStatModel } from "../models/UnitStatModel";

/** 天冥ボーナスアイテム */
export type LightShadowBonus = {
  /** 天冥値 */
  lightShadow: number;
  /** ボーナス内容 */
  stat: UnitStatModel;
};
