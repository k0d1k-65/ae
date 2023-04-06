import { ArmourType } from "../constants/common/ArmourType";
import { EquipmentType } from "../constants/common/EquipmentType";
import { Equipment } from "../types/common/Equiqment";
import { UnitStatModel } from "../types/models/UnitStatModel";

const armours = (() => {
  const _armours: Equipment[] = [
    {
      name: "降魔の腕輪",
      type: EquipmentType.Armour,
      armourType: ArmourType.bracelet,
      stat: new UnitStatModel({
        def: 180,
        mdef: 150,
      })
    },
    {
      name: "可惜夜の首輪",
      type: EquipmentType.Armour,
      armourType: ArmourType.neckless,
      stat: new UnitStatModel({
        def: 160,
        mdef: 160,
      })
    },
    {
      name: "フェザーリング",
      type: EquipmentType.Armour,
      armourType: ArmourType.ring,
      stat: new UnitStatModel({
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
