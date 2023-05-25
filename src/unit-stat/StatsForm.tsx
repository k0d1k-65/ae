import { Grid, Autocomplete, TextField } from "@mui/material";
import { IUnitForm } from "./types.interface";
import { StyleType } from "../common/constants/StyleType";
import { LightShadowType } from "../common/constants/LightShadowType";
import { EditedOutline } from "../common/EditOutLinedText";

const StatsForm = (props: {
  unitStat: IUnitForm;
  default: IUnitForm;
  handleOnChangeStat: (key: keyof IUnitForm, value: IUnitForm[keyof IUnitForm]) => void;
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, Number(event.target.value) || 0);
  };

  const handleStyleChange = (_: any, style: StyleType) => {
    props.handleOnChangeStat("style", style);
  };

  const handleLightShadowChange = (_: any, ls: LightShadowType) => {
    props.handleOnChangeStat("lightShadow", ls);
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
            value={props.unitStat.className}
            onChange={handleTextChange}
          />
        </EditedOutline>
      </Grid>
      {/* スタイル選択 */}
      <Grid item xs={2} lg={2}>
        <EditedOutline isEdited={props.default.style !== props.unitStat.style}>
          <Autocomplete
            options={Object.values(StyleType)}
            renderInput={(params) => <TextField {...params} label="スタイル" sx={{ width: "100%" }} />}
            value={props.unitStat.style}
            disableClearable
            onChange={handleStyleChange}
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
            value={props.unitStat.statHp.toString()}
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
            value={props.unitStat.statMp.toString()}
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
          <Autocomplete
            options={Object.values(LightShadowType)}
            renderInput={(params) => <TextField {...params} label="天冥" sx={{ width: "100%" }} />}
            value={props.unitStat.lightShadow}
            disableClearable
            onChange={handleLightShadowChange}
          />
        </EditedOutline>
      </Grid>
      {/* 天冥入力 */}
      <Grid item xs={4} lg={2}>
        <EditedOutline isEdited={props.default.lightShadowNumber !== props.unitStat.lightShadowNumber}>
          <TextField
            label="天冥値"
            type="number"
            sx={{ width: "100%" }}
            name="lightShadowNumber"
            value={props.unitStat.lightShadowNumber.toString()}
            onChange={handleNumberChange}
          />
        </EditedOutline>
      </Grid>

      {/* 腕力 */}
      <Grid item xs={4} lg={3}>
        <EditedOutline isEdited={props.default.statPower !== props.unitStat.statPower}>
          <TextField
            label="腕力"
            type="number"
            sx={{ width: "100%" }}
            name="statPower"
            value={props.unitStat.statPower.toString()}
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
            value={props.unitStat.statEndure.toString()}
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
            value={props.unitStat.statLuck.toString()}
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
            value={props.unitStat.statIntelligense.toString()}
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
            value={props.unitStat.statSpeed.toString()}
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
            value={props.unitStat.statSplit.toString()}
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
