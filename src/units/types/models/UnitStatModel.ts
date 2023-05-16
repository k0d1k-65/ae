import { UnitStat } from "../common/UnitStat";

export class UnitStatModel {
  /** HP */
  hp: number;
  /** MP */
  mp: number;
  /** 攻撃 */
  atk: number;
  /** 防御 */
  def: number;
  /** 魔力 */
  matk: number;
  /** 魔防 */
  mdef: number;
  /** 腕力 */
  power: number;
  /** 耐久 */
  endure: number;
  /** 幸運 */
  luck: number;
  /** 知性 */
  intelligence: number;
  /** 精神 */
  split: number;
  /** 速度 */
  speed: number;

  constructor(props?: Partial<UnitStat>) {
    this.hp = props?.hp || 0;
    this.mp = props?.mp || 0;
    this.atk = props?.atk || 0;
    this.def = props?.def || 0;
    this.matk = props?.matk || 0;
    this.mdef = props?.mdef || 0;
    this.power = props?.power || 0;
    this.endure = props?.endure || 0;
    this.luck = props?.luck || 0;
    this.intelligence = props?.intelligence || 0;
    this.split = props?.split || 0;
    this.speed = props?.speed || 0;
  }

  integrateStats(arg: UnitStat) {
    this.hp += arg.hp;
    this.mp += arg.mp;
    this.power += arg.power;
    this.endure += arg.endure;
    this.luck += arg.luck;
    this.intelligence += arg.intelligence;
    this.split += arg.split;
    this.speed += arg.speed;

    this.atk += arg.power + arg.atk;
    this.def += arg.endure + arg.def;
    this.matk += arg.intelligence + arg.matk;
    this.mdef += arg.split + arg.mdef;
  }
}
