import React from "react";
import { TextField } from "@mui/material";
import { ISkillProperty, ISkillsForm } from "./types.interface";
import { EditedOutline } from "../common/EditOutLinedText";

const UnitSkillEditorComponent = (props: {
  default: ISkillProperty;
  edit: ISkillProperty;
  gradeTitle: "★1" | "★2" | "★3" | "★4" | "★5";
  gradeKey: keyof ISkillsForm;
  setter: (key: keyof ISkillsForm, grade: keyof ISkillProperty, value: ISkillProperty[keyof ISkillProperty]) => void;
}) => {
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;

    props.setter(props.gradeKey, "name", value);
  };

  const handleOnChangeMp = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = Number(event.target.value) || 0;

    props.setter(props.gradeKey, "mp", value);
  };

  const handleOnChangeDetail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;

    props.setter(props.gradeKey, "detail", value);
  };

  return (
    <>
      <EditedOutline isEdited={props.default.name !== props.edit.name} style={{ width: "80%" }}>
        <TextField
          sx={{ width: "100%" }}
          label={`${props.gradeTitle} スキル`}
          value={props.edit.name}
          onChange={handleOnChangeName}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.mp !== props.edit.mp} style={{ width: "20%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="消費MP"
          type="number"
          value={props.edit.mp}
          onChange={handleOnChangeMp}
        />
      </EditedOutline>
      <EditedOutline isEdited={props.default.detail !== props.edit.detail} style={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="詳細"
          multiline
          value={props.edit.detail}
          onChange={handleOnChangeDetail}
        />
      </EditedOutline>
    </>
  );
};

export default UnitSkillEditorComponent;
