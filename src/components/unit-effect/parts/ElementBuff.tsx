import * as React from 'react';
import { Autocomplete, Chip, InputAdornment, TextField } from '@mui/material';
import { ElementType, getElementLabel } from '../../../common/constants/ElementType';
import { BuffElementAmount } from '../../../common/types/BuffElementAmount';
import ElementSelect from '../../utility/ElementSelect';

export default function ElementBuff(props: {
  label: string,
  value: BuffElementAmount[],
  setValue: (x: BuffElementAmount[]) => void,
}) {
  const { label, value: buffs, setValue: setBuffs } = props;

  const [selectElement, setSelectElement] = React.useState<ElementType | "all">("all");

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
        const item: BuffElementAmount = {
          label: selectElement === "all" ? "全" : getElementLabel(selectElement),
          amount: Number(value),
          elType: selectElement,
        };
        setBuffs([...buffs, item]);
      }
    }
    else if (reason === 'removeOption') {
      if (!!value && typeof value === "object") {
        const index = buffs.findIndex(x => x.amount === value.amount && x.elType === value.elType);
        if (index > -1) {
          const _buffs = [...buffs];
          _buffs.splice(index, 1);
          setBuffs(_buffs);
        }
      }
    }
    else if (reason === 'clear') {
      const init: BuffElementAmount[] = [];
      setBuffs(init);
    }
  }

  return (
    <Autocomplete
      options={new Array<BuffElementAmount>()}
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