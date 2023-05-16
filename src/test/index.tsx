import React from "react";
import { ElementType } from "../common/constants/ElementType";
import { WeaponType } from "../common/constants/WeaponType";
import { ElementSelect } from "../common/ElementSelect";
import Spacer from "../common/Spacer";
import WeaponSelect from "../common/WeaponSelect";

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
