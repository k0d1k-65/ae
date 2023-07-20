import { ListItemIcon, MenuItem, Select } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@emotion/react";
import { StyleType } from "../constants/StyleType";
import { StyleChip } from "../StyleChip";

/** スタイルセレクトボックス */
const StyleSelect = (props: { value: StyleType | undefined; handleSelect: (x: any) => void; sx?: SxProps<Theme> }) => {
  return (
    <Select value={props.value} onChange={props.handleSelect} sx={props.sx} disableUnderline>
      <MenuItem value={StyleType.NS}>
        <ListItemIcon>
          <StyleChip styleType={StyleType.NS} />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={StyleType.AS}>
        <ListItemIcon>
          <StyleChip styleType={StyleType.AS} />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={StyleType.ES}>
        <ListItemIcon>
          <StyleChip styleType={StyleType.ES} />
        </ListItemIcon>
      </MenuItem>
    </Select>
  );
};

export default StyleSelect;
