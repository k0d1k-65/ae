import { WeaponType } from "../constants/WeaponType";

export type BuffWeaponAmount = {
  label: string,
  amount: number,
  wpType: WeaponType | "all",
};