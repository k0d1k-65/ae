import { Grid, TextField } from '@mui/material';
import { ISkillsForm } from './types.interface';

const SkillsForm = (props: {
  skills: ISkillsForm,
  setSkills: React.Dispatch<ISkillsForm>
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSkills({...props.skills, [event.target.name]: event.target.value});
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSkills({...props.skills, [event.target.name]: event.target.value || 0});
  };

  return (
    <Grid container>
      <Grid container item xl={9}>
        <TextField label='★1 スキル' sx={{width: '80%'}} name='first' value={props.skills.first} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='firstMp' value={props.skills.firstMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='firstDetail' value={props.skills.firstDetail} onChange={handleTextChange} />

        <TextField label='★2 スキル' sx={{width: '80%'}} name='second' value={props.skills.second} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='secondMp' value={props.skills.secondMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='secondDetail' value={props.skills.secondDetail} onChange={handleTextChange} />

        <TextField label='★3 スキル' sx={{width: '80%'}} name='thirdA' value={props.skills.thirdA} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='thirdAMp' value={props.skills.thirdAMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='thirdADetail' value={props.skills.thirdADetail} onChange={handleTextChange} />
        <TextField label='★3 スキル' sx={{width: '80%'}} name='thirdB' value={props.skills.thirdB} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='thirdBMp' value={props.skills.thirdBMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='thirdBDetail' value={props.skills.thirdBDetail} onChange={handleTextChange} />

        <TextField label='★4 スキル' sx={{width: '80%'}} name='fourthA' value={props.skills.fourthA} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fourthAMp' value={props.skills.fourthAMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fourthADetail' value={props.skills.fourthADetail} onChange={handleTextChange} />
        <TextField label='★4 スキル' sx={{width: '80%'}} name='fourthB' value={props.skills.fourthB} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fourthBMp' value={props.skills.fourthBMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fourthBDetail' value={props.skills.fourthBDetail} onChange={handleTextChange} />

        <TextField label='★5 スキル' sx={{width: '80%'}} name='fifthA' value={props.skills.fifthA} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fifthAMp' value={props.skills.fifthAMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fifthADetail' value={props.skills.fifthADetail} onChange={handleTextChange} />
        <TextField label='★5 スキル' sx={{width: '80%'}} name='fifthB' value={props.skills.fifthB} onChange={handleTextChange} />
        <TextField label='消費MP' type='number' sx={{width: '20%'}} name='fifthBMp' value={props.skills.fifthBMp} onChange={handleNumberChange} />
        <TextField label='詳細' multiline sx={{width: '100%'}} name='fifthBDetail' value={props.skills.fifthBDetail} onChange={handleTextChange} />
      </Grid>
    </Grid>
  );
};

export default SkillsForm;
