import { Grid, TextField, MenuItem, ListItemText, Select, SelectChangeEvent } from "@mui/material";
import { StyleType } from "../common/constants/StyleType";
import { LightShadowType } from "../common/constants/LightShadowType";
import { EditedOutline } from "../common/EditOutLinedText";
import { IStatBonus, IUnitStatModel, IUnitStats } from "../common/models/UnitModel";
import LightShadowBonusForm from "./LightShadowBonusForm";
import StyleSelect from "../common/components/StyleSelect";
import LightShadowSelect from "../common/components/LightShadowSelect";

const StatsForm = (props: {
  unitStat: IUnitStatModel;
  default: IUnitStatModel;
  handleOnChangeStat: (key: keyof IUnitStatModel, value: IUnitStatModel[keyof IUnitStatModel]) => void;
  handleOnChangeStatBonus: (
    key: keyof IUnitStats,
    subKey: keyof IStatBonus,
    value: IStatBonus[keyof IStatBonus]
  ) => void;
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, Number(event.target.value) || 0);
  };

  const handleStyleChange = (event: SelectChangeEvent<StyleType>) => {
    props.handleOnChangeStat("style", event.target.value);
  };

  const handleLightShadowChange = (event: SelectChangeEvent<LightShadowType>) => {
    props.handleOnChangeStat("lightShadow", event.target.value || null);
  };

  return (
    <Grid container>
      {/* クラス名 */}
      <Grid item xs={6} lg={4}>
        <EditedOutline isEdited={props.default.className !== props.unitStat.className}>
          <TextField
            label="クラス名"
            sx={{ width: "100%" }}
            name="className"
            value={props.unitStat.className || ""}
            onChange={handleTextChange}
          />
        </EditedOutline>
      </Grid>
      {/* スタイル選択 */}
      <Grid item xs={2} lg={2}>
        <EditedOutline isEdited={props.default.style !== props.unitStat.style}>
          <StyleSelect
            value={props.unitStat.style}
            handleSelect={handleStyleChange}
            sx={{ width: "100%", height: "56px" }}
          />
        </EditedOutline>
      </Grid>
      {/* 余白 */}
      <Grid item xs={4} lg={6}></Grid>

      {/* HP */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statHp !== props.unitStat.statHp}>
          <TextField
            label="HP"
            type="number"
            sx={{ width: "100%" }}
            name="statHp"
            value={props.unitStat.statHp?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={9}></Grid>

      {/* MP */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statMp !== props.unitStat.statMp}>
          <TextField
            label="MP"
            type="number"
            sx={{ width: "100%" }}
            name="statMp"
            value={props.unitStat.statMp?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 余白 */}
      <Grid item xs={4} lg={9}></Grid>

      {/* 余白 */}
      <Grid item xs={6} lg={9}></Grid>
      {/* 天冥選択 */}
      <Grid item xs={2} lg={1}>
        <EditedOutline isEdited={props.default.lightShadow !== props.unitStat.lightShadow}>
          <LightShadowSelect
            value={props.unitStat.lightShadow || null}
            handleSelect={handleLightShadowChange}
            sx={{ width: "100%", height: "56px" }}
          />
        </EditedOutline>
      </Grid>
      {/* 天冥入力 */}
      <Grid item xs={2} lg={1}>
        <EditedOutline isEdited={props.default.lightShadowNumber !== props.unitStat.lightShadowNumber}>
          <TextField
            label="天冥値"
            type="number"
            sx={{ width: "100%" }}
            name="lightShadowNumber"
            value={props.unitStat.lightShadowNumber?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 天冥ボーナス */}
      <Grid item xs={2} lg={1}>
        <LightShadowBonusForm
          unitStat={props.unitStat}
          default={props.default}
          handleOnChangeStat={props.handleOnChangeStatBonus}
        />
      </Grid>

      {/* 腕力 */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statPower !== props.unitStat.statPower}>
          <TextField
            label="腕力"
            type="number"
            sx={{ width: "100%" }}
            name="statPower"
            value={props.unitStat.statPower?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 耐久 */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statEndure !== props.unitStat.statEndure}>
          <TextField
            label="耐久"
            type="number"
            sx={{ width: "100%" }}
            name="statEndure"
            value={props.unitStat.statEndure?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 幸運 */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statLuck !== props.unitStat.statLuck}>
          <TextField
            label="幸運"
            type="number"
            sx={{ width: "100%" }}
            name="statLuck"
            value={props.unitStat.statLuck?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={3}></Grid>

      {/* 知性 */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statIntelligense !== props.unitStat.statIntelligense}>
          <TextField
            label="知性"
            type="number"
            sx={{ width: "100%" }}
            name="statIntelligense"
            value={props.unitStat.statIntelligense?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 速度 */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statSpeed !== props.unitStat.statSpeed}>
          <TextField
            label="速度"
            type="number"
            sx={{ width: "100%" }}
            name="statSpeed"
            value={props.unitStat.statSpeed?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 精神 */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statSplit !== props.unitStat.statSplit}>
          <TextField
            label="精神"
            type="number"
            sx={{ width: "100%" }}
            name="statSplit"
            value={props.unitStat.statSplit?.toString() || ""}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={3}></Grid>
    </Grid>
  );
};

export default StatsForm;
