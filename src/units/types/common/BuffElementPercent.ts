import { ElementType } from "../../../common/constants/ElementType";

/** 属性バフデバフ（%） */
export type BuffElementPercent = {
  /** 属性 */
  type: ElementType;
  /** 補正値 */
  amount: number;
};
