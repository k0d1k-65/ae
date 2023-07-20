import { ListItemText, ListItemIcon, MenuItem, Select } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@emotion/react";
import { LightShadowType } from "../constants/LightShadowType";
import lightImage from "../../assets/light.png";
import shadowImage from "../../assets/shadow.png";

/** 天冥セレクトボックス */
const LightShadowSelect = (props: {
  value: LightShadowType | null;
  handleSelect: (x: any) => void;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Select value={props.value} onChange={props.handleSelect} sx={props.sx} disableUnderline>
      <MenuItem value="">
        <ListItemText primary="-" />
      </MenuItem>
      <MenuItem value={LightShadowType.Light}>
        <ListItemIcon>
          <img src={lightImage} style={{ height: "1.5rem" }} alt="Hammer" />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={LightShadowType.Shadow}>
        <ListItemIcon>
          <img src={shadowImage} style={{ height: "1.5rem" }} alt="Hammer" />
        </ListItemIcon>
      </MenuItem>
    </Select>
  );
};

export default LightShadowSelect;
