import * as React from 'react';
import { Autocomplete, Chip, InputAdornment, TextField } from '@mui/material';
import { ElementType } from '../../../constants/common/ElementType';
import { BuffElementPercent } from '../../../types/common/BuffElementPercent';
import { ElementSelect } from '../../common/ElementSelect';

export default function ElementBuff(props: {
  label: string,
  value: BuffElementPercent[],
  setValue: (x: BuffElementPercent[]) => void,
}) {
  const { label, value: buffs, setValue: setBuffs } = props;

  const [selectElement, setSelectElement] = React.useState<ElementType>(ElementType.All);

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
                <ElementSelect
                  value={selectElement}
                  handleSelect={setSelectElement}
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
        const item: BuffElementPercent = {
          type: selectElement,
          amount: Number(value),
        };
        setBuffs([...buffs, item]);
      }
    }
    else if (reason === 'removeOption') {
      if (!!value && typeof value === "object") {
        const index = buffs.findIndex(x => x.amount === value.amount && x.type === value.type);
        if (index > -1) {
          const _buffs = [...buffs];
          _buffs.splice(index, 1);
          setBuffs(_buffs);
        }
      }
    }
    else if (reason === 'clear') {
      const init: BuffElementPercent[] = [];
      setBuffs(init);
    }
  }

  return (
    <Autocomplete
      options={new Array<BuffElementPercent>()}
      renderInput={handleRenderInput}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip {...getTagProps({ index })} label={option.type + option.amount} />
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