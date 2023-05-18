import { Grid, Autocomplete, TextField } from '@mui/material';
import { IUnitForm } from './types.interface';

const AbilitiesForm = (props: {
  unitStat: IUnitForm,
  handleOnChangeStat: (key: keyof IUnitForm, value: IUnitForm[keyof IUnitForm]) => void,
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, event.target.value);
  };

  const handleabilityChange = (_: any, abilities: string[]) => {
    props.handleOnChangeStat("abilities", abilities);
  };

  return (
    <Grid container>
      <Grid item xl={9}>
        {/* ヴァリアブルチャント名 */}
        <TextField label='ヴァリアブルチャント名' sx={{width: '100%'}} name='variablechantName' value={props.unitStat.variablechantName} onChange={handleTextChange} />
        {/* ヴァリアブルチャント詳細 */}
        <TextField label='ヴァリアブルチャント詳細' multiline sx={{width: '100%'}} name='variablechantDetail' value={props.unitStat.variablechantDetail} onChange={handleTextChange} />

        {/* Ex必殺技名 */}
        <TextField label='Ex必殺技名' sx={{width: '100%'}} name='extraSpecialMoveName' value={props.unitStat.extraSpecialMoveName} onChange={handleTextChange} />
        {/* Ex必殺技詳細 */}
        <TextField label='Ex必殺技詳細' multiline sx={{width: '100%'}} name='extraSpecialMoveDetail' value={props.unitStat.extraSpecialMoveDetail} onChange={handleTextChange} />

        {/* アナザーセンス名 */}
        <TextField label='アナザーセンス名' sx={{width: '100%'}} name='anotherSenceName' value={props.unitStat.anotherSenceName} onChange={handleTextChange} />
        {/* アナザーセンス詳細 */}
        <TextField label='アナザーセンス詳細' multiline sx={{width: '100%'}} name='anotherSenceDetail' value={props.unitStat.anotherSenceDetail} onChange={handleTextChange} />

        {/* 個人アビリティ */}
        <Autocomplete
          options={[]}
          renderInput={
            (params) => <TextField {...params} label='アビリティ' />
          }
          multiple
          freeSolo
          isOptionEqualToValue={() => false}
          value={props.unitStat.abilities}
          disableClearable
          onChange={handleabilityChange}
        />
      </Grid>
    </Grid>
  );
};

export default AbilitiesForm;
