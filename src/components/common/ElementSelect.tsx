import { ListItemText, MenuItem, Select } from "@mui/material";
import { ElementType } from "../../constants/common/ElementType";

/** 属性セレクトボックス */
export const ElementSelect = (props: {
  value: ElementType | "all";
  handleSelect: (x: any) => void;
  size?: "small" | "medium" | undefined;
  variant?: "standard" | "outlined" | "filled" | undefined;
}) => {
  const { value, handleSelect, size, variant } = props;

  return (
    <Select
      value={value}
      onChange={(ev) => handleSelect(ev.target.value)}
      sx={{ p: "0 .5rem", minWidth: 50 }}
      disableUnderline
      size={size}
      variant={variant}
    >
      {Object.values(ElementType).map((eType) => (
        <MenuItem value={eType}>
          <ListItemText primary={eType} />
        </MenuItem>
      ))}
    </Select>
  );
};
