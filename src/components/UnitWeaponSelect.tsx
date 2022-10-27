import { Autocomplete, TextField } from "@mui/material";
import { WeaponType } from "../common/constants/WeaponType";
import { Equipment } from "../common/types/Equiqment";

// 武器
export function UnitWeaponSelectBox(props: {
  labelTitle: string,
  wType: WeaponType|null,
  items: Equipment[],
  selecting: Equipment|null,
  onSelected: (s: Equipment|null) => void,
}) {
  const { labelTitle, wType, items, selecting, onSelected } = props;

  const options = items
    .filter(option => {
      return option.weaponType === wType
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
      // id="WeaponSelectBox"
      options={options}
      getOptionLabel={(opt) => opt.name}
      value={selecting}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
};
