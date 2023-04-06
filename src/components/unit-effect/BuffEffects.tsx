import * as React from 'react';
import ElementBuff from './parts/ElementBuff';
import { Autocomplete, InputAdornment, Grid, TextField, ToggleButton } from '@mui/material';
import { BuffElementPercent } from '../../types/common/BuffElementPercent';
import { EffectType } from '../../constants/common/EffectType';

export default function BuffEffects() {
  const [enhElement, setEnhElement] = React.useState<BuffElementPercent[]>([]);
  const [enhHpMax, setEnhHpMax] = React.useState<number[]>([]);
  const [enhHpLower, setEnhHpLower] = React.useState<number[]>([]);
  const [enhNormalAttack, setEnhNormalAttack] = React.useState<number[]>([]);

  const [enhInAnotherZone, setEnhInAnotherZone] = React.useState<boolean>(false);
  const [enhGrowth, setEnhGrowth] = React.useState<boolean>(false);
  const [enhDespairSword, setEnhDespairSword] = React.useState<boolean>(false);
  const [enhDespairBracelet, setEnhDespairBracelet] = React.useState<boolean>(false);

  const [enhRage, setEnhRage] = React.useState<boolean>(false);
  const [enhBind, setEnhBind] = React.useState<boolean>(false);
  const [enhPain, setEnhPain] = React.useState<boolean>(false);
  const [enhPoison, setEnhPoison] = React.useState<boolean>(false);

  const [enableWeakPoint, setEnableWeakPoint] = React.useState<boolean>(false);
  const [enhWeakPoint, setEnhWeakPoint] = React.useState<number>(0);

  const [mpConsumption, setMpConsumption] = React.useState<boolean>(false);
  const [enemyNumbers, setEnemyNumbers] = React.useState<boolean>(false);
  const [enhOutsideAF, setEnhOutsideAF] = React.useState<boolean>(false);

  const handleRenderInput = (
    params: any,
    label: string,
    type: string,
    adornment?: JSX.Element
  ) => {
    return (
      <TextField
        {...params}
        type={type}
        label={label}
        variant="standard"
        InputProps={{
          ...params.InputProps,
          startAdornment: (
            <>
              {params.InputProps.startAdornment}
              <InputAdornment position="end">
                {adornment}
              </InputAdornment>
            </>
          ),
        }}
      />
    );
  };

  const handleChange = (
    reason: string,
    value: any,
    state: any[],
    setter: (x: any) => void,
  ) => {
    if (reason === 'createOption' && !!value) {
      setter([...state, value]);
    }
    else if (reason === 'removeOption' && !!value) {
      const _state = [...state];
      _state.splice(_state.indexOf(value), 1);
      setter(_state);
    }
    else if (reason === 'clear') {
      setter(state.splice(0));
    }
  }

  const initStrings: number[] = [];

  return (
    <>
      {/* 属性 */}
      <ElementBuff
        label={EffectType.enhElement}
        value={enhElement}
        setValue={setEnhElement}
      />

      {/* HP最大時強化 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.enhHpMax, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={enhHpMax.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          enhHpMax,
          setEnhHpMax
        )}
      />

      {/* HP低下時強化 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.enhHpLower, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={enhHpLower.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          enhHpLower,
          setEnhHpLower
        )}
      />

      {/* 通常攻撃強化 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.enhNormalAttack, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={enhNormalAttack.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          enhNormalAttack,
          setEnhNormalAttack
        )}
      />

      <Grid container spacing={1} marginTop={.5} marginBottom={.5}>
        <Grid item xs={4}>
          {/* ZONE覚醒時強化 */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <ToggleButton
              value="check"
              selected={enhInAnotherZone}
              onChange={() => setEnhInAnotherZone(!enhInAnotherZone)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
                fontSize: "10%",
                whiteSpace: "nowrap",
              }}
            >
              <>{EffectType.enhInAnotherZone}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!enhInAnotherZone}
              value={50}
              size={'small'}
              style={{
                flex: 1,
              }}
              variant="standard"
            />
          </div>

        </Grid>

        {/* enhGrowth */}
        {/* enhDespairSword */}
        {/* enhDespairBracelet */}

        <Grid item xs={4}>
          {/* 挑発エンハンス */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <ToggleButton
              value="check"
              selected={enhRage}
              onChange={() => setEnhRage(!enhRage)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
                fontSize: "10%",
              }}
            >
              <>{EffectType.enhRage}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!enhRage}
              value={50}
              size={'small'}
              style={{
                flex: 1,
              }}
              variant="standard"
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          {/* 封印エンハンス */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <ToggleButton
              value="check"
              selected={enhBind}
              onChange={() => setEnhBind(!enhBind)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
                fontSize: "10%",
              }}
            >
              <>{EffectType.enhBind}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!enhBind}
              value={50}
              size={'small'}
              style={{
                flex: 1,
              }}
              variant="standard"
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          {/* ペインエンハンス */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <ToggleButton
              value="check"
              selected={enhPain}
              onChange={() => setEnhPain(!enhPain)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
                fontSize: "10%",
              }}
            >
              <>{EffectType.enhPain}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!enhPain}
              value={50}
              size={'small'}
              style={{
                flex: 1,
              }}
              variant="standard"
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          {/* 毒エンハンス */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <ToggleButton
              value="check"
              selected={enhPoison}
              onChange={() => setEnhPoison(!enhPoison)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
                fontSize: "10%",
              }}
            >
              <>{EffectType.enhPoison}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!enhPoison}
              value={50}
              size={'small'}
              style={{
                flex: 1,
              }}
              variant="standard"
            />
          </div>
        </Grid>

        {/* enhWeakPoint */}
        {/* mpConsumption */}
        {/* enemyNumbers */}
        {/* enhOutsideAF */}
      </Grid>
    </>
  );
}