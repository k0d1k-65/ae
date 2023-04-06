import { ListItemText, MenuItem, Select } from "@mui/material";
import { WeaponType } from "../../constants/units/WeaponType";

/** 武器種セレクトボックス */
const WeaponSelect = (props: {
  value: WeaponType | "all";
  handleSelect: (x: any) => void;
  size?: "small" | "medium" | undefined;
  variant?: "standard" | "outlined" | "filled" | undefined;
}) => {
  const { value, handleSelect, size, variant } = props;

  const weaponTypes = Object.values(WeaponType);

  return (
    <Select
      value={value}
      onChange={(ev) => handleSelect(ev.target.value)}
      sx={{ p: "0 .5rem", minWidth: 50 }}
      disableUnderline
      size={size}
      variant={variant}
    >
      {weaponTypes.map((wType) => (
        <MenuItem value={wType}>
          <ListItemText primary={wType} />
        </MenuItem>
      ))}
      <MenuItem value="all">
        <ListItemText primary="全" />
      </MenuItem>
    </Select>
  );
};

export default WeaponSelect;
