import * as React from 'react';
import { Autocomplete, Chip, InputAdornment, TextField } from '@mui/material';
import { BuffWeaponAmount } from '../../../types/units/BuffWeaponAmount';
import { WeaponType } from '../../../constants/units/WeaponType';
import WeaponSelect from '../../common/WeaponSelect';

export default function WeaponBuff(props: {
  label: string,
  value: BuffWeaponAmount[],
  setValue: (x: BuffWeaponAmount[]) => void,
}) {
  const { label, value: buffs, setValue: setBuffs } = props;

  const [selectWeapon, setSelectWeapon] = React.useState<WeaponType | "all">("all");

  const handleRenderInput = (params: any) => {
    return (
      <TextField
        {...params}
        type='number'
        label={label}
        variant="standard"
        InputProps={{
          ...params.InputProps,
          startAdornment: (
            <>
              {params.InputProps.startAdornment}
              <InputAdornment position="end">
                <WeaponSelect
                  value={selectWeapon}
                  handleSelect={setSelectWeapon}
                  size='small'
                  variant='standard'
                />
              </InputAdornment>
            </>
          ),
        }}
      />
    );
  };

  const handleChange = (reason: string, value: any) => {
    if (reason === 'createOption') {
      if (!!value && typeof value === "string") {
        const item: BuffWeaponAmount = {
          label: selectWeapon === "all" ? "全" : selectWeapon,
          amount: Number(value),
          wpType: selectWeapon,
        };
        setBuffs([...buffs, item]);
      }
    }
    else if (reason === 'removeOption') {
      if (!!value && typeof value === "object") {
        const index = buffs.findIndex(x => x.amount === value.amount && x.wpType === value.wpType);
        if (index > -1) {
          const _buffs = [...buffs];
          _buffs.splice(index, 1);
          setBuffs(_buffs);
        }
      }
    }
    else if (reason === 'clear') {
      setBuffs(buffs.splice(0));
    }
  }

  return (
    <Autocomplete
      options={new Array<BuffWeaponAmount>()}
      renderInput={handleRenderInput}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip {...getTagProps({ index })} label={option.label + option.amount} />
        ));
      }}
      multiple
      freeSolo
      isOptionEqualToValue={() => false}
      value={buffs}
      onChange={(e, v, reason, details) => handleChange(
        reason,
        details?.option,
      )}
    />
  );
}