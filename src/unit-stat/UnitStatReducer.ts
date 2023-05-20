import {
  IAbilitiesForm,
  IPersonalitiesForm,
  ISkillProperty,
  ISkillsForm,
  IStatsForm,
  IUnitForm,
} from "./types.interface";
import { WeaponType } from "../common/constants/WeaponType";
import { StyleType } from "../common/constants/StyleType";
import { LightShadowType } from "../common/constants/LightShadowType";

type ActionType =
  | {
      type: "update";
      key: keyof IUnitForm;
      value: IUnitForm[keyof IUnitForm];
    }
  | {
      type: "clear";
    }
  | {
      type: "updateSkill";
      key: keyof ISkillsForm;
      subKey: keyof ISkillProperty;
      value: IUnitForm[keyof IUnitForm];
    }
  | {
      type: "updateAll";
      newItem: IUnitForm;
    };

export const initUnitStat = (): IUnitForm => {
  /** パーソナリティ 初期値 */
  const initPersonality: IPersonalitiesForm = {
    unitName: "",
    weapon: WeaponType.All,
    personalities: [],
  };

  /** ステータス 初期値 */
  const initStat: IStatsForm = {
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
  };

  /** アビリティ 初期値 */
  const initAbility: IAbilitiesForm = {
    variablechantName: "",
    variablechantDetail: "",
    extraSpecialMoveName: "",
    extraSpecialMoveDetail: "",
    anotherSenceName: "",
    anotherSenceDetail: "",
    abilities: [],
  };

  /** スキル 初期値 */
  const initSkillProp: ISkillProperty = {
    name: "",
    mp: 0,
    detail: "",
  };

  const initSkill: ISkillsForm = {
    first: { ...initSkillProp },
    second: { ...initSkillProp },
    thirdA: { ...initSkillProp },
    thirdB: { ...initSkillProp },
    fourthA: { ...initSkillProp },
    fourthB: { ...initSkillProp },
    fifthA: { ...initSkillProp },
    fifthB: { ...initSkillProp },
  };

  return {
    ...initPersonality,
    ...initStat,
    ...initAbility,
    ...initSkill,
  };
};

const reduceUnitStat = (state: IUnitForm, action: ActionType): IUnitForm => {
  switch (action.type) {
    // 更新
    case "update":
      if (typeof action.value !== typeof state[action.key]) {
        return state;
      }

      return {
        ...state,
        [action.key]: action.value,
      };

    // スキルフォーム（2階層）を更新
    case "updateSkill":
      const skill = state[action.key] as ISkillProperty;
      const newSkill = {
        ...skill,
        [action.subKey]: action.value,
      };

      return {
        ...state,
        [action.key]: newSkill,
      };

    // まるっと置き換え
    case "updateAll":
      return action.newItem;

    // 初期化
    case "clear":
      return initUnitStat();

    default:
      return state;
  }
};

export default reduceUnitStat;
