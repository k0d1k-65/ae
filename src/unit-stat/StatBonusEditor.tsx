import { TextField, MenuItem, ListItemText, Select } from "@mui/material";
import { EditedOutline } from "../common/EditOutLinedText";
import { IStatBonus } from "../common/models/UnitModel";
import { UnitStatBonus, UnitStatBonusType } from "../common/constants/UnitStatType";

const UnitStatBonusEditorComponent = (props: {
  default: IStatBonus;
  edit: IStatBonus;
  title: string;
  setter: (key: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => void;
}) => {
  return (
    // スタイルコンプリートボーナス
    <div style={{ display: "flex", width: "95%" }}>
      {/* ラベル */}
      <span style={{ flex: "none", minWidth: "15%", margin: 8 }}>{props.title}</span>

      {/* ステータス種 */}
      <EditedOutline isEdited={props.default.statType !== props.edit.statType} style={{ flex: "none", width: "45%" }}>
        <Select
          value={props.edit.statType}
          onChange={(ev) => props.setter("statType", (ev.target.value as UnitStatBonusType) || null)}
          sx={{ p: "0 .5rem", width: "100%" }}
          size={"small"}
        >
          <MenuItem value="">
            <ListItemText primary="-" />
          </MenuItem>
          {Object.keys(UnitStatBonus).map((statType) => (
            <MenuItem value={statType}>
              <ListItemText primary={UnitStatBonus[statType as UnitStatBonusType]} />
            </MenuItem>
          ))}
        </Select>
      </EditedOutline>

      {/* 補正値 */}
      <EditedOutline
        isEdited={props.default.statAmount !== props.edit.statAmount}
        style={{ flex: "none", width: "20%" }}
      >
        <TextField
          sx={{ width: "100%" }}
          type="number"
          value={props.edit.statAmount?.toString() || ""}
          onChange={(ev) => props.setter("statAmount", Number(ev.target.value))}
        />
      </EditedOutline>

      {/* 演算子 */}
      <EditedOutline isEdited={props.default.operator !== props.edit.operator} style={{ flex: "none", width: "20%" }}>
        <Select
          value={props.edit.operator}
          onChange={(ev) => props.setter("operator", (ev.target.value as "+" | "%") || null)}
          sx={{ p: "0 .5rem", width: "100%" }}
          size={"small"}
        >
          <MenuItem value="">
            <ListItemText primary="-" />
          </MenuItem>
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
