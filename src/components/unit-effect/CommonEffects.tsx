import * as React from 'react';
import { Box } from '@mui/system';
import ElementBuff from './parts/ElementBuff';
import { Autocomplete, InputAdornment, TextField, ToggleButton } from '@mui/material';
import { BuffElementAmount } from '../../types/units/BuffElementAmount';
import { BuffWeaponAmount } from '../../types/units/BuffWeaponAmount';
import { EffectType } from '../../constants/common/EffectType';
import WeaponBuff from './parts/WeaponBuff';

export default function CommonEffects() {
  const [powerOfPain, setPowerOfPain] = React.useState<number[]>([]);
  const [powerOfPoison, setPowerOfPoison] = React.useState<number[]>([]);
  const [enhCriticalDamage, setEnhCriticalDamage] = React.useState<number[]>([]);
  const [enhMagicCriticalDamage, setEnhMagicCriticalDamage] = React.useState<number[]>([]);

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
      {/* ペイン時強化 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.powerOfPain, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={powerOfPain.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          powerOfPain,
          setPowerOfPain
        )}
      />

      {/* 毒時強化 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.powerOfPoison, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={powerOfPoison.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          powerOfPoison,
          setPowerOfPoison
        )}
      />

      {/* Critダメージ強化 */}
      <Autocomplete
        options={initStrings}
        renderInput={(p) => handleRenderInput(p, EffectType.enhCriticalDamage, 'number')}
        multiple
        freeSolo
        isOptionEqualToValue={() => false}
        value={enhCriticalDamage.map(v => String(v))}
        onChange={(e, v, reason, details) => handleChange(
          reason,
          Number(details?.option),
          enhCriticalDamage,
          setEnhCriticalDamage
        )}
      />
    </>
  );
}