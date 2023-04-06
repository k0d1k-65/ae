import * as React from 'react';
import { Autocomplete, TextField, ToggleButton, ToggleButtonGroup, Paper, ClickAwayListener } from "@mui/material";
import { WeaponType } from "../../constants/common/WeaponType";
import { Unit } from '../../types/units/Unit';
import { Box } from '@mui/system';
import { StyleChip } from '../common/StyleChip';
import Spacer from '../common/Spacer';

export function UnitSelectBox(props: {units: Unit[], onSelected: (s: Unit|null) => void}) {
  const { units, onSelected } = props;

  const allUnits = units.map((option) => {
    return {
      type: option.weapon,
      ...option,
    };
  });
  const weapons = Object.values(WeaponType);

  const [open, setOpen] = React.useState<boolean>(false);

  const [selectableUnits, setSelectableUnits] = React.useState<Unit[]>(allUnits);
  const [wTypes, setWTypes] = React.useState<WeaponType[]>([]);
  const [bulkWeapon, setBulkWeapon] = React.useState(false);

  React.useEffect(() => {
    if (wTypes.length == 0) {
      setSelectableUnits(allUnits);
    } else {
      setSelectableUnits(allUnits.filter(u => wTypes.includes(u.weapon)));
    }

    // 武器種絞り込みが全てONになったら、bulkボタンもON状態に
    // それ以外の時はbulkボタンをOFFにする
    if (wTypes.length == weapons.length) {
      setBulkWeapon(true);
    } else {
      setBulkWeapon(false);
    }
  }, [wTypes]);

  const handleUnitChange = (_: any, selected: Unit|null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    return (
      <TextField {...params} label="Unit" />
    );
  };

  const handleRenderOption = (props: object, option: Unit) => {
    return (
      <Box component="li" {...props}>
        <StyleChip styleType={option.styleType}/>
        <span>{option.name}</span>
      </Box>
    )
  };

  const handleWeaponToggle = (_: any, values: WeaponType[]) => {
    setWTypes(values);
  };

  const handleWeaponBulkChange = () => {
    // bulk がONのとき、武器種絞り込みを全てOFFに
    // bulk がOFFのとき、武器種絞り込みを全てONにする
    if (bulkWeapon) {
      setBulkWeapon(false)
      setWTypes([]);
    } else {
      setBulkWeapon(true);
      setWTypes(weapons);
    }
  }

  const handleRenderPaperComponent = (paperProps: any) => {
    return (
      <Paper {...paperProps}>
        <div>
          <Box sx={{display: 'flex'}}>
            {/* 一括ON/OFF */}
            <ToggleButton
              value="bulk"
              aria-label="bulk"
              selected={bulkWeapon}
              onChange={handleWeaponBulkChange}
              size="small"
            >
              <>bulk</>
            </ToggleButton>

            <Spacer size={8} />

            {/* ユニット一覧絞り込み */}
            <ToggleButtonGroup
              value={wTypes}
              onChange={handleWeaponToggle}
            >
              {weapons.map(wt => {
                return (
                  <ToggleButton size="small" value={wt} aria-label={wt}>
                    <>{wt}</>
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </Box>

          {paperProps.children}
        </div>
      </Paper>
    )
  }

  return (
    <ClickAwayListener onClickAway={() => {setOpen(false)}}>
      <Box display={'flex'} flexDirection={'column'}>
        {/* ユニット一覧オートコンプリート */}
        <Autocomplete
          // id="UnitSelectBox"
          options={selectableUnits}
          groupBy={(opt) => opt.weapon}
          getOptionLabel={(opt) => opt.name}
          renderOption={handleRenderOption}
          size={'small'}
          renderInput={handleRender}
          onChange={handleUnitChange}
          open={open}
          onOpen={() => {setOpen(true)}}
          onClose={(_, reason) => {reason !== "blur" && setOpen(false);}}
          PaperComponent={handleRenderPaperComponent}
        />
      </Box>
    </ClickAwayListener>
  );
}
