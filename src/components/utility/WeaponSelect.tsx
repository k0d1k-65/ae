import { ListItemText, MenuItem, Select } from '@mui/material';
import { getWeaponTypes, WeaponType } from '../../common/constants/WeaponType';

const WeaponSelect = (props: {
  value: WeaponType | "all",
  handleSelect: (x: any) => void,
  size?: "small" | "medium" | undefined,
  variant?: "standard" | "outlined" | "filled" | undefined
}) => {
  const { value, handleSelect, size, variant } = props;

  const weaponTypes = getWeaponTypes();

  return (
    <Select
      value={value}
      onChange={(ev) => handleSelect(ev.target.value)}
      sx={{ p: '0 .5rem', minWidth: 50 }}
      disableUnderline
      size={size}
      variant={variant}
    >
      {weaponTypes.map(wType => (
        <MenuItem value={wType.typ}>
          <ListItemText primary={wType.lbl} />
        </MenuItem>
      ))}
      <MenuItem value="all">
        <ListItemText primary="全" />
      </MenuItem>
    </Select>
  );
};

export default WeaponSelect;
