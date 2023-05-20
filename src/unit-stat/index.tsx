import React, { useEffect, useReducer, useState } from "react";
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
import UnitStatActionMenu from "./ActionMenu";
import CreateIcon from "@mui/icons-material/Create";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { retrieveUnits } from "../common/services/UnitService";
import { UnitModel } from "../common/models/UnitModel";

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
  padding: 8px 2px;
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
  // 編集フォームのステート
  const [state, dispatch] = useReducer(reduceUnitStat, initUnitStat());

  // ユニット全情報
  const [unitList, setUnitList] = useState<UnitModel[]>([]);

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
    key: keyof ISkillsForm,
    grade: keyof ISkillProperty,
    value: IUnitForm[keyof IUnitForm]
  ) => {
    dispatch({
      type: "updateSkill",
      key: key,
      subKey: grade,
      value,
    });
  };

  const handleOnChangeUnit = (selected: UnitModel) => {
    dispatch({
      type: "updateAll",
      newItem: selected,
    });
  };

  // マウント時に、全ユニットを取得
  useEffect(() => {
    setUnitList(retrieveUnits());
  }, []);

  return (
    <Wrapper>
      <Header>
        <Button variant="contained" color="primary" startIcon={<CreateIcon />} onClick={handleOnClickSave}>
          SAVE
        </Button>
        <Button variant="contained" color="error" startIcon={<BackspaceIcon />} onClick={handleOnClickClear}>
          CLEAR
        </Button>

        <UnitStatActionMenu
          handleOnDelete={() => {}}
          handleOnImport={() => {}}
          handleOnExport={() => {}}
          handleOnTrancate={() => {}}
        />
      </Header>

      <Main>
        {/* ユニット名・パーソナリティ */}
        <PersonalitiesForm
          unitStat={state}
          handleOnChangeStat={handleOnChangeStat}
          unitList={unitList}
          handleOnChangeUnit={handleOnChangeUnit}
        />

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
