import React, { useEffect, useReducer, useState } from "react";
import PersonalitiesForm from "./PersonalitiesForm";
import StatsForm from "./StatsForm";
import AbilitiesForm from "./AbilitiesForm";
import SkillsForm from "./SkillsForm";
import styled from "styled-components";
import { deleteUnit, importUnits, saveUnit } from "../common/services/UnitService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reduceUnitStat, { initUnitStat } from "./UnitStatReducer";
import { ISkillProperty, ISkillsForm, IUnitForm } from "./types.interface";
import UnitStatActionMenu from "./ActionMenu";
import { retrieveUnits } from "../common/services/UnitService";
import { UnitModel } from "../common/models/UnitModel";
import { Autocomplete, TextField, Box, Divider, Button } from "@mui/material";

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
      const { result, updated } = saveUnit(editingUnit, selectedUnit.unitName, selectedUnit.style);
      setUnitList(updated);
      setSelectedUnit(editingUnit);

      // TODO: toast.dismiss とセットなのがめんどくさいので、なんかラップする
      // TODO: 実質、limitが1件に強制されるので、なんとかする。
      toast.dismiss();
      toast.success("保存に成功しました");
    } catch (err) {
      toast.dismiss();
      toast.error("保存に失敗しました");
    }
  };

  // 「新規保存」
  const handleOnClickCreate = () => {
    try {
      const { result, updated } = saveUnit(editingUnit);
      setUnitList(updated);
      setSelectedUnit(editingUnit);

      toast.dismiss();
      toast.success("保存に成功しました");
    } catch (err) {
      toast.dismiss();
      toast.error("保存に失敗しました");
    }
  };

  // 「クリア」
  const handleOnClickClear = () => {
    dispatchEditUnit({ type: "updateAll", newItem: selectedUnit });

    toast.dismiss();
    toast.success("クリアしました");
  };

  // 「削除」
  const handleOnClickDelete = () => {
    try {
      // TODO: delete (selectedUnit.unitName, selectedUnit.style)
      const { result, updated } = deleteUnit(selectedUnit);
      setUnitList(updated);
      setSelectedUnit(editingUnit);

      toast.dismiss();
      toast.success("削除に成功しました");
    } catch (err) {
      toast.dismiss();
      toast.error("削除に失敗しました");
    }
  };

  // 「インポート」
  const handleonClickImport = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.addEventListener("change", async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const contents = await readFileContents(file);

        try {
          const updated = importUnits(contents, true);
          setUnitList(updated);
          setSelectedUnit(initUnitStat());
          dispatchEditUnit({ type: "updateAll", newItem: initUnitStat() });

          toast.dismiss();
          toast.success("インポートしました");
        } catch (err) {
          toast.dismiss();
          toast.success("インポートに失敗しました");
        }
      }
    });
    fileInput.click();
  };

  const readFileContents = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result;
        if (typeof contents === "string") {
          resolve(contents);
        } else {
          reject(new Error("Failed to read file contents."));
        }
      };
      reader.onerror = () => {
        reject(new Error("Failed to read file."));
      };
      reader.readAsText(file);
    });
  };

  // 「エクスポート」
  const handleonClickExport = () => {
    // TODO: なんかいい感じに移譲する
    const jsonStr = JSON.stringify(unitList);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ae-units.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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

        {/* 余白 */}
        <div style={{ flex: "auto" }}></div>

        <UnitStatActionMenu
          handleOnClickSave={handleOnClickSave}
          handleOnClickClear={handleOnClickClear}
          handleOnDelete={handleOnClickDelete}
          handleOnImport={handleonClickImport}
          handleOnExport={handleonClickExport}
          handleOnTrancate={() => {}}
        />
      </Header>

      <Main>
        {/* ユニット名・パーソナリティ */}
        {/* TODO: クリックすると縮小する。 */}
        <Divider sx={{ margin: "16px 8px" }}>base</Divider>

        <PersonalitiesForm unitStat={editingUnit} default={selectedUnit} handleOnChangeStat={handleOnChangeStat} />

        {/* ステータス */}
        <Divider sx={{ margin: "16px 8px" }}>stat</Divider>

        <StatsForm unitStat={editingUnit} default={selectedUnit} handleOnChangeStat={handleOnChangeStat} />

        {/* アビリティ */}
        <Divider sx={{ margin: "16px 8px" }}>abilities</Divider>

        <AbilitiesForm unitStat={editingUnit} default={selectedUnit} handleOnChangeStat={handleOnChangeStat} />

        {/* スキル */}
        <Divider sx={{ margin: "16px 8px" }}>skills</Divider>

        <SkillsForm unitStat={editingUnit} defaultStat={selectedUnit} handleOnChangeSkill={handleOnChangeSkill} />
      </Main>
    </Wrapper>
  );
};

export default UnitStatComponent;
