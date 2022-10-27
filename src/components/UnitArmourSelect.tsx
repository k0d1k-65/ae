import { Autocomplete, TextField } from "@mui/material";
import { getArmourByWeapon } from "../common/constants/ArmourType";
import { WeaponType } from "../common/constants/WeaponType";
import { Equipment } from "../common/types/Equiqment";

// 防具
export function UnitArmourSelectBox(props: {
  labelTitle: string,
  wType: WeaponType|null,
  items: Equipment[],
  selecting: Equipment|null,
  onSelected: (s: Equipment|null) => void,
}) {
  const { labelTitle, wType, items, selecting, onSelected } = props;

  const aType = wType != null && getArmourByWeapon(wType);
  const options = items
    .filter(option => {
      return option.armourType === aType
    })
    .map((option) => {
      return {
        ...option,
      };
    });

  const handleChange = (_: any, selected: Equipment|null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    return (
      <TextField {...params} label={labelTitle} />
    );
  };

  return (
    <Autocomplete
      id="ArmourSelectBox"
      options={options}
      getOptionLabel={(opt) => opt.name}
      value={selecting}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
};
