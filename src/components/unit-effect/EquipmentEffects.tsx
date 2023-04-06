import * as React from 'react';
import ElementBuff from './parts/ElementBuff';
import { Autocomplete, InputAdornment, Grid, TextField, ToggleButton } from '@mui/material';
import { BuffElementAmount } from '../../types/units/BuffElementAmount';
import { BuffWeaponAmount } from '../../types/units/BuffWeaponAmount';
import { EffectType } from '../../constants/units/EffectType';
import WeaponBuff from './parts/WeaponBuff';

export default function EquipmentEffects() {
  const [powerBuffs, setPowerBuffs] = React.useState<number[]>([]);
  const [intBuffs, setIntBuffs] = React.useState<number[]>([]);
  const [speedBuffs, setSpeedBuffs] = React.useState<number[]>([]);

  const [elementBuffs, setElementBuffs] = React.useState<BuffElementAmount[]>([]);
  const [weaponTypeBuffs, setWeaponTypeBuffs] = React.useState<BuffWeaponAmount[]>([]);

  const [concentration, setConcentration] = React.useState<number[]>([]);
  const [vigilantly, setVigilantly] = React.useState<boolean>(false);
  const [downhill, setDownhill] = React.useState<boolean>(false);

  const [weakPointBuff, setWeakPointBuff] = React.useState<boolean>(false);
  const [multiHitBuff, setMultiHitBuff] = React.useState<boolean>(false);

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
      {/* 腕力 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.powerBuffs, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={powerBuffs.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          powerBuffs,
          setPowerBuffs
        )}
      />
      {/* 知性 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.intBuffs, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={intBuffs.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          intBuffs,
          setIntBuffs
        )}
      />
      {/* 速度 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.speedBuffs, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={speedBuffs.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          speedBuffs,
          setSpeedBuffs
        )}
      />

      {/* 属性 */}
      <ElementBuff
        label={EffectType.elementBuffs}
        value={elementBuffs}
        setValue={setElementBuffs}
      />

      {/* 武器種 */}
      <WeaponBuff
        label={EffectType.weaponTypeBuffs}
        value={weaponTypeBuffs}
        setValue={setWeaponTypeBuffs}
      />

      {/* 精神統一 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.concentration, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={concentration.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          concentration,
          setConcentration
        )}
      />

      <Grid container spacing={1} marginTop={.5} marginBottom={.5}>
        <Grid item xs={4}>
          {/* 虎視眈々 */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <ToggleButton
              value="check"
              selected={vigilantly}
              onChange={() => setVigilantly(!vigilantly)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
              }}
            >
              <>{EffectType.vigilantly}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!vigilantly}
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
          {/* 下剋上 */}
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>
            <ToggleButton
              value="check"
              selected={downhill}
              onChange={() => setDownhill(!downhill)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
              }}
            >
              <>{EffectType.downhill}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!downhill}
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
          {/* 弱点強化 */}
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>
            <ToggleButton
              value="check"
              selected={weakPointBuff}
              onChange={() => setWeakPointBuff(!weakPointBuff)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
              }}
            >
              <>{EffectType.weakPointBuff}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!weakPointBuff}
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
          {/* 多段強化 */}
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>
            <ToggleButton
              value="check"
              selected={multiHitBuff}
              onChange={() => setMultiHitBuff(!multiHitBuff)}
              size={'small'}
              style={{
                width: "100px",
                marginRight: "8px",
              }}
            >
              <>{EffectType.multiHitBuff}</>
            </ToggleButton>
            <TextField
              aria-readonly
              disabled={!multiHitBuff}
              value={50}
              size={'small'}
              style={{
                flex: 1,
              }}
              variant="standard"
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}