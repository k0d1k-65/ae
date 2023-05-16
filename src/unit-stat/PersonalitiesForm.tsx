import React from 'react';
import { Grid, Autocomplete, TextField } from '@mui/material';
import WeaponSelect from '../common/WeaponSelect';
import { WeaponType } from '../common/constants/WeaponType';
import { IPersonalitiesForm } from './types.interface';

const PersonalitiesForm = (props: {
  personality: IPersonalitiesForm,
  setPersonality: React.Dispatch<IPersonalitiesForm>
}) => {

  const handleWeaponSelect = (value: WeaponType) => {
    props.setPersonality({...props.personality, weapon: value});
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPersonality({...props.personality, unitName: event.target.value});
  };

  const handlePersonalitiesChange = (_: any, items: string[]) => {
    const personalities = [...props.personality.personalities, ...items];
    props.setPersonality({...props.personality, personalities: Array.from(new Set(personalities))});
  }

  return (
    <Grid container>
      {/* 武器選択 */}
      <Grid item xs={3} lg={1}>
        <WeaponSelect
          value={props.personality.weapon}
          handleSelect={handleWeaponSelect}
          size='small'
        />
      </Grid>
      {/* ユニット名入力 */}
      <Grid item xs={9} lg={3} >
        <TextField
          value={props.personality.unitName}
          onChange={handleNameChange}
          label='ユニット名'
          sx={{width: '100%'}}
        />
      </Grid>
      {/* 余白 */}
      <Grid item xs={0} lg={2}></Grid>
      {/* パーソナリティ */}
      <Grid item xs={12} lg={6}>
        <Autocomplete
          options={[]}
          renderInput={
            (params) => <TextField {...params} label='パーソナリティ' />
          }
          multiple
          freeSolo
          isOptionEqualToValue={() => false}
          value={props.personality.personalities}
          onChange={handlePersonalitiesChange}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalitiesForm;
