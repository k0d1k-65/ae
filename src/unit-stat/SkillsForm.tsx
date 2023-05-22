import { Grid, TextField } from "@mui/material";
import { ISkillProperty, ISkillsForm, IUnitForm } from "./types.interface";
import { EditedOutline } from "../common/EditOutLinedText";
import { StyleType } from "../common/constants/StyleType";

const SkillsForm = (props: {
  unitStat: IUnitForm;
  default: IUnitForm;
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

  const FirstSkill = () => (
    <>
      <EditedOutline isEdited={props.default.first.name !== props.unitStat.first.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★1 スキル"
          name="first"
          value={props.unitStat.first.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.first.mp !== props.unitStat.first.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="first"
          value={props.unitStat.first.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.first.detail !== props.unitStat.first.detail} style={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="first"
          value={props.unitStat.first.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  const SecondSkill = () => (
    <>
      <EditedOutline isEdited={props.default.second.name !== props.unitStat.second.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★2 スキル"
          name="second"
          value={props.unitStat.second.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.second.mp !== props.unitStat.second.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="second"
          value={props.unitStat.second.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.second.detail !== props.unitStat.second.detail} style={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="second"
          value={props.unitStat.second.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  const ThirdASkill = () => (
    <>
      <EditedOutline isEdited={props.default.thirdA.name !== props.unitStat.thirdA.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★3 スキル"
          name="thirdA"
          value={props.unitStat.thirdA.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.thirdA.mp !== props.unitStat.thirdA.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="thirdA"
          value={props.unitStat.thirdA.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.thirdA.detail !== props.unitStat.thirdA.detail} style={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="thirdA"
          value={props.unitStat.thirdA.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  const ThirdBSkill = () => (
    <>
      <EditedOutline isEdited={props.default.thirdB.name !== props.unitStat.thirdB.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★3 スキル"
          name="thirdB"
          value={props.unitStat.thirdB.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.thirdB.mp !== props.unitStat.thirdB.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="thirdB"
          value={props.unitStat.thirdB.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.thirdB.detail !== props.unitStat.thirdB.detail} style={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="thirdB"
          value={props.unitStat.thirdB.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  const FourthASkill = () => (
    <>
      <EditedOutline isEdited={props.default.fourthA.name !== props.unitStat.fourthA.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★4 スキル"
          name="fourthA"
          value={props.unitStat.fourthA.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.fourthA.mp !== props.unitStat.fourthA.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="fourthA"
          value={props.unitStat.fourthA.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline
        isEdited={props.default.fourthA.detail !== props.unitStat.fourthA.detail}
        style={{ width: "100%" }}
      >
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="fourthA"
          value={props.unitStat.fourthA.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  const FourthBSkill = () => (
    <>
      <EditedOutline isEdited={props.default.fourthB.name !== props.unitStat.fourthB.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★4 スキル"
          name="fourthB"
          value={props.unitStat.fourthB.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.fourthB.mp !== props.unitStat.fourthB.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="fourthB"
          value={props.unitStat.fourthB.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline
        isEdited={props.default.fourthB.detail !== props.unitStat.fourthB.detail}
        style={{ width: "100%" }}
      >
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="fourthB"
          value={props.unitStat.fourthB.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  const FifthASkill = () => (
    <>
      <EditedOutline isEdited={props.default.fifthA.name !== props.unitStat.fifthA.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★5 スキル"
          name="fifthA"
          value={props.unitStat.fifthA.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.fifthA.mp !== props.unitStat.fifthA.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="fifthA"
          value={props.unitStat.fifthA.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.fifthA.detail !== props.unitStat.fifthA.detail} style={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="fifthA"
          value={props.unitStat.fifthA.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  const FifthBSkill = () => (
    <>
      <EditedOutline isEdited={props.default.fifthB.name !== props.unitStat.fifthB.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="★5 スキル"
          name="fifthB"
          value={props.unitStat.fifthB.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.fifthB.mp !== props.unitStat.fifthB.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          name="fifthB"
          value={props.unitStat.fifthB.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.fifthB.detail !== props.unitStat.fifthB.detail} style={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          name="fifthB"
          value={props.unitStat.fifthB.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );

  return (
    <Grid container>
      <Grid container item xs={12} xl={9}>
        {props.unitStat.style === StyleType.AS ? (
          <>
            <FirstSkill />
            <SecondSkill />
            <ThirdASkill />
            <ThirdBSkill />
            <FourthASkill />
            <FourthBSkill />
            <FifthASkill />
            <FifthBSkill />
          </>
        ) : (
          <>
            <FirstSkill />
            <FourthBSkill />
            <FifthBSkill />
            <SecondSkill />
            <ThirdASkill />
            <ThirdBSkill />
            <FourthASkill />
            <FifthASkill />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default SkillsForm;
