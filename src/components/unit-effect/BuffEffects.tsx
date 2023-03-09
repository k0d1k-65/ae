import * as React from 'react';
import { Box } from '@mui/system';
import ElementBuff from './parts/ElementBuff';
import { Autocomplete, InputAdornment, TextField, ToggleButton } from '@mui/material';
import { BuffElementAmount } from '../../common/types/BuffElementAmount';
import { BuffWeaponAmount } from '../../common/types/BuffWeaponAmount';
import { EffectType } from '../../common/constants/EffectType';
import WeaponBuff from './parts/WeaponBuff';

export default function BuffEffects() {
  const [enhElement, setEnhElement] = React.useState<BuffElementAmount[]>([]);
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
      <ElementBuff
        label={EffectType.enhElement}
        value={enhElement}
        setValue={setEnhElement}
      />
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


      <>
        <ToggleButton
          value="check"
          selected={enhInAnotherZone}
          onChange={() => setEnhInAnotherZone(!enhInAnotherZone)}
          size={'small'}
        >
          <>{EffectType.enhInAnotherZone}</>
        </ToggleButton>
        <TextField
          aria-readonly
          disabled={!enhInAnotherZone}
          value={50}
          size={'small'}
          variant="standard"
        />
      </>
      {/* enhGrowth */}
      {/* enhDespairSword */}
      {/* enhDespairBracelet */}
      <>
        <ToggleButton
          value="check"
          selected={enhRage}
          onChange={() => setEnhRage(!enhRage)}
          size={'small'}
        >
          <>{EffectType.enhRage}</>
        </ToggleButton>
        <TextField
          aria-readonly
          disabled={!enhRage}
          value={50}
          size={'small'}
          variant="standard"
        />
      </>
      <>
        <ToggleButton
          value="check"
          selected={enhBind}
          onChange={() => setEnhBind(!enhBind)}
          size={'small'}
        >
          <>{EffectType.enhBind}</>
        </ToggleButton>
        <TextField
          aria-readonly
          disabled={!enhBind}
          value={50}
          size={'small'}
          variant="standard"
        />
      </>
      <>
        <ToggleButton
          value="check"
          selected={enhPain}
          onChange={() => setEnhPain(!enhPain)}
          size={'small'}
        >
          <>{EffectType.enhPain}</>
        </ToggleButton>
        <TextField
          aria-readonly
          disabled={!enhPain}
          value={50}
          size={'small'}
          variant="standard"
        />
      </>
      <>
        <ToggleButton
          value="check"
          selected={enhPoison}
          onChange={() => setEnhPoison(!enhPoison)}
          size={'small'}
        >
          <>{EffectType.enhPoison}</>
        </ToggleButton>
        <TextField
          aria-readonly
          disabled={!enhPoison}
          value={50}
          size={'small'}
          variant="standard"
        />
      </>
      {/* enhWeakPoint */}
      {/* mpConsumption */}
      {/* enemyNumbers */}
      {/* enhOutsideAF */}

    </>
  );
}