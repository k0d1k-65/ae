import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { IStatBonus, IUnitStats } from "../common/models/UnitModel";
import UnitStatBonusEditorComponent from "./StatBonusEditor";

const LightShadowBonusForm = (props: {
  unitStat: IUnitStats;
  default: IUnitStats;
  handleOnChangeStat: (key: keyof IUnitStats, subKey: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => void;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const wrapSetStatBonus = (key: keyof IUnitStats) => {
    const fn = (subKey: keyof IStatBonus, value: IStatBonus[keyof IStatBonus]) => {
      props.handleOnChangeStat(key, subKey, value);
    };

    return fn;
  };

  const lightShadow = props.unitStat.lightShadow || "";

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>

        <DialogTitle>天冥ボーナス</DialogTitle>

        <DialogContent>
          {/* 天冥 5 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_5!}
            edit={props.unitStat.ls_5!}
            title={`${lightShadow}5`}
            setter={wrapSetStatBonus("ls_5")}
          />

          {/* 天冥 15 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_15!}
            edit={props.unitStat.ls_15!}
            title={`${lightShadow}15`}
            setter={wrapSetStatBonus("ls_15")}
          />

          {/* 天冥 30 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_30!}
            edit={props.unitStat.ls_30!}
            title={`${lightShadow}30`}
            setter={wrapSetStatBonus("ls_30")}
          />

          {/* 天冥 50 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_50!}
            edit={props.unitStat.ls_50!}
            title={`${lightShadow}50`}
            setter={wrapSetStatBonus("ls_50")}
          />

          {/* 天冥 75 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_75!}
            edit={props.unitStat.ls_75!}
            title={`${lightShadow}75`}
            setter={wrapSetStatBonus("ls_75")}
          />

          {/* 天冥 105 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_105!}
            edit={props.unitStat.ls_105!}
            title={`${lightShadow}105`}
            setter={wrapSetStatBonus("ls_105")}
          />

          {/* 天冥 140 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_140!}
            edit={props.unitStat.ls_140!}
            title={`${lightShadow}140`}
            setter={wrapSetStatBonus("ls_140")}
          />

          {/* 天冥 175 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_175!}
            edit={props.unitStat.ls_175!}
            title={`${lightShadow}175`}
            setter={wrapSetStatBonus("ls_175")}
          />

          {/* 天冥 215 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_215!}
            edit={props.unitStat.ls_215!}
            title={`${lightShadow}215`}
            setter={wrapSetStatBonus("ls_215")}
          />

          {/* 天冥 255 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_255!}
            edit={props.unitStat.ls_255!}
            title={`${lightShadow}255`}
            setter={wrapSetStatBonus("ls_255")}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LightShadowBonusForm;
