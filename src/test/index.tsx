import React from "react";
import { StyleChip } from "../common/StyleChip";
import { StyleType } from "../common/constants/StyleType";
import StyleSelect from "../common/components/StyleSelect";
import { WeaponType } from "../common/constants/WeaponType";
import staffImage from '../assets/lod.png';
import swordImage from '../assets/sword.png';
import katanaImage from '../assets/katana.png';
import axImage from '../assets/axe.png';
import lanceImage from '../assets/lance.png';
import bowImage from '../assets/bow.png';
import fistsImage from '../assets/fist.png';
import hammerImage from '../assets/hammer.png';
import WeaponSelect from "../common/components/WeaponSelect";
import LightShadowSelect from "../common/components/LightShadowSelect";
import { LightShadowType } from "../common/constants/LightShadowType";

export function Test() {
  return (
    <>
      <StyleChip styleType={StyleType.NS} />
      <StyleChip styleType={StyleType.AS} />
      <StyleChip styleType={StyleType.ES} />
      <hr />

      <StyleSelect value={StyleType.NS} handleSelect={()=>{}} />
      <hr />
{/* 
      <img src={staffImage} alt="Lod" />
      <img src={swordImage} alt="Sward" />
      <img src={katanaImage} alt="Katana" />
      <img src={axImage} alt="Axe" />
      <img src={lanceImage} alt="Lance" />
      <img src={bowImage} alt="Bow" />
      <img src={fistsImage} alt="Fist" />
      <img src={hammerImage} alt="Hammer" />
      <hr />
 */}
      <WeaponSelect value={WeaponType.Lod} handleSelect={()=>{}} />
      <hr />

      <LightShadowSelect value={LightShadowType.Light} handleSelect={() => {}} />

      <hr />
    </>
  );
}
