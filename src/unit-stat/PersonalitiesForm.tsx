import { Grid, Autocomplete, TextField } from "@mui/material";
import WeaponSelect from "../common/WeaponSelect";
import { WeaponType } from "../common/constants/WeaponType";
import { EditedOutline } from "../common/EditOutLinedText";
import { IUnitStatModel } from "../common/models/UnitModel";

const PersonalitiesForm = (props: {
  unitStat: IUnitStatModel;
  default: IUnitStatModel;
  handleOnChangeStat: (key: keyof IUnitStatModel, value: IUnitStatModel[keyof IUnitStatModel]) => void;
}) => {
  const handleWeaponSelect = (value: WeaponType) => {
    props.handleOnChangeStat("weapon", value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat("unitName", event.target.value);
  };

  const handlePersonalitiesChange = (_: any, items: string[]) => {
    // カンマ区切りで一括登録
    const personalities = [
      ...items.reduce<string[]>((acuumelate, item) => {
        return [...acuumelate, ...item.split(",")];
      }, []),
    ];

    props.handleOnChangeStat("personalities", Array.from(new Set(personalities)));
  };

  return (
    <Grid container>
      {/* 武器選択 */}
      <EditedOutline isEdited={props.default.weapon !== props.unitStat.weapon}>
        <Grid item xs={3} lg={1}>
          <WeaponSelect value={props.unitStat.weapon} handleSelect={handleWeaponSelect} size="small" />
        </Grid>
      </EditedOutline>
      {/* ユニット名入力 */}
      <Grid item xs={9} lg={3}>
        <EditedOutline isEdited={props.default.unitName !== props.unitStat.unitName}>
          <TextField
            value={props.unitStat.unitName}
            onChange={handleNameChange}
            label="ユニット名"
            sx={{ width: "100%" }}
          />
        </EditedOutline>
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={2}></Grid>
      {/* パーソナリティ */}
      <Grid item xs={12} lg={6}>
        <EditedOutline isEdited={props.default.personalities?.join(",") !== props.unitStat.personalities?.join(",")}>
          <Autocomplete
            options={[]}
            renderInput={(params) => <TextField {...params} label="パーソナリティ" />}
            multiple
            freeSolo
            value={props.unitStat.personalities}
            onChange={handlePersonalitiesChange}
            disableCloseOnSelect
          />
        </EditedOutline>
      </Grid>
    </Grid>
  );
};

export default PersonalitiesForm;
