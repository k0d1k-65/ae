import { EquipmentType } from "../constants/common/EquipmentType";
import { Equipment } from "../types/common/Equiqment";
import { UnitStatModel } from "../types/models/UnitStatModel";

const badges = (() => {
  const _badges: Equipment[] = [
    {
      name: "HP+1000",
      type: EquipmentType.Badge,
      stat: new UnitStatModel({
        hp: 1000,
      }),
    },
  ];

  return _badges;
})();

export function fetchBadges() {
  return badges;
}
