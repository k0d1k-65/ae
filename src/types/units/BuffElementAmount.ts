import { ElementType } from "../../constants/units/ElementType";

export type BuffElementAmount = {
  label: string,
  amount: number,
  elType: ElementType | "all",
};