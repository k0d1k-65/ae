import { Chip } from "@mui/material";
import { StyleType, StyleTypeColor } from "../../constants/units/StyleType";

/** NS/AS/ES 表記のチップ */
export function StyleChip(props: { styleType: StyleType | null }) {
  if (props.styleType == null) {
    return <></>;
  }

  const chipColor =
    props.styleType === StyleType.ES
      ? StyleTypeColor.ES
      : props.styleType === StyleType.AS
      ? StyleTypeColor.AS
      : StyleTypeColor.NS;

  return (
    <Chip
      label={props.styleType}
      color={chipColor}
      size="small"
      sx={{ ml: 0.5, mr: 0.5 }}
    />
  );
}
