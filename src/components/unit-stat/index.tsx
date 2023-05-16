import React from 'react';
import PersonalitiesForm from './PersonalitiesForm';
import StatsForm from './StatsForm';
import AbilitiesForm from './AbilitiesForm';
import SkillsForm from './SkillsForm';
import { IAbilitiesForm, IPersonalitiesForm, ISkillsForm, IStatsForm } from './types.interface';
import { WeaponType } from '../../constants/common/WeaponType';
import { StyleType } from '../../constants/common/StyleType';
import { LightShadowType } from '../../constants/common/LightShadowType';
import styled from 'styled-components';
import { Button } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 0;
  margin: 8px 0 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Main = styled.div`
  overflow: auto;
  padding: 8px 0;
  flex: auto;

  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: #a8a8a8 #e1e1e1;

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #e1e1e166;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
    border-radius: 8px;
    border: 1px solid #ddd

    /* スクロールバーのホバー時の色 */
    &:hover {
      background-color: #808080;
    }
  }
`;

const UnitStatComponent: React.FC = () => {
  const [personality, setPersonality] = React.useState<IPersonalitiesForm>({
    unitName: "",
    weapon: WeaponType.All,
    personalities: []
  });

  const [stats, setStats] = React.useState<IStatsForm>({
    className: "",
    style: StyleType.NS,
    statHp: 0,
    statMp: 0,
    lightShadow: LightShadowType.Light,
    lightShadowNumber: 0,
    statPower: 0,
    statEndure: 0,
    statLuck: 0,
    statIntelligense: 0,
    statSpeed: 0,
    statSplit: 0,
  });

  const [abilities, setAbilities] = React.useState<IAbilitiesForm>({
    variablechantName: "",
    variablechantDetail: "",
    extraSpecialMoveName: "",
    extraSpecialMoveDetail: "",
    anotherSenceName: "",
    anotherSenceDetail: "",
    abilities: [],
  });

  const [skills, setSkills] = React.useState<ISkillsForm>({
    first: "",
    firstMp: 0,
    firstDetail: "",
    second: "",
    secondMp: 0,
    secondDetail: "",
    thirdA: "",
    thirdAMp: 0,
    thirdADetail: "",
    thirdB: "",
    thirdBMp: 0,
    thirdBDetail: "",
    fourthA: "",
    fourthAMp: 0,
    fourthADetail: "",
    fourthB: "",
    fourthBMp: 0,
    fourthBDetail: "",
    fifthA: "",
    fifthAMp: 0,
    fifthADetail: "",
    fifthB: "",
    fifthBMp: 0,
    fifthBDetail: "",
  });

  return (
    <Wrapper>
      <Header>
        <Button
          variant='contained'
          color='primary'
        >SAVE</Button>
        <Button
          variant='contained'
          color='error'
        >CLEAR</Button>
      </Header>

      <Main>
        {/* ユニット名・パーソナリティ */}
        <PersonalitiesForm personality={personality} setPersonality={setPersonality} />

        <hr style={{margin: '16px 8px'}}/>

        {/* ステータス */}
        <StatsForm stats={stats} setStats={setStats} />

        <hr style={{margin: '16px 8px'}}/>

        {/* アビリティ */}
        <AbilitiesForm abilities={abilities} setAbilities={setAbilities} />

        <hr style={{margin: '16px 8px'}}/>

        {/* スキル */}
        <SkillsForm skills={skills} setSkills={setSkills} />
      </Main>
    </Wrapper>
  );
};
export default UnitStatComponent;
