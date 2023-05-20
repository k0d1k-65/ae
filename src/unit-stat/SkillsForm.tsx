import { Grid, TextField } from "@mui/material";
import { ISkillProperty, ISkillsForm, IUnitForm } from "./types.interface";

const SkillsForm = (props: {
  unitStat: IUnitForm;
  handleOnChangeSkill: (key: keyof ISkillsForm, grade: keyof ISkillProperty, value: IUnitForm[keyof IUnitForm]) => void;
}) => {
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeSkill(event.target.name as any, "name", event.target.value);
  };

  const handleOnChangeMp = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeSkill(event.target.name as any, "mp", event.target.value || 0);
  };

  const handleOnChangeDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeSkill(event.target.name as any, "detail", event.target.value);
  };

  return (
    <Grid container>
      <Grid container item xl={9}>
        <TextField
          label="★1 スキル"
          sx={{ width: "80%" }}
          name="first"
          value={props.unitStat.first.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="first"
          value={props.unitStat.first.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="first"
          value={props.unitStat.first.detail}
          onChange={handleOnChangeDetail}
        />

        <TextField
          label="★2 スキル"
          sx={{ width: "80%" }}
          name="second"
          value={props.unitStat.second.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="second"
          value={props.unitStat.second.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="second"
          value={props.unitStat.second.detail}
          onChange={handleOnChangeDetail}
        />

        <TextField
          label="★3 スキル"
          sx={{ width: "80%" }}
          name="thirdA"
          value={props.unitStat.thirdA.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="thirdA"
          value={props.unitStat.thirdA.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="thirdA"
          value={props.unitStat.thirdA.detail}
          onChange={handleOnChangeDetail}
        />
        <TextField
          label="★3 スキル"
          sx={{ width: "80%" }}
          name="thirdB"
          value={props.unitStat.thirdB.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="thirdB"
          value={props.unitStat.thirdB.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="thirdB"
          value={props.unitStat.thirdB.detail}
          onChange={handleOnChangeDetail}
        />

        <TextField
          label="★4 スキル"
          sx={{ width: "80%" }}
          name="fourthA"
          value={props.unitStat.fourthA.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="fourthA"
          value={props.unitStat.fourthA.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="fourthA"
          value={props.unitStat.fourthA.detail}
          onChange={handleOnChangeDetail}
        />
        <TextField
          label="★4 スキル"
          sx={{ width: "80%" }}
          name="fourthB"
          value={props.unitStat.fourthB.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="fourthB"
          value={props.unitStat.fourthB.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="fourthB"
          value={props.unitStat.fourthB.detail}
          onChange={handleOnChangeDetail}
        />

        <TextField
          label="★5 スキル"
          sx={{ width: "80%" }}
          name="fifthA"
          value={props.unitStat.fifthA.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="fifthA"
          value={props.unitStat.fifthA.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="fifthA"
          value={props.unitStat.fifthA.detail}
          onChange={handleOnChangeDetail}
        />
        <TextField
          label="★5 スキル"
          sx={{ width: "80%" }}
          name="fifthB"
          value={props.unitStat.fifthB.name}
          onChange={handleOnChangeName}
        />
        <TextField
          label="消費MP"
          type="number"
          sx={{ width: "20%" }}
          name="fifthB"
          value={props.unitStat.fifthB.mp}
          onChange={handleOnChangeMp}
        />
        <TextField
          label="詳細"
          multiline
          sx={{ width: "100%" }}
          name="fifthB"
          value={props.unitStat.fifthB.detail}
          onChange={handleOnChangeDetail}
        />
      </Grid>
    </Grid>
  );
};

export default SkillsForm;
