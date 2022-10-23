import { Autocomplete, Chip, TextField } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { LightShadowType } from '../common/constants/LightShadowType';
import { StyleType } from '../common/constants/StyleType';
import { getWeaponLabel } from '../common/constants/WeaponType';
import { Unit } from '../common/types/Unit';
import { fetchUnits } from '../features/Units';

function UnitSelectBox(props: {units: Unit[], onSelected: (s: Unit|null) => void}) {
  const { units, onSelected } = props;

  const options = units
    .map((option) => {
      return {
        type: option.weapon,
        ...option,
      };
    });

  const handleChange = (_: any, selected: Unit|null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    console.log(params)
    return (
      <TextField {...params} label="Unit" />
    );
  };

  const handleRenderOption = (props: object, option: Unit) => {
    const chipColor =
      option.styleType == StyleType.ES
      ? "success"
      : option.styleType == StyleType.AS
      ? "error"
      : "warning";
    return (
      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        <Chip label={option.styleType} color={chipColor} size="small" />
        <span>{option.name}</span>
      </Box>
    )
  };

  return (
    <Autocomplete
      id="UnitSelectBox"
      options={options}
      groupBy={(opt) => getWeaponLabel(opt.weapon)}
      getOptionLabel={(opt) => opt.name}
      renderOption={handleRenderOption}
      // sx={{ width: 300 }}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
}

// HP, MP
function UnitStatusA(props: {unit: Unit}) {};
// 攻撃、防御、魔攻、魔防（, 天冥値）
function UnitStatusB(props: {unit: Unit}) {};
// 腕力、耐久・・・
function UnitStatusC(props: {unit: Unit}) {};
// 武器、防具、アクセ
function UnitStatusD(props: {unit: Unit}) {};

export default function UnitBase() {
  const unitData = fetchUnits();

  const [unit, setUnit] = React.useState<Unit|null>(null);
  React.useEffect(() => {
    setUnitLightShadow(!!unit ? unit.lightShadow : null);

    setStatusHp(!!unit ? unit.hp : 0);
    setStatusMp(!!unit ? unit.mp : 0);
    setStatusPower(!!unit ? unit.power : 0);
    setStatusEndure(!!unit ? unit.endure : 0);
    setStatusLuck(!!unit ? unit.luck : 0);
    setStatusIntelligence(!!unit ? unit.intelligence : 0);
    setStatusSplit(!!unit ? unit.split : 0);
    setStatusSpeed(!!unit ? unit.speed : 0);
  }, [unit]);

  React.useEffect(() => {
    // setWeapons();
  }, [unit?.weapon]);

  const [unitLightShadow, setUnitLightShadow] = React.useState<LightShadowType|null>(null);
  const [unitLightShadowNumber, setUnitLightShadowNumber] = React.useState<number>(0);

  const [statusHp, setStatusHp] = React.useState<number>(0);
  const [statusMp, setStatusMp] = React.useState<number>(0);
  const [statusPower, setStatusPower] = React.useState<number>(0);
  const [statusEndure, setStatusEndure] = React.useState<number>(0);
  const [statusLuck, setStatusLuck] = React.useState<number>(0);
  const [statusIntelligence, setStatusIntelligence] = React.useState<number>(0);
  const [statusSplit, setStatusSplit] = React.useState<number>(0);
  const [statusSpeed, setStatusSpeed] = React.useState<number>(0);

  const [weapons, setWeapons] = React.useState<string>("");

  return (
    <Box
      margin={2}
      maxWidth={600}
      display={'flex'}
      flexDirection={'column'}
    >
       {/* ユニット選択ボックス */}
      <UnitSelectBox
        units={unitData}
        onSelected={setUnit}
      />

      {/* クラス名テキスト */}
      <Box margin={1}>Class : {!!unit ? unit.className : "-"}</Box>

      {/* スタイルボーナスONOFF指定チェックボックス */}
      {/*
        <span>スタイルボーナス</span>
        <ToggleButton
          value={StyleType.NS}
          selected={hasStyleBonus[StyleType.NS]}
          onChange={handleChangeHasStyleBonus}
          disabled={!(!!unit && !!unit.className[StyleType.NS])}
        >
          {StyleType.NS}
        </ToggleButton>
        <ToggleButton
          value={StyleType.AS}
          selected={hasStyleBonus[StyleType.AS]}
          onChange={handleChangeHasStyleBonus}
          disabled={!(!!unit && !!unit.className[StyleType.AS])}
        >
          {StyleType.AS}
        </ToggleButton>
        <ToggleButton
          value={StyleType.ES}
          selected={hasStyleBonus[StyleType.ES]}
          onChange={handleChangeHasStyleBonus}
          disabled={!(!!unit && !!unit.className[StyleType.ES])}
        >
          {StyleType.ES}
        </ToggleButton>
      */}

      {/* 天冥 */}
      <TextField
        id="filled-number"
        // variant="filled"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        label={unitLightShadow || "-"}
        value={unitLightShadowNumber}
        onChange={e => setUnitLightShadowNumber(Number(e.target.value))}
      />

      <TextField
        type="number"
        label="HP"
        value={statusHp}
        onChange={e => setStatusHp(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="MP"
        value={statusMp}
        onChange={e => setStatusMp(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="腕力"
        value={statusPower}
        onChange={e => setStatusPower(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="耐久"
        value={statusEndure}
        onChange={e => setStatusEndure(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="幸運"
        value={statusLuck}
        onChange={e => setStatusLuck(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="知性"
        value={statusIntelligence}
        onChange={e => setStatusIntelligence(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="速度"
        value={statusSpeed}
        onChange={e => setStatusSpeed(Number(e.target.value))}
      />
      <TextField
        type="number"
        label="精神"
        value={statusSplit}
        onChange={e => setStatusSplit(Number(e.target.value))}
      />

      <TextField
        type="text"
        label="武器 仮"
        value={weapons}
        onChange={e => setWeapons(e.target.value)}
      />

    </Box>
  );
}
