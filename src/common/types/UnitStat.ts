export type UnitStat = {
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

export function initUnitStat(): UnitStat {
  return {
    hp: 0,
    mp: 0,
    atk: 0,
    def: 0,
    matk: 0,
    mdef: 0,
    power: 0,
    endure: 0,
    luck: 0,
    intelligence: 0,
    split: 0,
    speed: 0,
  };
}