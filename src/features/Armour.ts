import { ArmourType } from "../common/constants/ArmourType";
import { EquipmentType } from "../common/constants/EquipmentType";
import { Equipment } from "../common/types/Equiqment";

const armours = (() => {
  const _armours: Equipment[] = [
    {
      name: "降魔の腕輪",
      type: EquipmentType.Armour,
      armourType: ArmourType.bracelet,
      stat: {
        def: 180,
        mdef: 150,
      }
    },
    {
      name: "可惜夜の首輪",
      type: EquipmentType.Armour,
      armourType: ArmourType.neckless,
      stat: {
        def: 160,
        mdef: 160,
      }
    },
    {
      name: "フェザーリング",
      type: EquipmentType.Armour,
      armourType: ArmourType.ring,
      stat: {
        def: 135,
        mdef: 158,
      }
    },
  ];

  return _armours;
})();

export function fetchArmours() {
  return armours;
}
