import React, { useEffect, useReducer, useState } from "react";
import PersonalitiesForm from "./PersonalitiesForm";
import StatsForm from "./StatsForm";
import AbilitiesForm from "./AbilitiesForm";
import SkillsForm from "./SkillsForm";
import styled from "styled-components";
import { Button } from "@mui/material";
import { deleteUnit, saveUnit } from "../common/services/UnitService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reduceUnitStat, { initUnitStat } from "./UnitStatReducer";
import { ISkillProperty, ISkillsForm, IUnitForm } from "./types.interface";
import UnitStatActionMenu from "./ActionMenu";
import CreateIcon from "@mui/icons-material/Create";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { retrieveUnits } from "../common/services/UnitService";
import { UnitModel } from "../common/models/UnitModel";
import { Autocomplete, TextField, Box } from "@mui/material";

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
  const [editingUnit, dispatchEditUnit] = useReducer(reduceUnitStat, initUnitStat());

  // 編集対象選択中のユニット
  const [selectedUnit, setSelectedUnit] = useState<UnitModel>(initUnitStat());

  // ユニット全情報
  const [unitList, setUnitList] = useState<UnitModel[]>([]);

  // 「保存」
  const handleOnClickSave = () => {
    try {
      const { result, updated } = saveUnit(editingUnit);
      setUnitList(updated);
      setSelectedUnit(editingUnit);

      toast.success("保存に成功しました");
    } catch (err) {
      toast.error("保存に失敗しました");
    }
  };

  // 「クリア」
  const handleOnClickClear = () => {
    dispatchEditUnit({ type: "updateAll", newItem: selectedUnit });

    toast.success("クリアしました");
  };

  // 「削除」
  // MEMO: delete( selectedUnit.unitName / style
  const handleOnClickDelete = () => {
    try {
      const { result, updated } = deleteUnit(selectedUnit);
      setUnitList(updated);
      setSelectedUnit(editingUnit);

      toast.success("削除に成功しました");
    } catch (err) {
      toast.error("削除に失敗しました");
    }
  };

  // フォーム入力
  const handleOnChangeStat = (key: keyof IUnitForm, value: IUnitForm[keyof IUnitForm]) => {
    dispatchEditUnit({
      type: "update",
      key,
      value,
    });
  };

  // スキル入力
  const handleOnChangeSkill = (
    key: keyof ISkillsForm,
    grade: keyof ISkillProperty,
    value: IUnitForm[keyof IUnitForm]
  ) => {
    dispatchEditUnit({
      type: "updateSkill",
      key: key,
      subKey: grade,
      value,
    });
  };

  // 選択ユニット変更
  const handleOnChangeUnit = (selected: UnitModel) => {
    setSelectedUnit(selected);
    dispatchEditUnit({
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
        <Button
          onClick={() => {
            console.log({ editingUnit, selectedUnit });
          }}
        >
          DEBUG
        </Button>

        {/* 編集対象ユニット選択 */}
        <Autocomplete
          options={unitList}
          value={selectedUnit}
          sx={{ width: "320px", maxWidth: "50%" }}
          groupBy={(opt) => opt.weapon}
          getOptionLabel={(opt) => opt.unitName}
          renderOption={(props, opt) => (
            <Box component="li" {...props}>
              <span>
                {opt.style} {opt.unitName}
              </span>
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Unit" />}
          onChange={(ev: any, unit: UnitModel | null) => {
            if (unit) {
              handleOnChangeUnit(unit);
            } else {
              handleOnChangeUnit(initUnitStat());
            }
          }}
        />

        <Button variant="contained" color="primary" startIcon={<CreateIcon />} onClick={handleOnClickSave}>
          SAVE
        </Button>
        <Button variant="contained" color="error" startIcon={<BackspaceIcon />} onClick={handleOnClickClear}>
          CLEAR
        </Button>

        <UnitStatActionMenu
          handleOnDelete={handleOnClickDelete}
          handleOnImport={() => {}}
          handleOnExport={() => {}}
          handleOnTrancate={() => {}}
        />
      </Header>

      <Main>
        {/* ユニット名・パーソナリティ */}
        <PersonalitiesForm unitStat={editingUnit} default={selectedUnit} handleOnChangeStat={handleOnChangeStat} />

        <hr style={{ margin: "16px 8px" }} />

        {/* ステータス */}
        <StatsForm unitStat={editingUnit} default={selectedUnit} handleOnChangeStat={handleOnChangeStat} />

        <hr style={{ margin: "16px 8px" }} />

        {/* アビリティ */}
        <AbilitiesForm unitStat={editingUnit} default={selectedUnit} handleOnChangeStat={handleOnChangeStat} />

        <hr style={{ margin: "16px 8px" }} />

        {/* スキル */}
        <SkillsForm unitStat={editingUnit} default={selectedUnit} handleOnChangeSkill={handleOnChangeSkill} />
      </Main>
    </Wrapper>
  );
};

export default UnitStatComponent;
