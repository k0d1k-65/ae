import { WeaponType } from "../../constants/common/WeaponType";

export type BuffWeaponAmount = {
  label: string,
  amount: number,
  wpType: WeaponType | "all",
};