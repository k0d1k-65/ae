import { WeaponType } from "../../constants/common/WeaponType";

/** 武器種バフデバフ（%） */
export type BuffWeaponPercent = {
  /** 武器種 */
  type: WeaponType;
  /** 補正値 */
  amount: number;
};
