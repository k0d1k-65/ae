import { Grid, Autocomplete, TextField } from "@mui/material";
import { IUnitForm } from "./types.interface";
import { StyleType } from "../common/constants/StyleType";
import { LightShadowType } from "../common/constants/LightShadowType";

const StatsForm = (props: {
  unitStat: IUnitForm;
  handleOnChangeStat: (key: keyof IUnitForm, value: IUnitForm[keyof IUnitForm]) => void;
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, event.target.value || 0);
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
        <TextField
          label="クラス名"
          sx={{ width: "100%" }}
          name="className"
          value={props.unitStat.className}
          onChange={handleTextChange}
        />
      </Grid>
      {/* スタイル選択 */}
      <Grid item xs={2} lg={2}>
        <Autocomplete
          options={Object.values(StyleType)}
          renderInput={(params) => <TextField {...params} label="スタイル" sx={{ width: "100%" }} />}
          value={props.unitStat.style}
          disableClearable
          onChange={handleStyleChange}
        />
      </Grid>
      {/* 余白 */}
      <Grid item xs={4} lg={6}></Grid>

      {/* HP */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="HP"
          type="number"
          sx={{ width: "100%" }}
          name="statHp"
          value={props.unitStat.statHp}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={9}></Grid>

      {/* MP */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="MP"
          type="number"
          sx={{ width: "100%" }}
          name="statMp"
          value={props.unitStat.statMp}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 余白 */}
      <Grid item xs={4} lg={9}></Grid>

      {/* 余白 */}
      <Grid item xs={6} lg={9}></Grid>
      {/* 天冥選択 */}
      <Grid item xs={2} lg={1}>
        <Autocomplete
          options={Object.values(LightShadowType)}
          renderInput={(params) => <TextField {...params} label="天冥" sx={{ width: "100%" }} />}
          value={props.unitStat.lightShadow}
          disableClearable
          onChange={handleLightShadowChange}
        />
      </Grid>
      {/* 天冥入力 */}
      <Grid item xs={4} lg={2}>
        <TextField
          label="天冥値"
          type="number"
          sx={{ width: "100%" }}
          name="lightShadowNumber"
          value={props.unitStat.lightShadowNumber}
          onChange={handleNumberChange}
        />
      </Grid>

      {/* 腕力 */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="腕力"
          type="number"
          sx={{ width: "100%" }}
          name="statPower"
          value={props.unitStat.statPower}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 耐久 */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="耐久"
          type="number"
          sx={{ width: "100%" }}
          name="statEndure"
          value={props.unitStat.statEndure}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 幸運 */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="幸運"
          type="number"
          sx={{ width: "100%" }}
          name="statLuck"
          value={props.unitStat.statLuck}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={3}></Grid>

      {/* 知性 */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="知性"
          type="number"
          sx={{ width: "100%" }}
          name="statIntelligense"
          value={props.unitStat.statIntelligense}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 速度 */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="速度"
          type="number"
          sx={{ width: "100%" }}
          name="statSpeed"
          value={props.unitStat.statSpeed}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 精神 */}
      <Grid item xs={4} lg={3}>
        <TextField
          label="精神"
          type="number"
          sx={{ width: "100%" }}
          name="statSplit"
          value={props.unitStat.statSplit}
          onChange={handleNumberChange}
        />
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={3}></Grid>
    </Grid>
  );
};

export default StatsForm;
