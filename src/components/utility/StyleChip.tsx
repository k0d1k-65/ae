import { Chip } from "@mui/material";
import { StyleType } from "../../common/constants/StyleType";

export function StyleChip(props: {styleType: StyleType|null}) {
  if (props.styleType == null) {
    return (<></>);
  }

  const chipColor =
    props.styleType === StyleType.ES
    ? "success"
    : props.styleType === StyleType.AS
    ? "error"
    : "warning";

    return (<Chip label={props.styleType} color={chipColor} size="small" sx={{ml: .5, mr: .5}}/>);
}