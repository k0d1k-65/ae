import * as React from "react";
import { Box } from "@mui/system";
import BuffEffects from "./BuffEffects";
import EquipmentEffects from "./EquipmentEffects";
import CommonEffects from "./CommonEffects";

export default function EffectBase() {
  const initStrings: number[] = [];
  const initNumbers: number[] = [];

  return (
    <Box margin={2} maxWidth={900}>
      {/* 装備による強化 */}
      {<EquipmentEffects />}

      {/* スキルによる強化 */}
      {<BuffEffects />}

      {/* 装備・スキルで共有の強化 */}
      {<CommonEffects />}
    </Box>
  );
}
