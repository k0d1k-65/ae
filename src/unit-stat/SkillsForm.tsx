import { Grid, TextField } from '@mui/material';
import { ISkillProperty, ISkillsForm, IUnitForm } from './types.interface';

const SkillsForm = (props: {
  unitStat: IUnitForm,
  handleOnChangeSkill: (key: keyof ISkillProperty, grade: keyof ISkillsForm, value: IUnitForm[keyof IUnitForm]) => void,
}) => {
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeSkill("name", event.target.name as any, event.target.value);
  };

  const handleOnChangeMp = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeSkill("mp", event.target.name as any, event.target.value || 0);
  };

  const handleOnChangeDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeSkill("detail", event.target.name as any, event.target.value);
  };

  return (
    <Grid container>
      <Grid container item xl={9}>
        <TextField label='★1 スキル' sx={{width: '80%'}} name='first.name' value={props.unitStat.first.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='first.mp' value={props.unitStat.first.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='first.detail' value={props.unitStat.first.detail} onChange={handleOnChangeDetail} />

        <TextField label='★2 スキル' sx={{width: '80%'}} name='second.name' value={props.unitStat.second.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='second.mp' value={props.unitStat.second.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='second.detail' value={props.unitStat.second.detail} onChange={handleOnChangeDetail} />

        <TextField label='★3 スキル' sx={{width: '80%'}} name='thirdA.name' value={props.unitStat.thirdA.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='thirdA.mp' value={props.unitStat.thirdA.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='thirdA.detail' value={props.unitStat.thirdA.detail} onChange={handleOnChangeDetail} />
        <TextField label='★3 スキル' sx={{width: '80%'}} name='thirdB.name' value={props.unitStat.thirdB.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='thirdB.mp' value={props.unitStat.thirdB.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='thirdB.detail' value={props.unitStat.thirdB.detail} onChange={handleOnChangeDetail} />

        <TextField label='★4 スキル' sx={{width: '80%'}} name='fourthA.name' value={props.unitStat.fourthA.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fourthA.mp' value={props.unitStat.fourthA.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fourthA.detail' value={props.unitStat.fourthA.detail} onChange={handleOnChangeDetail} />
        <TextField label='★4 スキル' sx={{width: '80%'}} name='fourthB.name' value={props.unitStat.fourthB.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fourthB.mp' value={props.unitStat.fourthB.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fourthB.detail' value={props.unitStat.fourthB.detail} onChange={handleOnChangeDetail} />

        <TextField label='★5 スキル' sx={{width: '80%'}} name='fifthA.name' value={props.unitStat.fifthA.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fifthA.mp' value={props.unitStat.fifthA.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fifthA.detail' value={props.unitStat.fifthA.detail} onChange={handleOnChangeDetail} />
        <TextField label='★5 スキル' sx={{width: '80%'}} name='fifthB.name' value={props.unitStat.fifthB.name} onChange={handleOnChangeName} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fifthB.mp' value={props.unitStat.fifthB.mp} onChange={handleOnChangeMp} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fifthB.detail' value={props.unitStat.fifthB.detail} onChange={handleOnChangeDetail} />
      </Grid>
    </Grid>
  );
};

export default SkillsForm;
