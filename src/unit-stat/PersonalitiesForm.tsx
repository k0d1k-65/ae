import React from "react";
import { Grid, Autocomplete, TextField } from "@mui/material";
import WeaponSelect from "../common/WeaponSelect";
import { WeaponType } from "../common/constants/WeaponType";
import { IUnitForm } from "./types.interface";

const PersonalitiesForm = (props: {
  unitStat: IUnitForm;
  handleOnChangeStat: (key: keyof IUnitForm, value: IUnitForm[keyof IUnitForm]) => void;
}) => {
  const handleWeaponSelect = (value: WeaponType) => {
    props.handleOnChangeStat("weapon", value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat("unitName", event.target.value);
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
        <TextField
          value={props.unitStat.unitName}
          onChange={handleNameChange}
          label="ユニット名"
          sx={{ width: "100%" }}
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
