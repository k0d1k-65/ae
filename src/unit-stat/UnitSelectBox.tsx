import { Autocomplete, Box, Chip, TextField } from "@mui/material";
import { IUnitStatModel } from "../common/models/UnitModel";
import { StyleType } from "../common/constants/StyleType";

const UnitSelectBox = (props: {
  unitList: IUnitStatModel[];
  selectedUnit: IUnitStatModel | null;
  handleOnSelect: (selected?: IUnitStatModel) => void;
}) => {
  const getChipColor = (style: StyleType) => {
    switch (style) {
      case StyleType.NS:
        return "warning";
      case StyleType.AS:
        return "error";
      case StyleType.ES:
        return "success";
      default:
        return "warning";
    }
  };

  return (
    <Autocomplete
      options={props.unitList}
      value={props.selectedUnit}
      sx={{ width: "320px", maxWidth: "50%" }}
      groupBy={(opt) => opt.weapon}
      getOptionLabel={(opt) => opt.unitName}
      renderOption={(props, opt) => (
        <Box component="li" {...props}>
          <Chip label={opt.style} color={getChipColor(opt.style)} size="small" sx={{ ml: 0.5, mr: 0.5 }} />
          {opt.unitName}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="Unit" />}
      onChange={(ev: any, unit: IUnitStatModel | null) => {
        if (unit) {
          props.handleOnSelect(unit);
        } else {
          props.handleOnSelect();
        }
      }}
      blurOnSelect={true}
    />
  );
};

export default UnitSelectBox;
