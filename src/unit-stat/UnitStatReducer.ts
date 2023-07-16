import { WeaponType } from "../common/constants/WeaponType";
import { StyleType } from "../common/constants/StyleType";
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
      type: "updateStatBonus";
      key: keyof IUnitStatModel;
      subKey: keyof IStatBonus;
      value: IStatBonus[keyof IStatBonus];
    }
  | {
      type: "replace";
      newItem: IUnitStatModel;
    };

export const initUnitStat = (current?: IUnitStatModel): IUnitStatModel => {
  /** パーソナリティ 初期値 */
  const initPersonality: IUnitPersonalities = unitPersonalities(current);

  /** ステータス 初期値 */
  const initStat: IUnitStats = unitStats(current);

  /** アビリティ 初期値 */
  const initAbility: IUnitAbilities = unitAbilities(current);

  /** スキル 初期値 */
  const initSkill: IUnitSkills = unitSkills(current);

  return {
    ...initPersonality,
    ...initStat,
    ...initAbility,
    ...initSkill,
  };
};

const unitStyleBoardBonus = (current?: IStatBonus | null): IStatBonus => {
  return {
    statType: current?.statType || null,
    statAmount: current?.statAmount || null,
    operator: current?.operator || null,
  };
};

const unitPersonalities = (current?: IUnitPersonalities): IUnitPersonalities => {
  return {
    unitName: current?.unitName || "",
    weapon: current?.weapon || WeaponType.Lod,
    personalities: current?.personalities || [],
    unitTrueName: current?.unitTrueName || null,
    styleBoardBonus: unitStyleBoardBonus(current?.styleBoardBonus),
  };
};

const unitStats = (current?: IUnitStats): IUnitStats => {
  return {
    className: current?.className || null,
    style: current?.style || StyleType.NS,
    statHp: current?.statHp || null,
    statMp: current?.statMp || null,
    lightShadow: current?.lightShadow || null,
    lightShadowNumber: current?.lightShadowNumber || null,
    statPower: current?.statPower || null,
    statEndure: current?.statEndure || null,
    statLuck: current?.statLuck || null,
    statIntelligense: current?.statIntelligense || null,
    statSpeed: current?.statSpeed || null,
    statSplit: current?.statSplit || null,
    ls_5: unitStyleBoardBonus(current?.ls_5),
    ls_15: unitStyleBoardBonus(current?.ls_15),
    ls_30: unitStyleBoardBonus(current?.ls_30),
    ls_50: unitStyleBoardBonus(current?.ls_50),
    ls_75: unitStyleBoardBonus(current?.ls_75),
    ls_105: unitStyleBoardBonus(current?.ls_105),
    ls_140: unitStyleBoardBonus(current?.ls_140),
    ls_175: unitStyleBoardBonus(current?.ls_175),
    ls_215: unitStyleBoardBonus(current?.ls_215),
    ls_255: unitStyleBoardBonus(current?.ls_255),
  };
};

const unitAbilities = (current?: IUnitAbilities): IUnitAbilities => {
  return {
    variablechantName: current?.variablechantName || null,
    variablechantDetail: current?.variablechantDetail || null,
    variablechantEnhancedDetail: current?.variablechantEnhancedDetail || null,
    extraSpecialMoveName: current?.extraSpecialMoveName || null,
    extraSpecialMoveDetail: current?.extraSpecialMoveDetail || null,
    anotherSenceName: current?.anotherSenceName || null,
    anotherSenceDetail: current?.anotherSenceDetail || null,
    abilities: current?.abilities || [],
  };
};

const unitSkillProps = (current?: ISkillProperty | null): ISkillProperty => {
  return {
    name: current?.name || null,
    mp: current?.mp || null,
    detail: current?.detail || null,
  };
};

const unitSkills = (current?: IUnitSkills): IUnitSkills => {
  return {
    extra: unitSkillProps(current?.extra),
    first: unitSkillProps(current?.first),
    second: unitSkillProps(current?.second),
    thirdA: unitSkillProps(current?.thirdA),
    thirdB: unitSkillProps(current?.thirdB),
    fourthA: unitSkillProps(current?.fourthA),
    fourthB: unitSkillProps(current?.fourthB),
    fifthA: unitSkillProps(current?.fifthA),
    fifthB: unitSkillProps(current?.fifthB),
  };
};

const reduceUnitStat = (state: IUnitStatModel, action: ActionType): IUnitStatModel => {
  switch (action.type) {
    // 更新
    case "update":
      if (!!action.value && !!state[action.key] && typeof action.value !== typeof state[action.key]) {
        console.log(`not match [${typeof action.value}] [${typeof state[action.key]}]`);
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

    // ボーナス枠フォーム（2階層）を更新
    case "updateStatBonus":
      const stat = state[action.key] as IStatBonus;
      const newBonus = {
        ...stat,
        [action.subKey]: action.value,
      };

      return {
        ...state,
        [action.key]: newBonus,
      };

    // まるっと置き換え
    case "replace":
      return initUnitStat(action.newItem);

    // 初期化
    case "clear":
      return initUnitStat();

    default:
      return state;
  }
};

export default reduceUnitStat;
