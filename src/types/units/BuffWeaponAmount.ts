import { WeaponType } from "../../constants/units/WeaponType";

export type BuffWeaponAmount = {
  label: string,
  amount: number,
  wpType: WeaponType | "all",
};