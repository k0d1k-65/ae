import React, { useState } from "react";
import { TextField } from "@mui/material";

/** 初期値から変更があれば強調するテキストフィールド */
function CustomOutlineTextField<T>(props: { value: T; setValueString: (val: string) => void; initialValue: T }) {
  const { value, initialValue, setValueString } = props;

  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValueString(newValue);
    setHasChanged(newValue === initialValue);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      error={hasChanged}
      variant="outlined"
      sx={{ "& .MuiOutlinedInput-root": { borderColor: hasChanged ? "#ffffff" : undefined } }}
    />
  );
}

export default CustomOutlineTextField;
