import { ListItemIcon, MenuItem, Select } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@emotion/react";
import { WeaponType } from "../constants/WeaponType";
import staffImage from "../../assets/lod.png";
import swordImage from "../../assets/sword.png";
import katanaImage from "../../assets/katana.png";
import axImage from "../../assets/axe.png";
import lanceImage from "../../assets/lance.png";
import bowImage from "../../assets/bow.png";
import fistsImage from "../../assets/fist.png";
import hammerImage from "../../assets/hammer.png";

/** 武器種セレクトボックス */
const WeaponSelect = (props: {
  value: WeaponType | undefined;
  handleSelect: (x: any) => void;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Select value={props.value} onChange={props.handleSelect} sx={props.sx} disableUnderline>
      <MenuItem value={WeaponType.Lod}>
        <ListItemIcon>
          <img src={staffImage} style={{ height: "1.5rem" }} alt="Lod" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Lod}</div>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={WeaponType.Sward}>
        <ListItemIcon>
          <img src={swordImage} style={{ height: "1.5rem" }} alt="Sward" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Sward}</div>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={WeaponType.Katana}>
        <ListItemIcon>
          <img src={katanaImage} style={{ height: "1.5rem" }} alt="Katana" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Katana}</div>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={WeaponType.Axe}>
        <ListItemIcon>
          <img src={axImage} style={{ height: "1.5rem" }} alt="Axe" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Axe}</div>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={WeaponType.Lance}>
        <ListItemIcon>
          <img src={lanceImage} style={{ height: "1.5rem" }} alt="Lance" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Lance}</div>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={WeaponType.Bow}>
        <ListItemIcon>
          <img src={bowImage} style={{ height: "1.5rem" }} alt="Bow" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Bow}</div>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={WeaponType.Fist}>
        <ListItemIcon>
          <img src={fistsImage} style={{ height: "1.5rem" }} alt="Fist" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Fist}</div>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={WeaponType.Hammer}>
        <ListItemIcon>
          <img src={hammerImage} style={{ height: "1.5rem" }} alt="Hammer" />
          <div style={{ marginLeft: 8 }}>{WeaponType.Hammer}</div>
        </ListItemIcon>
      </MenuItem>
    </Select>
  );
};

export default WeaponSelect;
