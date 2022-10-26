export const UnitStatType = {
  HP: "HP",
  MP: "MP",
  ATK: "ATK",
  DEF: "DEF",
  MATK: "MATK",
  MDEF: "MDEF",
  POWER: "POW",
  ENDURE: "END",
  LUCK: "LUC",
  INTELLIGENCE: "INT",
  SPLIT: "SPL",
  SPEED: "SPE",
} as const;

export type UnitStatType = typeof UnitStatType[keyof typeof UnitStatType];