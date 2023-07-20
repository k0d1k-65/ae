import { Autocomplete, TextField } from "@mui/material";
import { Equipment } from "./types/common/Equiqment";

// 防具
export function UnitArmourSelectBox(props: {
  labelTitle: string;
  items: Equipment[];
  selecting: Equipment | null;
  onSelected: (s: Equipment | null) => void;
}) {
  const { labelTitle, items, selecting, onSelected } = props;

  const handleChange = (_: any, selected: Equipment | null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    return <TextField {...params} label={labelTitle} />;
  };

  return (
    <Autocomplete
      id="ArmourSelectBox"
      options={items}
      getOptionLabel={(opt) => opt.name}
      value={selecting}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
}
