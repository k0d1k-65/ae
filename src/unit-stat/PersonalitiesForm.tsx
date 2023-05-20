import { Grid, Autocomplete, TextField, Box } from "@mui/material";
import WeaponSelect from "../common/WeaponSelect";
import { WeaponType } from "../common/constants/WeaponType";
import { IUnitForm } from "./types.interface";
import { UnitModel } from "../common/models/UnitModel";
import { StyleType } from "../common/constants/StyleType";

const PersonalitiesForm = (props: {
  unitStat: IUnitForm;
  handleOnChangeStat: (key: keyof IUnitForm, value: IUnitForm[keyof IUnitForm]) => void;
  unitList: UnitModel[];
  handleOnChangeUnit: (select: UnitModel) => void;
}) => {
  const handleWeaponSelect = (value: WeaponType) => {
    props.handleOnChangeStat("weapon", value);
  };

  const handleNameChange = (ev: any, unit: UnitModel | string | null) => {
    props.handleOnChangeStat("unitName", (unit as any)?.unitName || unit || "");

    // UnitModelであれば、unit変更を通知
    const isUnitModel = typeof (unit as any)?.unitName === "string" && (unit as any)?.style in StyleType;
    if (isUnitModel) {
      props.handleOnChangeUnit(unit as any);
    }
  };

  const handlePersonalitiesChange = (_: any, items: string[]) => {
    const personalities = [...props.unitStat.personalities, ...items];
    props.handleOnChangeStat("personalities", Array.from(new Set(personalities)));
  };

  return (
    <Grid container>
      {/* 武器選択 */}
      <Grid item xs={3} lg={1}>
        <WeaponSelect value={props.unitStat.weapon} handleSelect={handleWeaponSelect} size="small" />
      </Grid>
      {/* ユニット名入力 */}
      <Grid item xs={9} lg={3}>
        {/* FIXME: 外側から unitStat を変更しても、ラベルが反映されない件 */}
        {/* FIXME: freesolo でも、検索は機能するはずじゃない？ */}
        <Autocomplete
          options={props.unitList}
          groupBy={(opt) => opt.weapon}
          getOptionLabel={(opt) => props.unitStat.unitName}
          renderOption={(props, opt) => (
            <Box component="li" {...props}>
              <span>
                {opt.style} {opt.unitName}
              </span>
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Unit" />}
          onChange={handleNameChange}
          freeSolo
        />
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={2}></Grid>
      {/* パーソナリティ */}
      <Grid item xs={12} lg={6}>
        <Autocomplete
          options={[]}
          renderInput={(params) => <TextField {...params} label="パーソナリティ" />}
          multiple
          freeSolo
          isOptionEqualToValue={() => false}
          value={props.unitStat.personalities}
          onChange={handlePersonalitiesChange}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalitiesForm;
