import { ListItemText, MenuItem, Select } from '@mui/material';
import { ElementType, getElementTypes } from '../../common/constants/ElementType';

const ElementSelect = (props: {
  value: ElementType | "all",
  handleSelect: (x: any) => void,
  size?: "small" | "medium" | undefined,
  variant?: "standard" | "outlined" | "filled" | undefined
}) => {
  const { value, handleSelect, size, variant } = props;

  const elementTypes = getElementTypes();

  return (
    <Select
      value={value}
      onChange={(ev) => handleSelect(ev.target.value)}
      sx={{ p: '0 .5rem', minWidth: 50 }}
      disableUnderline
      size={size}
      variant={variant}
    >
      {elementTypes.map(eType => (
        <MenuItem value={eType.typ}>
          <ListItemText primary={eType.lbl} />
        </MenuItem>
      ))}
      <MenuItem value="all">
        <ListItemText primary="全" />
      </MenuItem>
    </Select>
  );
};

export default ElementSelect;
