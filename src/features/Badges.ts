import { EquipmentType } from "../constants/common/EquipmentType";
import { Equipment } from "../types/units/Equiqment";
import { UnitStat } from "../types/units/UnitStat";

const badges = (() => {
  const _badges: Equipment[] = [
    {
      name: "HP+1000",
      type: EquipmentType.Badge,
      stat: new UnitStat({
        hp: 1000,
      })
    },
  ];

  return _badges;
})();

export function fetchBadges() {
  return badges;
}
