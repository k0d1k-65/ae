import React from "react";
import { Grid } from "@mui/material";
import { ISkillProperty, ISkillsForm, IUnitForm } from "./types.interface";
import { StyleType } from "../common/constants/StyleType";
import UnitSkillEditorComponent from "./SkillEditor";

const SkillsForm = (props: {
  unitStat: IUnitForm;
  defaultStat: IUnitForm;
  handleOnChangeSkill: (key: keyof ISkillsForm, grade: keyof ISkillProperty, value: IUnitForm[keyof IUnitForm]) => void;
}) => {
  const { unitStat, defaultStat, handleOnChangeSkill } = props;

  return (
    <Grid container>
      <Grid container item xs={12} xl={9}>
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
              gradeTitle="★4"
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
              gradeTitle="★3"
              gradeKey="thirdA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.thirdB}
              edit={unitStat.thirdB}
              gradeTitle="★3"
              gradeKey="thirdB"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fourthA}
              edit={unitStat.fourthA}
              gradeTitle="★4"
              gradeKey="fourthA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthA}
              edit={unitStat.fifthA}
              gradeTitle="★5"
              gradeKey="fifthA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthB}
              edit={unitStat.fifthB}
              gradeTitle="★5"
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
              gradeTitle="★4"
              gradeKey="fourthB"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthB}
              edit={unitStat.fifthB}
              gradeTitle="★5"
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
              gradeTitle="★3"
              gradeKey="thirdA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.thirdB}
              edit={unitStat.thirdB}
              gradeTitle="★3"
              gradeKey="thirdB"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fourthA}
              edit={unitStat.fourthA}
              gradeTitle="★4"
              gradeKey="fourthA"
              setter={handleOnChangeSkill}
            />
            <UnitSkillEditorComponent
              default={defaultStat.fifthA}
              edit={unitStat.fifthA}
              gradeTitle="★5"
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
