import { TextField, MenuItem, ListItemText, Select } from "@mui/material";
import { EditedOutline } from "../common/EditOutLinedText";
import { IStatBonus } from "../common/models/UnitModel";
import { UnitStatBonus, UnitStatBonusType } from "../common/constants/UnitStatType";

const UnitStatBonusEditorComponent = (props: {
  default: IStatBonus;
  edit: IStatBonus;
  setter: (key: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => void;
}) => {
  return (
    // スタイルコンプリートボーナス
    <div style={{ display: "flex" }}>
      {/* ステータス種 */}
      <EditedOutline isEdited={props.default.statType !== props.edit.statType} style={{ width: "40%" }}>
        <Select
          value={props.edit.statType}
          onChange={(ev) => props.setter("statType", ev.target.value as UnitStatBonusType)}
          sx={{ p: "0 .5rem", width: "100%" }}
          size={"small"}
        >
          {Object.keys(UnitStatBonus).map((statType) => (
            <MenuItem value={statType}>
              <ListItemText primary={UnitStatBonus[statType as UnitStatBonusType]} />
            </MenuItem>
          ))}
        </Select>
      </EditedOutline>

      {/* 補正値 */}
      <EditedOutline isEdited={props.default.statAmount !== props.edit.statAmount} style={{ width: "40%" }}>
        <TextField
          sx={{ width: "100%" }}
          type="number"
          value={props.edit.statAmount?.toString() || ""}
          onChange={(ev) => props.setter("statAmount", Number(ev.target.value))}
        />
      </EditedOutline>

      {/* 演算子 */}
      <EditedOutline isEdited={props.default.operator !== props.edit.operator} style={{ width: "20%" }}>
        <Select
          value={props.edit.operator}
          onChange={(ev) => props.setter("operator", ev.target.value as "+" | "%")}
          sx={{ p: "0 .5rem", width: "100%" }}
          size={"small"}
        >
          {[
            { key: "+", print: ".0" },
            { key: "%", print: "%" },
          ].map(({ key, print }) => (
            <MenuItem value={key}>
              <ListItemText primary={print} />
            </MenuItem>
          ))}
        </Select>
      </EditedOutline>
    </div>
  );
};

export default UnitStatBonusEditorComponent;
