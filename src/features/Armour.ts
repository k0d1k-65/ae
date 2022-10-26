import { ArmourType } from "../common/constants/ArmourType";
import { EquipmentType } from "../common/constants/EquipmentType";
import { Equipment } from "../common/types/Equiqment";
import { UnitStat } from "../common/types/UnitStat";

const armours = (() => {
  const _armours: Equipment[] = [
    {
      name: "降魔の腕輪",
      type: EquipmentType.Armour,
      armourType: ArmourType.bracelet,
      stat: new UnitStat({
        def: 180,
        mdef: 150,
      })
    },
    {
      name: "可惜夜の首輪",
      type: EquipmentType.Armour,
      armourType: ArmourType.neckless,
      stat: new UnitStat({
        def: 160,
        mdef: 160,
      })
    },
    {
      name: "フェザーリング",
      type: EquipmentType.Armour,
      armourType: ArmourType.ring,
      stat: new UnitStat({
        def: 135,
        mdef: 158,
      })
    },
  ];

  return _armours;
})();

export function fetchArmours() {
  return armours;
}
