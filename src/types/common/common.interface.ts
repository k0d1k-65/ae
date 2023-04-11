/** ユニット基本データ */
interface IUnit {
  /** ユニットのステータス */
  unitStat: IUnitStat;
  /** スキル */
  skills: Array<ISkill>;
}

/** ユニット基礎ステータス */
interface IUnitStat {
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
}

/** スキル */
interface ISkill {
  /** スキル名 */
  skillName: string;
  /** 消費MP */
  mpCost: number;
  /** スキル詳細原文 */
  detail: string;
  /** スキル枠 */
  skillGrade: typeof SkillGradeType;
  /** ダメージソース */
  damageSources: Array<IDamageSource>;
  /** 特殊効果 */
  effects: Array<IEffect>;
};
const SkillGradeType: Record<string, {value: string, label: string}> = {

} as const;
/** ダメージソース */
interface IDamageSource {
  /** 威力 */
  power: number;
  /** 攻撃対象 */
  target: typeof TargetType;
  /** 属性 */
  elementType: typeof ElementType;
  /** 攻撃種別 */
  attackType: typeof AttackType;
  /** 多段数 */
  hitCount: number;
  /** ダメージ補正効果 */
  damageModifiers: Array<{
    /** ダメージ補正種別 */
    modifierType: typeof DamageModifierType;
    /** 補正値 */
    value: number;
  }>;
}
const TargetType: Record<string, {value: string, label: string}> = {

} as const;
const ElementType: Record<string, {value: string, label: string}> = {
  ALL: { value: 'all', label: "全", },
  NONE: { value: 'none', label: "無", },
  FIRE: { value: 'fire', label: "火", },
  WATER: { value: 'water', label: "水", },
  WIND: { value: 'wind', label: "風", },
  EARTH: { value: 'earth', label: "地", },
  THUNDER: { value: 'thunder', label: "雷", },
  DARK: { value: 'yin', label: "陰", },
  CRYSTAL: { value: 'crystal', label: "晶", },
} as const;
const AttackType: Record<string, {value: string, label: string}> = {
  SLASH: { value: 'slash', label: "斬", },
  STAB: { value: 'stab', label: "突", },
  STRIKE: { value: 'strike', label: "打", },
  MAGICAL: { value: 'magical', label: "魔", },
} as const;
const DamageModifierType: Record<string, {value: string, label: string}> = {

} as const;
interface IEffect {
  /** 攻撃対象 */
  target: typeof TargetType;
  /** 特殊効果種別 */
  effectType: typeof EffectType;
  /** 補正値 */
  value: number;
  /** 継続ターン */
  turn: number;
  /** 成功率 */
  successRate: number;
  /** 敵の耐性無視 */
  ignoreEnemyResistance: boolean;
}
const DamageEffectType = {

} as const;
const ResistEffectType = {

} as const;
const DisturbEffectType = {

} as const;
const SupportEffectType = {

} as const;
const EffectType: Record<string, {value: string, label: string}> = {
  ...DamageEffectType,
  ...ResistEffectType,
  ...DisturbEffectType,
  ...SupportEffectType,
} as const;





/** バトル */
export interface IBattle {
  /** フィールド */
  field: IField;
  /** ユニット */
  units: Array<IUnitInBattle>;
  /** 敵 */
  enemies: Array<IEnemy>;
}

/** フィールド */
interface IField {
  /** 環境 */
  environment: typeof EnvironmentType;
  /** zone */
  zone: typeof ZoneType;
}
/** 環境 */
const EnvironmentType: Record<string, {value: string, label: string}> = {
  SMOG: { value: 'smog', label: "スモッグ" },
  TOXIC_SMOG: { value: 'toxic_smog', label: "強毒性スモッグ" },
  FOG: { value: 'fog', label: "霧" },
  HYPNOTIC_FOG: { value: 'hypnotic_fog', label: "幻惑の霧" },
  GUST: { value: 'gust', label: "突風" },
  STRONG_GUST: { value: 'strong_gust', label: "大烈風", },
  OIL: { value: 'oil', label: "オイル" },
  CONCENTRATED_OIL: { value: 'concentrated_oil', label: "濃縮オイル" },
  PEACEFUL_SPORES: { value: 'peaceful_spores', label: "安らぎの胞子" },
  SLEEPY_SPORES: { value: 'sleepy_spores', label: "誘眠の胞子", },
  BLAZING_SUN: { value: 'blazing_sun', label: "かんかん照り" },
  HEATWAVE: { value: 'heatwave', label: "極大熱波" },
  RAIN: { value: 'rain', label: "雨" },
  FREEZING_TEMPERATURE: { value: 'freezing_temperature', label: "氷点下" },
  DIAMOND_DUST: { value: 'diamond_dust', label: "ダイヤモンドダスト" },
  THUNDERSTORM: { value: 'thunderstorm', label: "雷雨" },
  HEAVY_RAIN: { value: 'heavy_rain', label: "豪雨", },
  TIME_WARP: { value: 'time_warp', label: "時の乱れ" },
  CHAOTIC_FLOW: { value: 'chaotic_flow', label: "乱時流" },
  RAINBOW: { value: 'rainbow', label: "虹" },
} as const;
/** ZONE */
const ZoneType: Record<string, {value: string, label: string}> = {
  ZONE_FIRE: { value: "zone_fire", label: "烈火陣" },
  ZONE_WATER: { value: "zone_water", label: "水天陣" },
  ZONE_WIND: { value: "zone_wind", label: "風王陣" },
  ZONE_EARTH: { value: "zone_earth", label: "地烈陣" },
  ZONE_THUNDER: { value: "zone_thunder", label: "招雷陣" },
  ZONE_DARK: { value: "zone_dark", label: "刻陰陣" },
  ZONE_CRYSTAL: { value: "zone_light", label: "輝晶陣" },
  ZONE_SLASH: { value: "zone_slash", label: "煌斬陣" },
  ZONE_STAB: { value: "zone_stab", label: "瞬突陣" },
  ZONE_STRIKE: { value: "zone_strike", label: "轟打陣" },
  ZONE_MAGICAL: { value: "zone_magical", label: "幻魔陣" },
  ZONE_FLASH: { value: "zone_flash", label: "閃撃陣" },
  ZONE_SLASH_STAB: { value: "zone_slash_stab", label: "双撃陣・斬魔" },
  ZONE_STAR: { value: "zone_star", label: "星海陣" },
  ZONE_MOON: { value: "zone_moon", label: "月光陣" },
  ZONE_DEFENSE: { value: "zone_defense", label: "堅守陣" },
} as const;

/** 戦闘中のユニット */
interface IUnitInBattle extends IUnit {
  /** ユニットが装備するアイテム */
  equipment: IUnitEquipment;
  /** ユニットのステータス変化効果 */
  effects: Array<IEffect>;
}
/** ユニット装備 */
interface IUnitEquipment {
  /** 武器 */
  weapon: IWeapon;
  /** 防具 */
  armor: IArmor;
  /** バッジ */
  badge: Array<IBadge>;
  /** グラスタ */
  grasta: Array<IGrasta>;
}
interface IWeapon {

}
interface IArmor {

}
interface IBadge {

}
interface IGrasta {

}

interface IEnemy {
  /** 敵のステータス */
  enemyStat: IUnitStat;
  /** 敵のステータス変化効果 */
  effects: Array<IEffect>;
}
