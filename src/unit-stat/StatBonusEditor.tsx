import { TextField, MenuItem, ListItemText, Select } from "@mui/material";
import { EditedOutline } from "../common/EditOutLinedText";
import { IStatBonus } from "../common/models/UnitModel";
import { UnitStatBonus, UnitStatBonusType } from "../common/constants/UnitStatType";
import { UnitStat } from "../units/types/common/UnitStat";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const UnitStatBonusEditorComponent = (props: {
  default: IStatBonus;
  edit: IStatBonus;
  title: string | JSX.Element;
  setter: (key: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => void;
  preset?: UnitStat;
}) => {
  return (
    // スタイルコンプリートボーナス
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* ラベル */}
      <span style={{ flex: "none", minWidth: "15%", margin: 8 }}>{props.title}</span>

      {/* ステータス種 */}
      <EditedOutline isEdited={props.default.statType !== props.edit.statType} style={{ width: "45%" }}>
        <Select
          value={props.edit.statType}
          onChange={(ev) => {
            const statType = ev.target.value as UnitStatBonusType;

            props.setter("statType", statType || null);

            if (!!statType) {
              // 補正値の設定がなければ、プリセットを適用
              if (!props.edit.statAmount) {
                switch (statType) {
                  case "HP":
                    props.setter("statAmount", props.preset?.hp || null);
                    break;
                  case "MP":
                    props.setter("statAmount", props.preset?.mp || null);
                    break;
                  case "POWER":
                    props.setter("statAmount", props.preset?.power || null);
                    break;
                  case "ENDURE":
                    props.setter("statAmount", props.preset?.endure || null);
                    break;
                  case "LUCK":
                    props.setter("statAmount", props.preset?.luck || null);
                    break;
                  case "INTELLIGENCE":
                    props.setter("statAmount", props.preset?.intelligence || null);
                    break;
                  case "SPLIT":
                    props.setter("statAmount", props.preset?.split || null);
                    break;
                  case "SPEED":
                    props.setter("statAmount", props.preset?.speed || null);
                    break;
                  default:
                    break;
                }
              }
              // 演算子の設定がなければ、「.0」にする
              if (!props.edit.operator) {
                props.setter("operator", "+");
              }
            }
          }}
          sx={{ width: "100%", height: "56px" }}
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
      <EditedOutline isEdited={props.default.statAmount !== props.edit.statAmount} style={{ width: "20%" }}>
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
          onChange={(ev) => props.setter("operator", (ev.target.value as "+" | "%") || null)}
          sx={{ width: "100%", height: "56px" }}
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
