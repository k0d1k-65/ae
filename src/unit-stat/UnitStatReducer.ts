import {
  ISkillProperty,
  IStatBonus,
  IUnitSkills,
  IUnitStatModel,
} from "../common/models/UnitModel";
import { mapModelUnitStat } from "../common/services/UnitService";

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
      return mapModelUnitStat(action.newItem);

    // 初期化
    case "clear":
      return mapModelUnitStat();

    default:
      return state;
  }
};

export default reduceUnitStat;
