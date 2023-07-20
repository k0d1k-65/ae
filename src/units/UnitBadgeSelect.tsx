import { Autocomplete, TextField } from "@mui/material";
import { Equipment } from "./types/common/Equiqment";

// バッジ
export function UnitBadgeSelectBox(props: {
  labelTitle: string;
  items: Equipment[];
  selecting: Equipment | null;
  onSelected: (s: Equipment | null) => void;
}) {
  const { labelTitle, items, selecting, onSelected } = props;

  const options = items.map((option) => {
    return {
      ...option,
    };
  });

  const handleChange = (_: any, selected: Equipment | null) => {
    onSelected(selected);
  };

  const handleRender = (params: object) => {
    return <TextField {...params} label={labelTitle} />;
  };

  return (
    <Autocomplete
      id="BadgeSelectBox"
      options={options}
      getOptionLabel={(opt) => opt.name}
      value={selecting}
      renderInput={handleRender}
      onChange={handleChange}
    />
  );
}
