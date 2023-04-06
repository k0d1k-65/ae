import { ElementType } from "../../constants/common/ElementType";

export type BuffElementAmount = {
  label: string,
  amount: number,
  elType: ElementType | "all",
};