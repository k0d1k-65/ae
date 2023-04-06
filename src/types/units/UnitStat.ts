type _unitStat = {
  hp?: number,
  mp?: number,
  atk?: number,
  def?: number,
  matk?: number,
  mdef?: number,
  power?: number,
  endure?: number,
  luck?: number,
  intelligence?: number,
  split?: number,
  speed?: number,
};

export class UnitStat {
  hp: number;
  mp: number;
  atk: number;
  def: number;
  matk: number;
  mdef: number;
  power: number;
  endure: number;
  luck: number;
  intelligence: number;
  split: number;
  speed: number;

  constructor (props?: _unitStat) {
    this.hp = props ? props.hp || 0 : 0;
    this.mp = props ? props.mp || 0 : 0;
    this.atk = props ? props.atk || 0 : 0;
    this.def = props ? props.def || 0 : 0;
    this.matk = props ? props.matk || 0 : 0;
    this.mdef = props ? props.mdef || 0 : 0;
    this.power = props ? props.power || 0 : 0;
    this.endure = props ? props.endure || 0 : 0;
    this.luck = props ? props.luck || 0 : 0;
    this.intelligence = props ? props.intelligence || 0 : 0;
    this.split = props ? props.split || 0 : 0;
    this.speed = props ? props.speed || 0 : 0;
  }

  integrateStats (arg: UnitStat) {
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
};