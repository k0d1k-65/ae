import React from "react";
import { Grid } from "@mui/material";
import { StyleType } from "../common/constants/StyleType";
import UnitSkillEditorComponent from "./SkillEditor";
import { ISkillProperty, IUnitSkills, IUnitStatModel } from "../common/models/UnitModel";

const SkillsForm = (props: {
  unitStat: IUnitStatModel;
  defaultStat: IUnitStatModel;
  handleOnChangeSkill: (
    key: keyof IUnitSkills,
    grade: keyof ISkillProperty,
    value: IUnitStatModel[keyof IUnitStatModel]
  ) => void;
}) => {
  const { unitStat, defaultStat, handleOnChangeSkill } = props;

  return (
    <Grid container>
      <Grid container item xs={12} xl={9}>
        <UnitSkillEditorComponent
          default={defaultStat.extra}
          edit={unitStat.extra}
          gradeTitle="通常攻撃変化"
          gradeKey="extra"
          setter={handleOnChangeSkill}
        />

        {props.unitStat.style === StyleType.AS ? (
          <>
            <UnitSkillEditorComponent
              default={defaultStat.first}
              edit={unitStat.first}
              gradeTitle="★1"
              gradeKey="first"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fourthB}
              edit={unitStat.fourthB}
              gradeTitle="★4B"
              gradeKey="fourthB"
              setter={handleOnChangeSkill}
            />

            <UnitSkillEditorComponent
              default={defaultStat.second}
              edit={unitStat.second}
              gradeTitle="★2"
              gradeKey="second"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.thirdA}
              edit={unitStat.thirdA}
              gradeTitle="★3A"
              gradeKey="thirdA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.thirdB}
              edit={unitStat.thirdB}
              gradeTitle="★3B"
              gradeKey="thirdB"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fourthA}
              edit={unitStat.fourthA}
              gradeTitle="★4A"
              gradeKey="fourthA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthA}
              edit={unitStat.fifthA}
              gradeTitle="★5A"
              gradeKey="fifthA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthB}
              edit={unitStat.fifthB}
              gradeTitle="★5B"
              gradeKey="fifthB"
              setter={handleOnChangeSkill}
            />
          </>
        ) : (
          <>
            <UnitSkillEditorComponent
              default={defaultStat.first}
              edit={unitStat.first}
              gradeTitle="★1"
              gradeKey="first"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fourthB}
              edit={unitStat.fourthB}
              gradeTitle="★4B"
              gradeKey="fourthB"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthB}
              edit={unitStat.fifthB}
              gradeTitle="★5B"
              gradeKey="fifthB"
              setter={handleOnChangeSkill}
            />

            <UnitSkillEditorComponent
              default={defaultStat.second}
              edit={unitStat.second}
              gradeTitle="★2"
              gradeKey="second"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.thirdA}
              edit={unitStat.thirdA}
              gradeTitle="★3A"
              gradeKey="thirdA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.thirdB}
              edit={unitStat.thirdB}
              gradeTitle="★3B"
              gradeKey="thirdB"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fourthA}
              edit={unitStat.fourthA}
              gradeTitle="★4A"
              gradeKey="fourthA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthA}
              edit={unitStat.fifthA}
              gradeTitle="★5A"
              gradeKey="fifthA"
              setter={handleOnChangeSkill}
            />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default SkillsForm;
