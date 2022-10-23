export const EquipmentType = {
  Weapon: "武器",
  Armour: "防具",
  Badge: "バッジ",
  // Grasta: "グラスタ",
} as const;

export type EquipmentType = typeof EquipmentType[keyof typeof EquipmentType];