import { EquipmentType } from "../common/constants/EquipmentType";
import { Equipment } from "../common/types/Equiqment";

const badges = (() => {
  const _badges: Equipment[] = [
    {
      name: "HP+1000",
      type: EquipmentType.Badge,
      effects: {
        hp: 1000,
      }
    },
  ];

  return _badges;
})();

export function fetchBadges() {
  return badges;
}
