import React from "react";
import { Grid, Autocomplete, TextField } from "@mui/material";
import { EditedOutline } from "../common/EditOutLinedText";
import { IStatBonus, IUnitStatModel } from "../common/models/UnitModel";
import UnitStatBonusEditorComponent from "./StatBonusEditor";
import WeaponSelect from "../common/components/WeaponSelect";
import UnitSelectBox from "./UnitSelectBox";
import { initUnitStat } from "./UnitStatReducer";
import { StyleType } from "../common/constants/StyleType";
import { StyleChip } from "../common/StyleChip";

const PersonalitiesForm = (props: {
  unitStat: IUnitStatModel;
  default: IUnitStatModel;
  units: IUnitStatModel[];
  handleOnChangeStat: (key: keyof IUnitStatModel, value: IUnitStatModel[keyof IUnitStatModel]) => void;
  handleOnChangeStatBonus: (key: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => void;
}) => {
  const [anotherCounter, setAnotherCouter] = React.useState<IUnitStatModel | null>(null);

  const [stylebonusLabel, setStylebonusLabel] = React.useState<JSX.Element | "">("");

  React.useEffect(() => {
    const currentUnit = props.default;
    const unitList = props.units;

    /**
     * 異時層ユニット
     */

    const anotherCounterUnit = unitList.find(unit => {
      // 通常 ⇒ 異時層
      if (currentUnit.unitName === unit.unitTrueName) {
        return true;
      }
      // 異時層 ⇒ 通常
      else if (currentUnit.unitTrueName === unit.unitName) {
        return true;
      }
    });

    if (anotherCounterUnit != null) {
      setAnotherCouter(anotherCounterUnit);
      props.handleOnChangeStat("unitTrueName", anotherCounterUnit.unitName);
    }
    else {
      setAnotherCouter(null);
    }

    /**
     * スタイルボーナスのLabel
     */

    let [hasNS, hasAS, hasES] = [false, false, false];
    const nsUnits = unitList.filter(unit => unit.style === StyleType.NS);
    const asUnits = unitList.filter(unit => unit.style === StyleType.AS);
    const esUnits = unitList.filter(unit => unit.style === StyleType.ES);

    if (currentUnit.style !== StyleType.NS && nsUnits.some(unit => currentUnit.unitName === unit.unitName)) {
      hasNS = true;
    }
    if (currentUnit.style !== StyleType.AS && asUnits.some(unit => currentUnit.unitName === unit.unitName)) {
      hasAS = true;
    }
    if (currentUnit.style !== StyleType.ES && esUnits.some(unit => currentUnit.unitName === unit.unitName)) {
      hasES = true;
    }

    setStylebonusLabel(
      <>
        Style Bonus
        {hasNS ? <StyleChip styleType={StyleType.NS} /> : ""}
        {hasAS ? <StyleChip styleType={StyleType.AS} /> : ""}
        {hasES ? <StyleChip styleType={StyleType.ES} /> : ""}
      </>
    );

  }, [props.default]);

  const handlePersonalitiesChange = (_: any, items: string[]) => {
    // カンマ区切りで一括登録
    const personalities = [
      ...items.reduce<string[]>((acuumelate, item) => {
        return [...acuumelate, ...item.split(",")];
      }, []),
    ];

    props.handleOnChangeStat("personalities", Array.from(new Set(personalities)));
  };

  const handleOnChangeUnit = (selected?: IUnitStatModel) => {
    const initialized = initUnitStat(selected);
    setAnotherCouter(initialized);

    props.handleOnChangeStat("unitTrueName", initialized.unitName || null);
  };

  return (
    <Grid container>
      {/* 武器選択 */}
      <Grid item xs={2} lg={1}>
        <EditedOutline isEdited={props.default.weapon !== props.unitStat.weapon}>
          <WeaponSelect
            value={props.unitStat.weapon}
            handleSelect={(ev) => props.handleOnChangeStat("weapon", ev.target.value)}
            sx={{ width: "100%", height: "56px" }}
          />
        </EditedOutline>
      </Grid>

      {/* ユニット名入力 */}
      <Grid item xs={5} lg={2}>
        <EditedOutline isEdited={props.default.unitName !== props.unitStat.unitName}>
          <TextField
            value={props.unitStat.unitName}
            onChange={(ev) => props.handleOnChangeStat("unitName", ev.target.value)}
            label="ユニット名"
            sx={{ width: "100%" }}
          />
        </EditedOutline>
      </Grid>

      {/* 真名 */}
      <Grid item xs={5} lg={2}>
        <EditedOutline isEdited={props.default.unitTrueName !== props.unitStat.unitTrueName}>
          <UnitSelectBox
            unitList={props.units}
            selectedUnit={anotherCounter}
            handleOnSelect={handleOnChangeUnit}
            label="異時層"
          />
        </EditedOutline>
      </Grid>

      {/* 余白 */}
      <Grid item xs={12} lg={1}></Grid>

      {/* パーソナリティ */}
      <Grid item xs={12} lg={6}>
        <EditedOutline isEdited={props.default.personalities?.join(",") !== props.unitStat.personalities?.join(",")}>
          <Autocomplete
            options={[]}
            renderInput={(params) => <TextField {...params} label="パーソナリティ" multiline />}
            multiple
            freeSolo
            value={props.unitStat.personalities || []}
            onChange={handlePersonalitiesChange}
            disableCloseOnSelect
          />
        </EditedOutline>
      </Grid>

      {/* 余白 */}
      <Grid item xs={12} lg={6}></Grid>

      {/* スタイルコンプリートボーナス */}
      <Grid item xs={12} lg={6}>
        <UnitStatBonusEditorComponent
          edit={props.unitStat.styleBoardBonus!}
          default={props.default.styleBoardBonus!}
          title={stylebonusLabel}
          setter={props.handleOnChangeStatBonus}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalitiesForm;
