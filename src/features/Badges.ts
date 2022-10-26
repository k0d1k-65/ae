import { EquipmentType } from "../common/constants/EquipmentType";
import { Equipment } from "../common/types/Equiqment";
import { UnitStat } from "../common/types/UnitStat";

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
