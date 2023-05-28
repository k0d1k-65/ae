import { Grid, Autocomplete, TextField, MenuItem, ListItemText, Select } from "@mui/material";
import { WeaponType } from "../common/constants/WeaponType";
import { EditedOutline } from "../common/EditOutLinedText";
import { IStatBonus, IUnitStatModel } from "../common/models/UnitModel";
import UnitStatBonusEditorComponent from "./StatBonusEditor";

const PersonalitiesForm = (props: {
  unitStat: IUnitStatModel;
  default: IUnitStatModel;
  handleOnChangeStat: (key: keyof IUnitStatModel, value: IUnitStatModel[keyof IUnitStatModel]) => void;
  handleOnChangeStatBonus: (key: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => void;
}) => {
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
      <Grid item xs={2} lg={1}>
        <EditedOutline isEdited={props.default.weapon !== props.unitStat.weapon}>
          <Select
            value={props.unitStat.weapon}
            onChange={(ev) => props.handleOnChangeStat("weapon", ev.target.value)}
            sx={{ p: "0 .5rem", width: "100%" }}
            size={"small"}
          >
            {Object.values(WeaponType).map((wType) => (
              <MenuItem value={wType}>
                <ListItemText primary={wType} />
              </MenuItem>
            ))}
          </Select>
        </EditedOutline>
      </Grid>

      {/* ユニット名入力 */}
      <Grid item xs={5} lg={2}>
        <EditedOutline isEdited={props.default.unitName !== props.unitStat.unitName}>
          <TextField
            value={props.unitStat.unitName}
            onChange={(ev) => props.handleOnChangeStat("unitName", ev.target.value)}
            label="ユニット名"
            sx={{ width: "100%" }}
          />
        </EditedOutline>
      </Grid>

      {/* 真名 */}
      <Grid item xs={5} lg={2}>
        <EditedOutline isEdited={props.default.unitTrueName !== props.unitStat.unitTrueName}>
          <TextField
            value={props.unitStat.unitTrueName || ""}
            onChange={(ev) => props.handleOnChangeStat("unitTrueName", ev.target.value)}
            label="真名"
            sx={{ width: "100%" }}
          />
        </EditedOutline>
      </Grid>

      {/* 余白 */}
      <Grid item xs={12} lg={1}></Grid>

      {/* パーソナリティ */}
      <Grid item xs={12} lg={6}>
        <EditedOutline isEdited={props.default.personalities?.join(",") !== props.unitStat.personalities?.join(",")}>
          <Autocomplete
            options={[]}
            renderInput={(params) => <TextField {...params} label="パーソナリティ" />}
            multiple
            freeSolo
            value={props.unitStat.personalities || []}
            onChange={handlePersonalitiesChange}
            disableCloseOnSelect
          />
        </EditedOutline>
      </Grid>

      {/* 余白 */}
      <Grid item xs={12} lg={6}></Grid>

      {/* スタイルコンプリートボーナス */}
      <Grid item xs={12} lg={6}>
        <UnitStatBonusEditorComponent
          edit={props.unitStat.styleBoardBonus!}
          default={props.default.styleBoardBonus!}
          setter={props.handleOnChangeStatBonus}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalitiesForm;
