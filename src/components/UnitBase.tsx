import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Popper, TextField, ToggleButton } from '@mui/material';
import { Box } from '@mui/system';
import { getArmourByWeapon } from '../common/constants/ArmourType';
import { LightShadowType } from '../common/constants/LightShadowType';
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
import { UnitWeaponSelectBox } from './UnitWeaponSelect';
import { UnitArmourSelectBox } from './UnitArmourSelect';
import { UnitBadgeSelectBox } from './UnitBadgeSelect';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UnitLightShadow } from './UnitLightShadow';

export default function UnitBase() {
  const unitData = fetchUnits();
  const weaponData = fetchWeapons();
  const armourData = fetchArmours();
  const badgeData = fetchBadges();

  const [unit, setUnit] = React.useState<Unit|null>(null);
  const [unitDetailOpened, setUnitDetailOpened] = React.useState(false);

  const [calcStatAuto, setCalcStatAuto] = React.useState(true);
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

  // Stat 再計算
  React.useEffect(() => {
    // unit 未選択状態では、stat の再計算は行わない
    if (unit == null) {
      return;
    }

    // auto ボタンOFFのときは、 stat の再計算は行わない
    if (!calcStatAuto) {
      return;
    }

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
  }, [unit, weapon, armour, badge, calcStatAuto]);

  React.useEffect(() => {
    // 選択ユニットの武器種が変わったら、武器selectをリセット
    setWeapon(null);

    // 選択ユニットの防具種が変わったら、防具selectをリセット
    if (unit == null || armour && armour.armourType !== getArmourByWeapon(unit.weapon)) {
      setArmour(null);
    }

    // TODO: 専用装備判定とか。
  }, [unit?.weapon]);

  return (
    <Box
      margin={2}
      maxWidth={600}
    >
      <Grid container>
        <Grid item xs={10}>
          {/* ユニット選択ボックス */}
          <UnitSelectBox
            units={unitData}
            onSelected={setUnit}
            // size={'small'}
          />
        </Grid>
        <Grid item xs={2}>
          <ToggleButton
            value={0}
            selected={unitDetailOpened}
            onChange={() => setUnitDetailOpened(!unitDetailOpened)}
            size={'small'}
          >
            <ExpandMoreIcon />
          </ToggleButton>
        </Grid>
      </Grid>

      <Accordion
        disableGutters
        expanded={unitDetailOpened}
        sx={{
          '&:before': {
            display: 'none',
          }
        }}
      >
        <AccordionSummary style={{display: 'none'}}>
        </AccordionSummary>
        <AccordionDetails
          sx={{ margin: '.5rem 0' }}
        >
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

          <Grid container spacing={1}>
            {/* クラス名テキスト */}
            <Grid item xs={12} sx={{ position: 'relative' }}>
              <span style={{fontSize: '80%'}}>Class : {!!unit ? unit.className : "-"}</span>
              <StyleChip styleType={!!unit ? unit.styleType : null}/>

              {/* auto計算 */}
              <ToggleButton
                value="check"
                selected={calcStatAuto}
                onChange={() => setCalcStatAuto(!calcStatAuto)}
                size={'small'}
                color={'warning'}
                sx={{ position: 'absolute', right: 0 }}
              >
                <>auto計算</>
              </ToggleButton>
            </Grid>

            <Grid item xs={4}>
              <TextField
                type="number"
                label="HP"
                value={statusHp}
                disabled={calcStatAuto}
                onChange={e => setStatusHp(Number(e.target.value))}
                size={'small'}
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
                disabled={calcStatAuto}
                onChange={e => setStatusMp(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
          </Grid>

          <Divider variant="middle" sx={{margin: 1}} />

          <Grid container spacing={1}>
            <Grid item xs={4}>
              {/* 攻撃 */}
              <TextField
                type="number"
                label="攻撃"
                value={statusAtk}
                disabled={calcStatAuto}
                onChange={e => setStatusAtk(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              {/* 防御 */}
              <TextField
                type="number"
                label="防御"
                value={statusDef}
                disabled={calcStatAuto}
                onChange={e => setStatusDef(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              {/* 天冥 */}
              <UnitLightShadow unit={unit} />
            </Grid>
            <Grid item xs={4}>
              {/* 魔攻 */}
              <TextField
                type="number"
                label="魔力"
                value={statusMatk}
                disabled={calcStatAuto}
                onChange={e => setStatusMatk(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              {/* 魔防 */}
              <TextField
                type="number"
                label="魔防"
                value={statusMdef}
                disabled={calcStatAuto}
                onChange={e => setStatusMdef(Number(e.target.value))}
                size={'small'}
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
                disabled={calcStatAuto}
                onChange={e => setStatusPower(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="耐久"
                value={statusEndure}
                disabled={calcStatAuto}
                onChange={e => setStatusEndure(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="幸運"
                value={statusLuck}
                disabled={calcStatAuto}
                onChange={e => setStatusLuck(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="知性"
                value={statusIntelligence}
                disabled={calcStatAuto}
                onChange={e => setStatusIntelligence(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="速度"
                value={statusSpeed}
                disabled={calcStatAuto}
                onChange={e => setStatusSpeed(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="精神"
                value={statusSplit}
                disabled={calcStatAuto}
                onChange={e => setStatusSplit(Number(e.target.value))}
                size={'small'}
              />
            </Grid>

          </Grid>

          <Divider variant="middle" sx={{margin: 1}} />

          {/* 武器選択ボックス */}
          <UnitWeaponSelectBox
            labelTitle='Weapon'
            wType={!!unit ? unit.weapon : null}
            items={weaponData}
            selecting={weapon}
            onSelected={setWeapon}
          />

          <Spacer size={32} axis="horizontal" style={{margin: 4}}/>

          {/* 防具選択ボックス */}
          <UnitArmourSelectBox
            labelTitle='Armour'
            wType={!!unit ? unit.weapon : null}
            items={armourData}
            selecting={armour}
            onSelected={setArmour}
          />

          <Spacer size={32} axis="horizontal" style={{margin: 4}}/>

          {/* バッジ選択ボックス */}
          <UnitBadgeSelectBox
            labelTitle='Badge'
            items={badgeData}
            selecting={badge}
            onSelected={setBadge}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
