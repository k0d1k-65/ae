import { ElementType } from "../constants/ElementType";

export type BuffElementAmount = {
  label: string,
  amount: number,
  elType: ElementType | "all",
};