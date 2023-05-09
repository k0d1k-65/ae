import React from "react";
import { ElementType } from "../constants/common/ElementType";
import { WeaponType } from "../constants/common/WeaponType";
import { ElementSelect } from "./common/ElementSelect";
import Spacer from "./common/Spacer";
import WeaponSelect from "./common/WeaponSelect";

export function Test() {
  const [elm, setElm] = React.useState<ElementType>(ElementType.All);
  const [wpn, setWpn] = React.useState<WeaponType>(WeaponType.All);

  return (
    <>
      <ElementSelect value={elm} handleSelect={setElm} />
      <Spacer size={80} />
      <WeaponSelect value={wpn} handleSelect={setWpn} />
    </>
  );
}
