import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, TextField, ToggleButton } from '@mui/material';
import { Box } from '@mui/system';
import { getArmourByWeapon } from '../../common/constants/ArmourType';
import { Equipment } from '../../common/types/Equiqment';
import { findStyles, Unit } from '../../common/types/Unit';
import { UnitStat } from '../../common/types/UnitStat';
import { fetchArmours } from '../../features/Armour';
import { fetchBadges } from '../../features/Badges';
import { fetchUnits } from '../../features/Units';
import { fetchWeapons } from '../../features/Weapons';
import Spacer from '../utility/Spacer';
import { UnitSelectBox } from './UnitSelect';
import { StyleChip } from '../utility/StyleChip';
import { UnitWeaponSelectBox } from './UnitWeaponSelect';
import { UnitArmourSelectBox } from './UnitArmourSelect';
import { UnitBadgeSelectBox } from './UnitBadgeSelect';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UnitLightShadow } from './UnitLightShadow';
import { StyleType, StyleTypeColor } from '../../common/constants/StyleType';
import { UnitStatType } from '../../common/constants/UnitStatType';

export default function UnitBase() {
  const unitData = fetchUnits();
  const weaponData = fetchWeapons();
  const armourData = fetchArmours();
  const badgeData = fetchBadges();

  const [unit, setUnit] = React.useState<Unit|null>(null);
  const [unitDetailOpened, setUnitDetailOpened] = React.useState(false);

  const [nsBonus, setNSBonus] = React.useState<Unit|null>(null);
  const [asBonus, setASBonus] = React.useState<Unit|null>(null);
  const [esBonus, setESBonus] = React.useState<Unit|null>(null);
  const [hasNSBonus, setHasNSBonus] = React.useState(false);
  const [hasASBonus, setHasASBonus] = React.useState(false);
  const [hasESBonus, setHasESBonus] = React.useState(false);

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

  const [unitLightShadowNumber, setUnitLightShadowNumber] = React.useState<number>(0);

  const [weapon, setWeapon] = React.useState<Equipment|null>(null);
  const [selectableWeapons, setSelectableWeapons] = React.useState<Equipment[]>([]);
  const [armour, setArmour] = React.useState<Equipment|null>(null);
  const [selectableArmours, setSelectableArmours] = React.useState<Equipment[]>([]);
  const [badge, setBadge] = React.useState<Equipment|null>(null);

  // スタイルボーナス リセット
  React.useEffect(() => {
    setNSBonus(null);
    setASBonus(null);
    setESBonus(null);
    setHasNSBonus(false);
    setHasASBonus(false);
    setHasESBonus(false);

    if (!!unit) {
      const otherStyles = findStyles(unitData, unit);
      setNSBonus(otherStyles.find(x => x.styleType === StyleType.NS) || null);
      setASBonus(otherStyles.find(x => x.styleType === StyleType.AS) || null);
      setESBonus(otherStyles.find(x => x.styleType === StyleType.ES) || null);
    }
  }, [unit]);

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
      weapon && weapon.effectOnly && stat.integrateStats(weapon.effectOnly.effects);
      armour && stat.integrateStats(armour.stat);
      badge && stat.integrateStats(badge.stat);

      for (const lsBonus of unit.lsBonus) {
        if (unitLightShadowNumber >= lsBonus.lightShadow) {
          stat.integrateStats(lsBonus.stat);
        }
      }
    }

    if (!!nsBonus && !!nsBonus.styleBonus && hasNSBonus) {
      stat.integrateStats(nsBonus.styleBonus);
    }
    if (!!asBonus && !!asBonus.styleBonus && hasASBonus) {
      stat.integrateStats(asBonus.styleBonus);
    }
    if (!!esBonus && !!esBonus.styleBonus && hasESBonus) {
      stat.integrateStats(esBonus.styleBonus);
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
  }, [unit, weapon, armour, badge, calcStatAuto, unitLightShadowNumber, hasNSBonus, hasASBonus, hasESBonus]);

  // 装備品 リセット
  React.useEffect(() => {
    /**
     * 選択ユニットが変わったら、武器selectをリセット
     * - ユニット選択状態のとき
     *   ユニットの武器種の装備だけをリストする
     *   リストされた武器であれば、その選択状態は維持
     * - ユニット非選択状態のとき
     *   ユニットの武器リスト、選択武器をリセット
     */
    if (!!unit) {
      const options = weaponData
        .filter(option => option.weaponType === unit.weapon)
        .filter(option =>
          !!option.equipOnly
          ? option.equipOnly.targets.includes(unit.className)
          : true
        );
      setSelectableWeapons(options);

      if (!weapon || !options.includes(weapon)) {
        setWeapon(null);
      }
    } else {
      setSelectableWeapons([]);
      setWeapon(null);
    }

    /**
     * 選択ユニットが変わったら、防具selectをリセット
     * - ユニット選択状態のとき
     *   ユニットの武器種の装備だけをリストする
     *   リストされた防具であれば、その選択状態は維持
     * - ユニット非選択状態のとき
     *   ユニットの防具リスト、選択防具をリセット
     */
    if (!!unit) {
      const armourType = getArmourByWeapon(unit.weapon);
      const options = armourData
        .filter(option => option.armourType === armourType)
        .filter(option =>
          !!option.equipOnly
          ? option.equipOnly.targets.includes(unit.className)
          : true
        );
      setSelectableArmours(options);

      if (!armour || !options.includes(armour)) {
        setArmour(null);
      }
    } else {
      setSelectableArmours([]);
      setArmour(null);
    }
  }, [unit]);

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
        elevation={0}
        expanded={unitDetailOpened}
        sx={{
          border: unitDetailOpened ? 1 : 0,
          borderColor: 'grey.500',
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

          <Grid container spacing={1}>
            {/* クラス名テキスト */}
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
              <div>
                <span style={{fontSize: '80%'}}>Class : {!!unit ? unit.className : "-"}</span>
                <StyleChip styleType={!!unit ? unit.styleType : null}/>
              </div>

              {/* auto計算 */}
              <ToggleButton
                value="check"
                selected={calcStatAuto}
                onChange={() => setCalcStatAuto(!calcStatAuto)}
                size={'small'}
                color={'warning'}
              >
                <>auto計算</>
              </ToggleButton>
            </Grid>

            <Grid item xs={4}>
              <TextField
                type="number"
                label={UnitStatType.HP}
                value={statusHp}
                disabled={calcStatAuto}
                onChange={e => setStatusHp(Number(e.target.value))}
                size={'small'}
              />
            </Grid>

            {/* スタイルボーナスONOFF指定チェックボックス */}
            <Grid item xs={8}>
              {
                !!nsBonus || !!asBonus || !!esBonus
                ?
                <span style={{fontSize: '80%'}}>StyleBonus : </span>
                :
                <></>
              }

              {
                !!nsBonus
                ?
                <ToggleButton
                  value=""
                  selected={hasNSBonus}
                  onChange={() => {setHasNSBonus(!hasNSBonus)}}
                  size={'small'}
                  color={StyleTypeColor.NS}
                >
                  {StyleType.NS}
                </ToggleButton>
                :
                <></>
              }
              {
                !!asBonus
                ?
                <ToggleButton
                  value=""
                  selected={hasASBonus}
                  onChange={() => {setHasASBonus(!hasASBonus)}}
                  size={'small'}
                  color={StyleTypeColor.AS}
                >
                  {StyleType.AS}
                </ToggleButton>
                :
                <></>
              }
              {
                !!esBonus
                ?
                <ToggleButton
                  value=""
                  selected={hasESBonus}
                  onChange={() => {setHasESBonus(!hasESBonus)}}
                  size={'small'}
                  color={StyleTypeColor.ES}
                >
                  {StyleType.ES}
                </ToggleButton>
                :
                <></>
              }
            </Grid>

            <Grid item xs={4}>
              <TextField
                type="number"
                label={UnitStatType.MP}
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
                label={UnitStatType.ATK}
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
                label={UnitStatType.DEF}
                value={statusDef}
                disabled={calcStatAuto}
                onChange={e => setStatusDef(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              {/* 天冥 */}
              <UnitLightShadow
                unit={unit}
                currentLs={unitLightShadowNumber}
                setLightShadow={setUnitLightShadowNumber}
              />
            </Grid>
            <Grid item xs={4}>
              {/* 魔攻 */}
              <TextField
                type="number"
                label={UnitStatType.MATK}
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
                label={UnitStatType.MDEF}
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
                label={UnitStatType.POWER}
                value={statusPower}
                disabled={calcStatAuto}
                onChange={e => setStatusPower(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label={UnitStatType.ENDURE}
                value={statusEndure}
                disabled={calcStatAuto}
                onChange={e => setStatusEndure(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label={UnitStatType.LUCK}
                value={statusLuck}
                disabled={calcStatAuto}
                onChange={e => setStatusLuck(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label={UnitStatType.INTELLIGENCE}
                value={statusIntelligence}
                disabled={calcStatAuto}
                onChange={e => setStatusIntelligence(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label={UnitStatType.SPEED}
                value={statusSpeed}
                disabled={calcStatAuto}
                onChange={e => setStatusSpeed(Number(e.target.value))}
                size={'small'}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label={UnitStatType.SPLIT}
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
            selecting={weapon}
            items={selectableWeapons}
            onSelected={setWeapon}
          />

          <Spacer size={32} axis="horizontal" style={{margin: 4}}/>

          {/* 防具選択ボックス */}
          <UnitArmourSelectBox
            labelTitle='Armour'
            selecting={armour}
            items={selectableArmours}
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
