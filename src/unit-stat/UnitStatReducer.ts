import { WeaponType } from "../common/constants/WeaponType";
import { StyleType } from "../common/constants/StyleType";
import { LightShadowType } from "../common/constants/LightShadowType";
import {
  ISkillProperty,
  IStatBonus,
  IUnitAbilities,
  IUnitPersonalities,
  IUnitSkills,
  IUnitStatModel,
  IUnitStats,
} from "../common/models/UnitModel";

type ActionType =
  | {
      type: "update";
      key: keyof IUnitStatModel;
      value: IUnitStatModel[keyof IUnitStatModel];
    }
  | {
      type: "clear";
    }
  | {
      type: "updateSkill";
      key: keyof IUnitSkills;
      subKey: keyof ISkillProperty;
      value: IUnitStatModel[keyof IUnitStatModel];
    }
  | {
      type: "updateAll";
      newItem: IUnitStatModel;
    };

export const initUnitStat = (): IUnitStatModel => {
  /** パーソナリティ 初期値 */
  const initPersonality: IUnitPersonalities = {
    unitName: "",
    weapon: WeaponType.All,
    personalities: [],
  };

  /** ステータス 初期値 */
  const initStat: IUnitStats = {
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
  const initAbility: IUnitAbilities = {
    variablechantName: "",
    variablechantDetail: "",
    variablechantEnhancedName: "",
    variablechantEnhancedDetail: "",
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

  const initSkill: IUnitSkills = {
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

const reduceUnitStat = (state: IUnitStatModel, action: ActionType): IUnitStatModel => {
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
