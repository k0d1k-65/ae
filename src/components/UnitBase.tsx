import * as React from 'react';
import { Autocomplete, Divider, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { ArmourType, getArmourByWeapon } from '../common/constants/ArmourType';
import { LightShadowType } from '../common/constants/LightShadowType';
import { WeaponType } from '../common/constants/WeaponType';
import { Equipment } from '../common/types/Equiqment';
import { Unit } from '../common/types/Unit';
import { UnitStat } from '../common/types/UnitStat';
import { fetchArmours } from '../features/Armour';
import { fetchBadges } from '../features/Badges';
import { fetchUnits } from '../features/Units';
import { fetchWeapons } from '../features/Weapons';
import Spacer from './utility/Spacer';
import { UnitSelectBox } from './UnitSelect';
import { StyleChip } from './utility/StyleChip';

// 武器
function UnitWeaponSelectBox(props: {
  labelTitle: string,
  wType: WeaponType|ArmourType|null,
  items: Equipment[],
  selecting: Equipment|null,
  onSelected: (s: Equipment|null) => void,
}) {
  const { labelTitle, wType, items, selecting, onSelected } = props;

  const options = items
    .filter(option => {
      return option.weaponType === wType
    })
    .map((option) => {
      return {
        ...option,
      };
    });

  const handleChange = (_: any, selected: Equipment|null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    return (
      <TextField {...params} label={labelTitle} />
    );
  };

  return (
    <Autocomplete
      // id="WeaponSelectBox"
      options={options}
      getOptionLabel={(opt) => opt.name}
      value={selecting}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
};

// 防具
function UnitArmourSelectBox(props: {
  labelTitle: string,
  wType: WeaponType|null,
  items: Equipment[],
  selecting: Equipment|null,
  onSelected: (s: Equipment|null) => void,
}) {
  const { labelTitle, wType, items, selecting, onSelected } = props;

  const aType = wType != null && getArmourByWeapon(wType);
  const options = items
    .filter(option => {
      return option.armourType === aType
    })
    .map((option) => {
      return {
        ...option,
      };
    });

  const handleChange = (_: any, selected: Equipment|null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    return (
      <TextField {...params} label={labelTitle} />
    );
  };

  return (
    <Autocomplete
      id="ArmourSelectBox"
      options={options}
      getOptionLabel={(opt) => opt.name}
      value={selecting}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
};

// バッジ
function UnitBadgeSelectBox(props: {
  labelTitle: string,
  items: Equipment[],
  selecting: Equipment|null,
  onSelected: (s: Equipment|null) => void,
}) {
  const { labelTitle, items, selecting, onSelected } = props;

  const options = items
    .map((option) => {
      return {
        ...option,
      };
    });

  const handleChange = (_: any, selected: Equipment|null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    return (
      <TextField {...params} label={labelTitle} />
    );
  };

  return (
    <Autocomplete
      id="BadgeSelectBox"
      options={options}
      getOptionLabel={(opt) => opt.name}
      value={selecting}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
};

export default function UnitBase() {
  const unitData = fetchUnits();
  const weaponData = fetchWeapons();
  const armourData = fetchArmours();
  const badgeData = fetchBadges();

  const [unit, setUnit] = React.useState<Unit|null>(null);
  const [unitLightShadow, setUnitLightShadow] = React.useState<LightShadowType|null>(null);
  const [unitLightShadowNumber, setUnitLightShadowNumber] = React.useState<number>(0);

  const [statusHp, setStatusHp] = React.useState<number>(0);
  const [statusMp, setStatusMp] = React.useState<number>(0);
  const [statusAtk, setStatusAtk] = React.useState<number>(0);
  const [statusDef, setStatusDef] = React.useState<number>(0);
  const [statusMatk, setStatusMatk] = React.useState<number>(0);
  const [statusMdef, setStatusMdef] = React.useState<number>(0);
  const [statusPower, setStatusPower] = React.useState<number>(0);
  const [statusEndure, setStatusEndure] = React.useState<number>(0);
  const [statusLuck, setStatusLuck] = React.useState<number>(0);
  const [statusIntelligence, setStatusIntelligence] = React.useState<number>(0);
  const [statusSplit, setStatusSplit] = React.useState<number>(0);
  const [statusSpeed, setStatusSpeed] = React.useState<number>(0);

  const [weapon, setWeapon] = React.useState<Equipment|null>(null);
  const [armour, setArmour] = React.useState<Equipment|null>(null);
  const [badge, setBadge] = React.useState<Equipment|null>(null);

  React.useEffect(() => {
    setUnitLightShadow(!!unit ? unit.lightShadow : null);
  }, [unit]);

  React.useEffect(() => {
    const stat = new UnitStat();
    if (unit) {
      stat.integrateStats(unit.stat);
      weapon && stat.integrateStats(weapon.stat);
      armour && stat.integrateStats(armour.stat);
      badge && stat.integrateStats(badge.stat);
    }

    setStatusHp(stat.hp);
    setStatusMp(stat.mp);
    setStatusAtk(stat.atk);
    setStatusDef(stat.def);
    setStatusMatk(stat.matk);
    setStatusMdef(stat.mdef);
    setStatusPower(stat.power);
    setStatusEndure(stat.endure);
    setStatusLuck(stat.luck);
    setStatusIntelligence(stat.intelligence);
    setStatusSplit(stat.split);
    setStatusSpeed(stat.speed);
  }, [unit, weapon, armour, badge]);

  React.useEffect(() => {
    // 選択ユニットの武器種が変わったら、selectの中身をリセット
    setWeapon(null);

    // 選択ユニットの防具種が変わったら、selectの中身をリセット
    if (unit == null || armour && armour.armourType !== getArmourByWeapon(unit.weapon)) {
      setArmour(null);
    }

    // TODO: 専用装備判定とか。
  }, [unit?.weapon]);

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

      <Divider variant="middle" sx={{margin: 2}} />

      <Grid container spacing={1}>
        <Grid item xs={12}>
          {/* クラス名テキスト */}
          <>Class : {!!unit ? unit.className : "-"}</>
          <StyleChip styleType={!!unit ? unit.styleType : null}/>
        </Grid>

        <Grid item xs={4}>
          <TextField
            type="number"
            label="HP"
            value={statusHp}
            onChange={e => setStatusHp(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={4}>
        </Grid>

        <Grid item xs={4}>
        </Grid>

        <Grid item xs={4}>
          <TextField
            type="number"
            label="MP"
            value={statusMp}
            onChange={e => setStatusMp(Number(e.target.value))}
          />
        </Grid>
      </Grid>

      <Divider variant="middle" sx={{margin: 2}} />

      <Grid container spacing={1}>
        <Grid item xs={4}>
          {/* 攻撃 */}
          <TextField
            type="number"
            label="攻撃"
            value={statusAtk}
            onChange={e => setStatusAtk(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          {/* 防御 */}
          <TextField
            type="number"
            label="防御"
            value={statusDef}
            onChange={e => setStatusDef(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
          {/* 魔攻 */}
          <TextField
            type="number"
            label="魔力"
            value={statusMatk}
            onChange={e => setStatusMatk(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          {/* 魔防 */}
          <TextField
            type="number"
            label="魔防"
            value={statusMdef}
            onChange={e => setStatusMdef(Number(e.target.value))}
          />
        </Grid>
      </Grid>

      <Spacer size={32} axis="horizontal" style={{margin: 8}}/>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="腕力"
            value={statusPower}
            onChange={e => setStatusPower(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="耐久"
            value={statusEndure}
            onChange={e => setStatusEndure(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="幸運"
            value={statusLuck}
            onChange={e => setStatusLuck(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="知性"
            value={statusIntelligence}
            onChange={e => setStatusIntelligence(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="速度"
            value={statusSpeed}
            onChange={e => setStatusSpeed(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="精神"
            value={statusSplit}
            onChange={e => setStatusSplit(Number(e.target.value))}
          />
        </Grid>

      </Grid>

      <Divider variant="middle" sx={{margin: 2}} />

      {/* 武器選択ボックス */}
      <UnitWeaponSelectBox
        labelTitle='Weapon'
        wType={!!unit ? unit.weapon : null}
        items={weaponData}
        selecting={weapon}
        onSelected={setWeapon}
      />

      <Spacer size={32} axis="horizontal" style={{margin: 6}}/>

      {/* 防具選択ボックス */}
      <UnitArmourSelectBox
        labelTitle='Armour'
        wType={!!unit ? unit.weapon : null}
        items={armourData}
        selecting={armour}
        onSelected={setArmour}
      />

      <Spacer size={32} axis="horizontal" style={{margin: 6}}/>

      {/* バッジ選択ボックス */}
      <UnitBadgeSelectBox
        labelTitle='Badge'
        items={badgeData}
        selecting={badge}
        onSelected={setBadge}
      />

    </Box>
  );
}
