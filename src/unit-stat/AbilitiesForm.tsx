import { Grid, Autocomplete, TextField } from '@mui/material';
import { IAbilitiesForm } from './types.interface';

const AbilitiesForm = (props: {
  abilities: IAbilitiesForm,
  setAbilities: React.Dispatch<IAbilitiesForm>
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setAbilities({...props.abilities, [event.target.name]: event.target.value});
  };

  const handleabilityChange = (_: any, abilities: string[]) => {
    props.setAbilities({...props.abilities, abilities: abilities});
  };

  return (
    <Grid container>
      <Grid item xl={9}>
        {/* ヴァリアブルチャント名 */}
        <TextField label='ヴァリアブルチャント名' sx={{width: '100%'}} name='variablechantName' value={props.abilities.variablechantName} onChange={handleTextChange} />
        {/* ヴァリアブルチャント詳細 */}
        <TextField label='ヴァリアブルチャント詳細' multiline sx={{width: '100%'}} name='variablechantDetail' value={props.abilities.variablechantDetail} onChange={handleTextChange} />

        {/* Ex必殺技名 */}
        <TextField label='Ex必殺技名' sx={{width: '100%'}} name='extraSpecialMoveName' value={props.abilities.extraSpecialMoveName} onChange={handleTextChange} />
        {/* Ex必殺技詳細 */}
        <TextField label='Ex必殺技詳細' multiline sx={{width: '100%'}} name='extraSpecialMoveDetail' value={props.abilities.extraSpecialMoveDetail} onChange={handleTextChange} />

        {/* アナザーセンス名 */}
        <TextField label='アナザーセンス名' sx={{width: '100%'}} name='anotherSenceName' value={props.abilities.anotherSenceName} onChange={handleTextChange} />
        {/* アナザーセンス詳細 */}
        <TextField label='アナザーセンス詳細' multiline sx={{width: '100%'}} name='anotherSenceDetail' value={props.abilities.anotherSenceDetail} onChange={handleTextChange} />

        {/* 個人アビリティ */}
        <Autocomplete
          options={[]}
          renderInput={
            (params) => <TextField {...params} label='アビリティ' />
          }
          multiple
          freeSolo
          isOptionEqualToValue={() => false}
          value={props.abilities.abilities}
          disableClearable
          onChange={handleabilityChange}
        />
      </Grid>
    </Grid>
  );
};

export default AbilitiesForm;
