import React, { useReducer } from "react";
import PersonalitiesForm from "./PersonalitiesForm";
import StatsForm from "./StatsForm";
import AbilitiesForm from "./AbilitiesForm";
import SkillsForm from "./SkillsForm";
import styled from "styled-components";
import { Button } from "@mui/material";
import { saveUnit } from "../common/services/UnitService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reduceUnitStat, { initUnitStat } from "./UnitStatReducer";
import { ISkillProperty, ISkillsForm, IUnitForm } from "./types.interface";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 0;
  margin: 8px 0 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Main = styled.div`
  overflow: auto;
  padding: 8px 0;
  flex: auto;

  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: #a8a8a8 #e1e1e1;

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #e1e1e166;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
    border-radius: 8px;
    border: 1px solid #ddd

    /* スクロールバーのホバー時の色 */
    &:hover {
      background-color: #808080;
    }
  }
`;

const UnitStatComponent: React.FC = () => {
  const [state, dispatch] = useReducer(reduceUnitStat, initUnitStat());

  const handleOnClickSave = () => {
    try {
      const { result, updated } = saveUnit(state);

      toast.success("保存に成功しました");
    } catch (err) {
      toast.error("保存に失敗しました");
    }
  };

  const handleOnClickClear = () => {
    dispatch({ type: "clear" });

    toast.success("クリアしました");
  };

  const handleOnChangeStat = (key: keyof IUnitForm, value: IUnitForm[keyof IUnitForm]) => {
    dispatch({
      type: "update",
      key,
      value,
    });
  };

  const handleOnChangeSkill = (
    key: keyof ISkillProperty,
    grade: keyof ISkillsForm,
    value: IUnitForm[keyof IUnitForm]
  ) => {
    dispatch({
      type: "updateSkill",
      key: key as keyof IUnitForm,
      subKey: grade,
      value,
    });
  };

  return (
    <Wrapper>
      <Header>
        <Button variant="contained" color="primary" onClick={handleOnClickSave}>
          SAVE
        </Button>
        <Button variant="contained" color="error" onClick={handleOnClickClear}>
          CLEAR
        </Button>
      </Header>

      <Main>
        {/* ユニット名・パーソナリティ */}
        <PersonalitiesForm unitStat={state} handleOnChangeStat={handleOnChangeStat} />

        <hr style={{ margin: "16px 8px" }} />

        {/* ステータス */}
        <StatsForm unitStat={state} handleOnChangeStat={handleOnChangeStat} />

        <hr style={{ margin: "16px 8px" }} />

        {/* アビリティ */}
        <AbilitiesForm unitStat={state} handleOnChangeStat={handleOnChangeStat} />

        <hr style={{ margin: "16px 8px" }} />

        {/* スキル */}
        <SkillsForm unitStat={state} handleOnChangeSkill={handleOnChangeSkill} />
      </Main>
    </Wrapper>
  );
};

export default UnitStatComponent;
