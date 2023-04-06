import { Chip } from "@mui/material";
import { StyleType, StyleTypeColor } from "../../constants/units/StyleType";

export function StyleChip(props: {styleType: StyleType|null}) {
  if (props.styleType == null) {
    return (<></>);
  }

  const chipColor =
    props.styleType === StyleType.ES
    ? StyleTypeColor.ES
    : props.styleType === StyleType.AS
    ? StyleTypeColor.AS
    : StyleTypeColor.NS;

    return (<Chip label={props.styleType} color={chipColor} size="small" sx={{ml: .5, mr: .5}}/>);
}