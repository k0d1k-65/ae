import React, { useEffect, useReducer, useState } from "react";
import PersonalitiesForm from "./PersonalitiesForm";
import { deleteUnit, importUnits, sortUnits, saveUnit, trancateUnit, defaultUnitStat, mapModelUnitStat } from "../common/services/UnitService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reduceUnitStat from "./UnitStatReducer";
import UnitStatActionMenu from "./ActionMenu";
import { retrieveUnits } from "../common/services/UnitService";
import { Divider, ToggleButton } from "@mui/material";
import { ISkillProperty, IStatBonus, IUnitSkills, IUnitStatModel, IUnitStats } from "../common/models/UnitModel";
import StatsForm from "./StatsForm";
import AbilitiesForm from "./AbilitiesForm";
import SkillsForm from "./SkillsForm";
import UnitSelectBox from "./UnitSelectBox";
import MainContentComponent from "../common/MainContentComponent";

const UnitStatComponent: React.FC = () => {
  // 編集フォームのステート
  const [editingUnit, dispatchEditUnit] = useReducer(reduceUnitStat, defaultUnitStat);

  // 編集対象選択中のユニット
  const [selectedUnit, setSelectedUnit] = useState<IUnitStatModel>(defaultUnitStat);

  // ユニット全情報
  const [unitList, setUnitList] = useState<IUnitStatModel[]>([]);

  // 「保存」
  const handleOnClickSave = () => {
    try {
      const { updated } = saveUnit(editingUnit, selectedUnit.unitName, selectedUnit.style);
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

  // 「クリア」
  const handleOnClickClear = () => {
    dispatchEditUnit({ type: "replace", newItem: selectedUnit });

    toast.dismiss();
    toast.success("クリアしました");
  };

  // 「削除」
  const handleOnClickDelete = () => {
    try {
      // TODO: delete (selectedUnit.unitName, selectedUnit.style)
      const { updated } = deleteUnit(selectedUnit);
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
          setSelectedUnit(defaultUnitStat);
          dispatchEditUnit({ type: "replace", newItem: defaultUnitStat });

          toast.dismiss();
          toast.success("インポートしました");
        } catch (err) {
          console.log("failed import: ", err);
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

  // 「全削除」
  const handleOnClickTrancate = () => {
    trancateUnit();

    const initUnit = defaultUnitStat;
    setUnitList([]);
    dispatchEditUnit({ type: "clear" });
    setSelectedUnit(initUnit);

    toast.dismiss();
    toast.success("全データを削除しました");
  };

  // フォーム入力
  const handleOnChangeStat = (key: keyof IUnitStatModel, value: IUnitStatModel[keyof IUnitStatModel]) => {
    dispatchEditUnit({
      type: "update",
      key,
      value,
    });
  };

  // スキル入力
  const handleOnChangeSkill = (
    key: keyof IUnitSkills,
    grade: keyof ISkillProperty,
    value: IUnitStatModel[keyof IUnitStatModel]
  ) => {
    dispatchEditUnit({
      type: "updateSkill",
      key: key,
      subKey: grade,
      value,
    });
  };

  // スタイルコンプリートボーナス入力
  const handleOnChangeStyleBoardBonus = (key: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => {
    dispatchEditUnit({
      type: "updateStatBonus",
      key: "styleBoardBonus",
      subKey: key,
      value,
    });
  };

  // 天冥ボーナス入力
  const handleOnChangeLightShadowBonus = (
    key: keyof IUnitStats,
    subKey: keyof IStatBonus,
    value: IStatBonus[keyof IStatBonus]
  ) => {
    dispatchEditUnit({
      type: "updateStatBonus",
      key,
      subKey,
      value,
    });
  };

  // 選択ユニット変更
  const handleOnChangeUnit = (selected?: IUnitStatModel) => {
    const initialized = mapModelUnitStat(selected);
    setSelectedUnit(initialized);

    dispatchEditUnit({
      type: "replace",
      newItem: initialized,
    });
  };

  // マウント時に、全ユニットを取得
  useEffect(() => {
    setUnitList(sortUnits(retrieveUnits()));
  }, []);

  const headerContent = (
    <div
      style={{
        margin: "8px 0 16px",
        display: "flex",
        justifyContent: "flex-end",
        gap: "8px",
      }}
    >
      {/* 編集対象ユニット選択 */}
      <div style={{ minWidth: "320px" }}>
        <UnitSelectBox unitList={unitList} selectedUnit={selectedUnit} handleOnSelect={handleOnChangeUnit} />
      </div>

      {/* 余白 */}
      <div style={{ flex: "auto" }}></div>

      <UnitStatActionMenu
        handleOnClickSave={handleOnClickSave}
        handleOnClickClear={handleOnClickClear}
        handleOnDelete={handleOnClickDelete}
        handleOnImport={handleonClickImport}
        handleOnExport={handleonClickExport}
        handleOnTrancate={handleOnClickTrancate}
      />
    </div>
  );

  // TODO: なんかもっと共通化とか？
  const [openBase, setOpenBase] = React.useState(true);
  const [openStat, setOpenStat] = React.useState(true);
  const [openAbilities, setOpenAbilities] = React.useState(true);
  const [openSkills, setOpenSkills] = React.useState(true);

  return (
    <MainContentComponent header={headerContent}>
      {/* ユニット名・パーソナリティ */}
      <Divider sx={{ margin: "16px 8px" }}>
        <ToggleButton value={""} selected={openBase} onClick={() => setOpenBase(!openBase)} size="small">
          base
        </ToggleButton>
      </Divider>

      {openBase && (
        <PersonalitiesForm
          unitStat={editingUnit}
          default={selectedUnit}
          units={unitList}
          handleOnChangeStat={handleOnChangeStat}
          handleOnChangeStatBonus={handleOnChangeStyleBoardBonus}
        />
      )}

      {/* ステータス */}
      <Divider sx={{ margin: "16px 8px" }}>
        <ToggleButton value={""} selected={openStat} onClick={() => setOpenStat(!openStat)} size="small">
          stat
        </ToggleButton>
      </Divider>

      {openStat && (
        <StatsForm
          unitStat={editingUnit}
          default={selectedUnit}
          handleOnChangeStat={handleOnChangeStat}
          handleOnChangeStatBonus={handleOnChangeLightShadowBonus}
        />
      )}

      {/* アビリティ */}
      <Divider sx={{ margin: "16px 8px" }}>
        <ToggleButton value={""} selected={openAbilities} onClick={() => setOpenAbilities(!openAbilities)} size="small">
          abilities
        </ToggleButton>
      </Divider>

      {openAbilities && (
        <AbilitiesForm unitStat={editingUnit} default={selectedUnit} handleOnChangeStat={handleOnChangeStat} />
      )}

      {/* スキル */}
      <Divider sx={{ margin: "16px 8px" }}>
        <ToggleButton value={""} selected={openSkills} onClick={() => setOpenSkills(!openSkills)} size="small">
          skills
        </ToggleButton>
      </Divider>

      {openSkills && (
        <SkillsForm unitStat={editingUnit} defaultStat={selectedUnit} handleOnChangeSkill={handleOnChangeSkill} />
      )}
    </MainContentComponent>
  );
};

export default UnitStatComponent;
