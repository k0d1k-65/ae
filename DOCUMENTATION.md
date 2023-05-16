<style>

@media (prefers-color-scheme: dark) {
  /* 背景色と文字色を変更 */
  *, body {
    background-color: #1a1a1a;
    color: #fff;
  }

  /* リンクの色を変更 */
  a {
    color: #b2d6ff;
  }

  /* 見出しの色を変更 */
  h1, h2, h3, h4, h5, h6 {
    color: #fff !important;
  }

  /* コードブロックの背景色と文字色を変更 */
  pre, code {
    background-color: #4448 !important;
    color: #f8f8f2 !important;
  }
  pre *, code * {
    background-color: #8888 !important;
  }

  /* ボックスの影を調整 */
  .box {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  /* テーブルの背景色を変更 */
  table {
    background-color: #1a1a1a;
  }
  th {
    background-color: #333;
    color: #f8f8f2 !important;
  }

  /* フォームの背景色とボーダーを変更 */
  input[type="text"], input[type="password"], select, textarea {
    background-color: #333;
    border-color: #666;
  }

  /* 引用の背景色とボーダーを変更 */
  blockquote {
    background-color: #333;
    border-left: 5px solid #b2d6ff;
  }

  /* リストアイテムのマーカーの色を変更 */
  ul, ol {
    color: #b2d6ff;
  }

  strong {
    color: #fff !important;
  }
}
</style>

## データ設計

| 名称 | 説明 | プロパティ |
| --- | --- | --- |
| **IUnit** | ユニット基本データ | unitStat<br>skills[] |
| _ **IUnitStat** | ユニット基礎ステータス | ... |
| _ **ISkill** | スキル | skillName<br>mpCost<br>detail<br>skillGrade<br>damageSources[]<br>effects[] |
| _ _ **_SkillGradeType_** | スキル枠 | ... |
| _ _ **IDamageSource** | ダメージソース | power<br>target<br>elementType<br>attackType<br>hitCount<br>damageModifiers[] |
| _ _ _ **_TargetType_** | 攻撃対象 | ... |
| _ _ _ **_ElementType_** | 属性 | ... |
| _ _ _ **_AttackType_** | 攻撃種別 | ... |
| _ _ _ _ **_DamageModifierType_** | ダメージ補正種別 | ... |
| _ _ **IEffect** | 特殊効果 | target<br>effectType<br>value<br>turn<br>successRate<br>ignoreEnemyResistance |
| _ _ _ **_EffectType_** | 特殊効果種別 | DamageEffect<br>& ResistEffect<br>& DisturbEffect<br>& SupportEffect |
| **IBattle** | バトル | field<br>units[]<br>enemies[] |
| _ **IField** | フィールド | environment<br>zone |
| _ _ **_EnvironmentType_** | 環境 | ... |
| _ _ **_ZoneType_** | zone | ... |
| _ **IUnitInBattle** | ユニット | ex IUnit<br>equipment<br>effects[] |
| _ _ **IUnitEquipment** | ユニットが装備するアイテム | weapon<br>armor<br>badges[]<br>grastas[] |
| _ _ _ **IWeapon** | 武器 | weaponType<br>weaponName<br>exclusiveTo[]<br>stat<br>specialStat<br>skills[]<br>effects[] |
| _ _ _ _ **_WeaponType_** | 武器種別 | ... |
| _ _ _ **IArmor** | 防具 | armorType<br>armorName<br>exclusiveTo[]<br>stat<br>specialStats[]<br>skills[]<br>effects[] |
| _ _ _ _ **_ArmorType_** | 防具種別 | ... |
| _ _ _ **IBadge** | バッジ | badgeType<br>badgeName<br>exclusiveTo[]<br>stat<br>specialStats[]<br>skills[]<br>effects[] |
| _ _ _ _ **_BadgeType_** | バッジ種別 | ... |
| _ _ _ **IGrasta** | グラスタ | grastaType<br>grastaName<br>exclusiveTo[]<br>stat<br>specialStats[]<br>skills[]<br>effects[] |
| _ _ _ _ **_GrastaType_** | グラスタ種別 | ... |
| _ **IEnemy** | 敵 | enemyStat<br>effects[] |

### 状態効果

| 状態 | ダメージ | 被ダメージ | 妨害 | サポート |
| --- | --- | --- | --- | --- |
| 攻撃力 | x |  |  |  |
| 魔法攻撃力 | x |  |  |  |
| 速度 |  |  |  | x |
| 精神 |  |  |  | x |
| 幸運 |  |  |  | x |
| 物理クリティカル率 |  |  |  | x |
| 物理クリティカル攻撃力 | x |  |  |  |
| 魔法クリティカル率 |  |  |  | x |
| 魔法クリティカル攻撃力 | x |  |  |  |
| 斬撃耐性 |  | x |  |  |
| 突撃耐性 |  | x |  |  |
| 打撃耐性 |  | x |  |  |
| 物理耐性 |  | x |  |  |
| 魔法耐性 |  | x |  |  |
| 成長ダメージUP | x |  |  |  |
| 成長被ダメージDOWN |  | x |  |  |
| HP最大値 |  |  |  | x |
| MP最大値 |  |  |  | x |
| 物理クリティカル率(アビリティ) |  |  |  | x |
| 魔法クリティカル率(アビリティ) |  |  |  | x |
| 全ステータスアップ(アビリティ) |  |  |  | x |
| 弱点攻撃アップ | x |  |  |  |
| 状態効果ターン延長 |  |  |  | x |
| 杖装備ダメージUP | x |  |  |  |
| 剣装備ダメージUP | x |  |  |  |
| 刀装備ダメージUP | x |  |  |  |
| 斧装備ダメージUP | x |  |  |  |
| 槍装備ダメージUP | x |  |  |  |
| 弓装備ダメージUP | x |  |  |  |
| 拳装備ダメージUP | x |  |  |  |
| 槌装備ダメージUP | x |  |  |  |
| バフ・デバフ効果量増加 |  |  |  | x |
| 全属性攻撃 | x |  |  |  |
| 火属性攻撃 | x |  |  |  |
| 水属性攻撃 | x |  |  |  |
| 風属性攻撃 | x |  |  |  |
| 地属性攻撃 | x |  |  |  |
| 無属性攻撃 | x |  |  |  |
| 雷属性攻撃 | x |  |  |  |
| 陰属性攻撃 | x |  |  |  |
| 晶属性攻撃 | x |  |  |  |
| 全属性耐性 |  | x |  |  |
| 火属性耐性 |  | x |  |  |
| 水属性耐性 |  | x |  |  |
| 風属性耐性 |  | x |  |  |
| 地属性耐性 |  | x |  |  |
| 雷属性耐性 |  | x |  |  |
| 陰属性耐性 |  | x |  |  |
| 晶属性耐性 |  | x |
| 毒 |  |  | x |  |
| ペイン |  |  | x |  |
| 挑発 |  |  | x |  |
| 睡眠 |  |  | x |  |
| 封印 |  |  | x |  |
| 気絶 |  |  | x |  |
| 混乱 |  |  | x |  |
| 石化 |  |  | x |  |
| 暗闇 |  |  | x |  |
| あべこべ |  |  | x |  |
| 迎撃 |  |  |  | x |
| HP治癒 |  |  |  | x |
| MP治癒 |  |  |  | x |
| 状態効果無効 |  |  |  | x |
| チャージ |  |  |  | x |
| 踏ん張る |  |  |  | x |
| 消費MP軽減 |  |  |  | x |
| バリア |  | x |  |  |
| 多段強化 | x |  |  |  |
| 呪縛 |  |  | x |  |
| ブレイク |  | x |  |  |
| 守護 |  |  |  | x |
| 凍結 |  |  | x |  |
| ゲス |  |  | x |  |
| 感電 |  |  | x |  |
| モードチェンジ |  |  |  | x |
| 歌唱 |  |  |  | x |
| シールド |  | x |  |  |
| AZターン延長 |  |  |  | x |
| AFゲージ増加量UP |  |  |  | x |
| 精神統一 | x |  |  |  |
| 虎視眈々 | x |  |  |  |
| 下剋上 | x |  |  |  |
| 吹き飛ばし無効 |  |  |  | x |
| 庇立て |  | x |  |  |
| クリティカルガード |  | x |  |  |
| 祈祷 |  |  |  | x |
| MPガード |  | x |  |  |
| 変幻自在(火) | x |  |  |  |
| 変幻自在(水) | x |  |  |  |
| 変幻自在(風) | x |  |  |  |
| 変幻自在(地) | x |  |  |  |
| 変幻自在(雷) | x |  |  |  |
| 変幻自在(陰) | x |  |  |  |
| 変幻自在(晶) | x |  |  |  |
| 変幻自在(斬) | x |  |  |  |
| 変幻自在(突) | x |  |  |  |
| 変幻自在(打) | x |  |  |  |
| 変幻自在(魔) | x |  |  |  |
| エレメンタルブレイク(火) |  | x |  |  |
| エレメンタルブレイク(水) |  | x |  |  |
| エレメンタルブレイク(風) |  | x |  |  |
| エレメンタルブレイク(地) |  | x |  |  |
| エレメンタルブレイク(晶) |  | x |  |  |
| エレメンタルブレイク(陰) |  | x |  |  |
| エレメンタルブレイク(雷) |  | x |  |  |
| エレメンタルブレイク(斬) |  | x |  |  |
| エレメンタルブレイク(突) |  | x |  |  |
| エレメンタルブレイク(打) |  | x |  |  |
| エレメンタルブレイク(魔) |  | x |

### バトルシステムに関する情報の表

```typescript

/** バトル */
interface IBattle {
  /** フィールド */
  field: IField;
  /** ユニット */
  unit: Array<IUnit>;
  /** 敵 */
  enemy: Array<IEnemy>;
}

interface IField {
  /** 環境 */
  environment: EnvironmentType;
  /** zone */
  zone: ZoneType;
}

interface IUnit {
  /** ユニットのステータス */
  unitStat: IUnitStat;
  /** ユニットが装備するアイテム */
  equipment: IUnitEquipment;
  /** ユニットのステータス変化効果 */
  effect: Array<IStatusModifiers>;
  /** スキル */
  skill: ISkill;
  /** 状態異常 */
  statusAilments: Array<StatusAilmentType>;
}

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

interface IEnemy {
  /** 敵のステータス */
  enemyStat: IUnitStat;
  /** 敵のステータス変化効果 */
  effect: Array<IStatusModifiers>;
  /** 状態異常 */
  statusAilments: Array<StatusAilmentType>;
}

```

### ユニットテーブル

```typescript

interface IUnit {
  /** ユニットのステータス */
  unitStat: IUnitStat;
  /** ユニットのステータス変化効果 */
  effect: Array<IStatusModifiers>;
  /** スキル */
  skill: ISkill;
  /** 状態異常 */
  statusAilments: Array<StatusAilmentType>;
}

```

### スキルテーブル

```typescript

interface ISkill {
  /** スキル名 */
  skillName: string;
  /** 消費MP */
  mpCost: number;
  /** スキル詳細原文 */
  detail: string;
  /** ダメージソース */
  damageSources: Array<IDamageSource>;
};

interface IDamageSource {
  /** 威力 */
  power: number;
  /** 攻撃対象 */
  target: TargetType;
  /** 属性 */
  elementType: ElementType;
  /** 攻撃種別 */
  attackType: AttackType;
  /** 多段数 */
  hitCount: number;
  /** ダメージ補正効果 */
  damageModifiers: Array<{
    /** ダメージ補正種別 */
    modifierType: DamageModifierType;
    /** 補正値 */
    value: number;
  }>;
}

interface IStatusModifiers {
  /** 効果対象 */
  target: TargetType;
  /** 状態異常付与 */
  statusAilments: Array<{
    /** 状態異常種別 */
    ailmentType: StatusAilmentType;
    /** 成功率 */
    successRate: number;
    /** 敵の耐性無視 */
    ignoreEnemyResistance: boolean;
  }>;
  /** ユニットのステータス変化効果 */
  unitStatModifiers: Array<{
    /** ダメージ補正種別 */
    modifierType: UnitStatModifierType;
    /** 補正値 */
    value: number;
  }>;
}

enum UnitStatModifierType {
  ATTACK_POWER = 0,
  MAGIC_ATTACK_POWER = 1,
  SPEED = 2,
  SPIRIT = 3,
  LUCK = 4,
  PHYSICAL_CRITICAL_RATE = 5,
  PHYSICAL_CRITICAL_ATTACK_POWER = 6,
  MAGICAL_CRITICAL_RATE = 7,
  MAGICAL_CRITICAL_ATTACK_POWER = 8,
  SLASH_RESISTANCE = 9,
  STAB_RESISTANCE = 10,
  STRIKE_RESISTANCE = 11,
  MAGICAL_RESISTANCE = 12,
  DAMAGE_UP_GROWTH = 13,
  DAMAGE_DOWN_GROWTH = 14,
  MAX_HP = 15,
  MAX_MP = 16,
  PHYSICAL_CRITICAL_DAMAGE = 17,
  MAGICAL_CRITICAL_DAMAGE = 18,
  SLASH_RESISTANCE = 19,
  STAB_RESISTANCE = 20,
  STRIKE_RESISTANCE = 21,
  MAGICAL_RESISTANCE = 22,
  GROWTH_DAMAGE_UP = 23,
  GROWTH_DAMAGE_DOWN = 24,
  MAX_HP = 25,
  MAX_MP = 26,
  PHYSICAL_CRITICAL_RATE_ABILITY = 27,
  MAGICAL_CRITICAL_RATE_ABILITY = 28,
  ALL_STATS_UP_ABILITY = 29,
  WEAKNESS_ATTACK_UP = 30,
  STATUS_EFFECT_DURATION_UP = 31,
  STAFF_DAMAGE_UP = 32,
  SWORD_DAMAGE_UP = 33,
  KATANA_DAMAGE_UP = 34,
  AXE_DAMAGE_UP = 35,
  SPEAR_DAMAGE_UP = 36,
  BOW_DAMAGE_UP = 37,
  FIST_DAMAGE_UP = 38,
  HAMMER_DAMAGE_UP = 39,
  BUFF_DEBUFF_EFFECT_INCREASE = 40,
  ALL_ELEMENT_ATTACK = 41,
  FIRE_ELEMENT_ATTACK = 42,
  WATER_ELEMENT_ATTACK = 43,
  WIND_ELEMENT_ATTACK = 44,
  EARTH_ELEMENT_ATTACK = 45,
  NON_ELEMENTAL_ATTACK = 46,
  THUNDER_ELEMENT_ATTACK = 47,
  DARK_ELEMENT_ATTACK = 48,
  CRYSTAL_ELEMENT_ATTACK = 49,
  ALL_ELEMENT_RESISTANCE = 50,
  FIRE_ELEMENT_RESISTANCE = 51,
  WATER_ELEMENT_RESISTANCE = 52,
  WIND_ELEMENT_RESISTANCE = 53,
  EARTH_ELEMENT_RESISTANCE = 54,
  THUNDER_ELEMENT_RESISTANCE = 55,
  DARK_ELEMENT_RESISTANCE = 56,
  CRYSTAL_ELEMENT_RESISTANCE = 57,
}

const UnitStatModifierTypeLabels: Record<UnitStatModifierType, string> = {
  [UnitStatModifierType.ATTACK_POWER]: "攻撃力",
  [UnitStatModifierType.MAGIC_ATTACK_POWER]: "魔法攻撃力",
  [UnitStatModifierType.SPEED]: "速度",
  [UnitStatModifierType.SPIRIT]: "精神",
  [UnitStatModifierType.LUCK]: "幸運",
  [UnitStatModifierType.PHYSICAL_CRITICAL_RATE]: "物理クリティカル率",
  [UnitStatModifierType.PHYSICAL_CRITICAL_ATTACK_POWER]: "物理クリティカル攻撃力",
  [UnitStatModifierType.MAGICAL_CRITICAL_RATE]: "魔法クリティカル率",
  [UnitStatModifierType.MAGICAL_CRITICAL_ATTACK_POWER]: "魔法クリティカル攻撃力",
  [UnitStatModifierType.SLASH_RESISTANCE]: "斬撃耐性",
  [UnitStatModifierType.STAB_RESISTANCE]: "突撃耐性",
  [UnitStatModifierType.STRIKE_RESISTANCE]: "打撃耐性",
  [UnitStatModifierType.MAGICAL_RESISTANCE]: "魔法耐性",
  [UnitStatModifierType.DAMAGE_UP_GROWTH]: "成長ダメージUP",
  [UnitStatModifierType.DAMAGE_DOWN_GROWTH]: "成長被ダメージDOWN",
  [UnitStatModifierType.MAX_HP]: "HP最大値",
  [UnitStatModifierType.MAX_MP]: "MP最大値",
  [UnitStatModifierType.PHYSICAL_CRITICAL_DAMAGE]: "物理クリティカルダメージ",
  [UnitStatModifierType.MAGICAL_CRITICAL_DAMAGE]: "魔法クリティカルダメージ",
  [UnitStatModifierType.SLASH_RESISTANCE]: "斬撃耐性",
  [UnitStatModifierType.STAB_RESISTANCE]: "突撃耐性",
  [UnitStatModifierType.STRIKE_RESISTANCE]: "打撃耐性",
  [UnitStatModifierType.MAGICAL_RESISTANCE]: "魔法耐性",
  [UnitStatModifierType.GROWTH_DAMAGE_UP]: "成長ダメージUP",
  [UnitStatModifierType.GROWTH_DAMAGE_DOWN]: "成長被ダメージDOWN",
  [UnitStatModifierType.MAX_HP]: "HP最大値",
  [UnitStatModifierType.MAX_MP]: "MP最大値",
  [UnitStatModifierType.PHYSICAL_CRITICAL_RATE_ABILITY]: "物理クリティカル率(アビリティ)",
  [UnitStatModifierType.MAGICAL_CRITICAL_RATE_ABILITY]: "魔法クリティカル率(アビリティ)",
  [UnitStatModifierType.ALL_STATS_UP_ABILITY]: "全ステータスアップ(アビリティ)",
  [UnitStatModifierType.WEAKNESS_ATTACK_UP]: "弱点攻撃アップ",
  [UnitStatModifierType.STATUS_EFFECT_DURATION_UP]: "状態効果ターン延長",
  [UnitStatModifierType.STAFF_DAMAGE_UP]: "杖装備ダメージUP",
  [UnitStatModifierType.SWORD_DAMAGE_UP]: "剣装備ダメージUP",
  [UnitStatModifierType.KATANA_DAMAGE_UP]: "刀装備ダメージUP",
  [UnitStatModifierType.AXE_DAMAGE_UP]: "斧装備ダメージUP",
  [UnitStatModifierType.SPEAR_DAMAGE_UP]: "槍装備ダメージUP",
  [UnitStatModifierType.BOW_DAMAGE_UP]: "弓装備ダメージUP",
  [UnitStatModifierType.FIST_DAMAGE_UP]: "拳装備ダメージUP",
  [UnitStatModifierType.HAMMER_DAMAGE_UP]: "槌装備ダメージUP",
  [UnitStatModifierType.BUFF_DEBUFF_EFFECT_INCREASE]: "バフ・デバフ効果量増加",
  [UnitStatModifierType.ALL_ELEMENT_ATTACK]: "全属性攻撃",
  [UnitStatModifierType.FIRE_ELEMENT_ATTACK]: "火属性攻撃",
  [UnitStatModifierType.WATER_ELEMENT_ATTACK]: "水属性攻撃",
  [UnitStatModifierType.WIND_ELEMENT_ATTACK]: "風属性攻撃",
  [UnitStatModifierType.EARTH_ELEMENT_ATTACK]: "地属性攻撃",
  [UnitStatModifierType.NON_ELEMENTAL_ATTACK]: "無属性攻撃",
  [UnitStatModifierType.THUNDER_ELEMENT_ATTACK]: "雷属性攻撃",
  [UnitStatModifierType.DARK_ELEMENT_ATTACK]: "陰属性攻撃",
  [UnitStatModifierType.CRYSTAL_ELEMENT_ATTACK]: "晶属性攻撃",
  [UnitStatModifierType.ALL_ELEMENT_RESISTANCE]: "全属性耐性",
  [UnitStatModifierType.FIRE_ELEMENT_RESISTANCE]: "火属性耐性",
  [UnitStatModifierType.WATER_ELEMENT_RESISTANCE]: "水属性耐性",
  [UnitStatModifierType.WIND_ELEMENT_RESISTANCE]: "風属性耐性",
  [UnitStatModifierType.EARTH_ELEMENT_RESISTANCE]: "地属性耐性",
  [UnitStatModifierType.THUNDER_ELEMENT_RESISTANCE]: "雷属性耐性",
  [UnitStatModifierType.DARK_ELEMENT_RESISTANCE]: "陰属性耐性",
  [UnitStatModifierType.CRYSTAL_ELEMENT_RESISTANCE]: "晶属性耐性",
};

enum StatusAilmentType {
  POISON = 0,
  PAIN = 1,
  PROVOKE = 2,
  SLEEP = 3,
  SEAL = 4,
  STUN = 5,
  CONFUSION = 6,
  PETRIFY = 7,
  BLIND = 8,
  REVERSE = 9,
  INTERCEPT = 10,
  HEAL_HP = 11,
  HEAL_MP = 12,
  NULLIFY_STATUS_EFFECT = 13,
  CHARGE = 14,
  BRACE = 15,
  REDUCE_MP_COST = 16,
  BARRIER = 17,
  MULTI_BOOST = 18,
  CURSE = 19,
  BREAK = 20,
  PROTECT = 21,
  FREEZE = 22,
  NAUSEA = 23,
  SHOCK = 24,
  MODE_CHANGE = 25,
  SING = 26,
  SHIELD = 27,
  EXTEND_AZ_TURN = 28,
  INCREASE_AF_GAUGE = 29,
  MENTAL_UNITY = 30,
  AMBITION = 31,
  REBELLION = 32,
  ANTI_KNOCKBACK = 33,
  COVER = 34,
  CRITICAL_GUARD = 35,
  PRAYER = 36,
  MP_GAURD = 37,
  SHAPESHIFT_FIRE = 38,
  SHAPESHIFT_WATER = 39,
  SHAPESHIFT_WIND = 40,
  SHAPESHIFT_EARTH = 41,
  SHAPESHIFT_THUNDER = 42,
  SHAPESHIFT_DARK = 43,
  SHAPESHIFT_CRYSTAL = 44,
  SHAPESHIFT_SLASH = 45,
  SHAPESHIFT_STAB = 46,
  SHAPESHIFT_STRIKE = 47,
  SHAPESHIFT_MAGICAL = 48,
  ELEMENTAL_BREAK_FIRE = 49,
  ELEMENTAL_BREAK_WATER = 50,
  ELEMENTAL_BREAK_WIND = 51,
  ELEMENTAL_BREAK_EARTH = 52,
  ELEMENTAL_BREAK_THUNDER = 53,
  ELEMENTAL_BREAK_DARK = 54,
  ELEMENTAL_BREAK_CRYSTAL = 55,
  ELEMENTAL_BREAK_SLASH = 56,
  ELEMENTAL_BREAK_STAB = 57,
  ELEMENTAL_BREAK_STRIKE = 58,
  ELEMENTAL_BREAK_MAGICAL = 59,
}

const StatusAilmentTypeLabels: Record<StatusAilmentType, string> = {
  [StatusAilmentType.POISON]: "毒",
  [StatusAilmentType.PAIN]: "ペイン",
  [StatusAilmentType.PROVOKE]: "挑発",
  [StatusAilmentType.SLEEP]: "睡眠",
  [StatusAilmentType.SEAL]: "封印",
  [StatusAilmentType.STUN]: "気絶",
  [StatusAilmentType.CONFUSION]: "混乱",
  [StatusAilmentType.PETRIFY]: "石化",
  [StatusAilmentType.BLIND]: "暗闇",
  [StatusAilmentType.REVERSE]: "あべこべ",
  [StatusAilmentType.INTERCEPT]: "迎撃",
  [StatusAilmentType.HEAL_HP]: "HP治癒",
  [StatusAilmentType.HEAL_MP]: "MP治癒",
  [StatusAilmentType.NULLIFY_STATUS_EFFECT]: "状態効果無効",
  [StatusAilmentType.CHARGE]: "チャージ",
  [StatusAilmentType.BRACE]: "踏ん張る",
  [StatusAilmentType.REDUCE_MP_COST]: "消費MP軽減",
  [StatusAilmentType.BARRIER]: "バリア",
  [StatusAilmentType.MULTI_BOOST]: "多段強化",
  [StatusAilmentType.CURSE]: "呪縛",
  [StatusAilmentType.BREAK]: "ブレイク",
  [StatusAilmentType.PROTECT]: "守護",
  [StatusAilmentType.FREEZE]: "凍結",
  [StatusAilmentType.NAUSEA]: "ゲス",
  [StatusAilmentType.SHOCK]: "感電",
  [StatusAilmentType.MODE_CHANGE]: "モードチェンジ",
  [StatusAilmentType.SING]: "歌唱",
  [StatusAilmentType.SHIELD]: "シールド",
  [StatusAilmentType.EXTEND_AZ_TURN]: "AZターン延長",
  [StatusAilmentType.INCREASE_AF_GAUGE]: "AFゲージ増加量UP",
  [StatusAilmentType.MENTAL_UNITY]: "精神統一",
  [StatusAilmentType.AMBITION]: "虎視眈々",
  [StatusAilmentType.REBELLION]: "下剋上",
  [StatusAilmentType.ANTI_KNOCKBACK]: "吹き飛ばし無効",
  [StatusAilmentType.COVER]: "庇立て",
  [StatusAilmentType.CRITICAL_GUARD]: "クリティカルガード",
  [StatusAilmentType.PRAYER]: "祈祷",
  [StatusAilmentType.MP_GAURD]: "MPガード",
  [StatusAilmentType.SHAPESHIFT_FIRE]: "変幻自在(火)",
  [StatusAilmentType.SHAPESHIFT_WATER]: "変幻自在(水)",
  [StatusAilmentType.SHAPESHIFT_WIND]: "変幻自在(風)",
  [StatusAilmentType.SHAPESHIFT_EARTH]: "変幻自在(地)",
  [StatusAilmentType.SHAPESHIFT_THUNDER]: "変幻自在(雷)",
  [StatusAilmentType.SHAPESHIFT_DARK]: "変幻自在(陰)",
  [StatusAilmentType.SHAPESHIFT_CRYSTAL]: "変幻自在(晶)",
  [StatusAilmentType.SHAPESHIFT_SLASH]: "変幻自在(斬)",
  [StatusAilmentType.SHAPESHIFT_STAB]: "変幻自在(突)",
  [StatusAilmentType.SHAPESHIFT_STRIKE]: "変幻自在(打)",
  [StatusAilmentType.SHAPESHIFT_MAGICAL]: "変幻自在(魔)",
  [StatusAilmentType.ELEMENTAL_BREAK_FIRE]: "エレメンタルブレイク(火)",
  [StatusAilmentType.ELEMENTAL_BREAK_WATER]: "エレメンタルブレイク(水)",
  [StatusAilmentType.ELEMENTAL_BREAK_WIND]: "エレメンタルブレイク(風)",
  [StatusAilmentType.ELEMENTAL_BREAK_EARTH]: "エレメンタルブレイク(地)",
  [StatusAilmentType.ELEMENTAL_BREAK_THUNDER]: "エレメンタルブレイク(雷)",
  [StatusAilmentType.ELEMENTAL_BREAK_DARK]: "エレメンタルブレイク(陰)",
  [StatusAilmentType.ELEMENTAL_BREAK_CRYSTAL]: "エレメンタルブレイク(晶)",
  [StatusAilmentType.ELEMENTAL_BREAK_SLASH]: "エレメンタルブレイク(斬)",
  [StatusAilmentType.ELEMENTAL_BREAK_STAB]: "エレメンタルブレイク(突)",
  [StatusAilmentType.ELEMENTAL_BREAK_STRIKE]: "エレメンタルブレイク(打)",
  [StatusAilmentType.ELEMENTAL_BREAK_MAGICAL]: "エレメンタルブレイク(魔)",
};


```

#### スキルサンプル

```json
{
  "skill_name": "ファイアボール",
  "mp_cost": 10,
  "detail": "火属性の魔法攻撃を行う",
  "damage_sources": [
    {
      "power": 100,
      "target": "enemy",
      "element_type": "fire",
      "attack_type": "magic",
      "hit_count": 1,
      "damage_modifiers": [
        {
          "modifier_type": "critical",
          "value": 1.5
        }
      ]
    }
  ],
  "status_modifiers": [
    {
      "target": "enemy",
      "status_ailments": [
        {
          "ailment_type": "poison",
          "success_rate": 0.2,
          "ignore_enemy_resistance": false,
        }
      ],
      "unit_stat_modifiers": [
        {
          "modifier_type": "physical_resistance",
          "value": 0.8
        }
      ]
    }
  ]
}

```