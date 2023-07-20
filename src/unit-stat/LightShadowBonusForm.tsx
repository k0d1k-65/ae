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
            default={props.default.ls_5}
            edit={props.unitStat.ls_5}
            title={`${lightShadow}5`}
            setter={wrapSetStatBonus("ls_5")}
            preset={{
              hp: 100,
              mp: 20,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 5,
              endure: 5,
              luck: 5,
              intelligence: 5,
              split: 5,
              speed: 5,
            }}
          />

          {/* 天冥 15 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_15}
            edit={props.unitStat.ls_15}
            title={`${lightShadow}15`}
            setter={wrapSetStatBonus("ls_15")}
            preset={{
              hp: 100,
              mp: 40,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 10,
              endure: 10,
              luck: 10,
              intelligence: 10,
              split: 10,
              speed: 10,
            }}
          />

          {/* 天冥 30 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_30}
            edit={props.unitStat.ls_30}
            title={`${lightShadow}30`}
            setter={wrapSetStatBonus("ls_30")}
            preset={{
              hp: 200,
              mp: 40,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 10,
              endure: 10,
              luck: 10,
              intelligence: 10,
              split: 10,
              speed: 10,
            }}
          />

          {/* 天冥 50 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_50}
            edit={props.unitStat.ls_50}
            title={`${lightShadow}50`}
            setter={wrapSetStatBonus("ls_50")}
            preset={{
              hp: 200,
              mp: 40,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 15,
              endure: 15,
              luck: 15,
              intelligence: 15,
              split: 15,
              speed: 15,
            }}
          />

          {/* 天冥 75 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_75}
            edit={props.unitStat.ls_75}
            title={`${lightShadow}75`}
            setter={wrapSetStatBonus("ls_75")}
            preset={{
              hp: 300,
              mp: 60,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 15,
              endure: 15,
              luck: 15,
              intelligence: 15,
              split: 15,
              speed: 15,
            }}
          />

          {/* 天冥 105 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_105}
            edit={props.unitStat.ls_105}
            title={`${lightShadow}105`}
            setter={wrapSetStatBonus("ls_105")}
            preset={{
              hp: 300,
              mp: 60,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 15,
              endure: 15,
              luck: 15,
              intelligence: 15,
              split: 15,
              speed: 15,
            }}
          />

          {/* 天冥 140 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_140}
            edit={props.unitStat.ls_140}
            title={`${lightShadow}140`}
            setter={wrapSetStatBonus("ls_140")}
            preset={{
              hp: 400,
              mp: 60,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 20,
              endure: 20,
              luck: 20,
              intelligence: 20,
              split: 20,
              speed: 20,
            }}
          />

          {/* 天冥 175 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_175}
            edit={props.unitStat.ls_175}
            title={`${lightShadow}175`}
            setter={wrapSetStatBonus("ls_175")}
            preset={{
              hp: 400,
              mp: 80,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 25,
              endure: 25,
              luck: 25,
              intelligence: 25,
              split: 25,
              speed: 25,
            }}
          />

          {/* 天冥 215 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_215}
            edit={props.unitStat.ls_215}
            title={`${lightShadow}215`}
            setter={wrapSetStatBonus("ls_215")}
            preset={{
              hp: 400,
              mp: 80,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 25,
              endure: 25,
              luck: 25,
              intelligence: 25,
              split: 25,
              speed: 25,
            }}
          />

          {/* 天冥 255 */}
          <UnitStatBonusEditorComponent
            default={props.default.ls_255}
            edit={props.unitStat.ls_255}
            title={`${lightShadow}255`}
            setter={wrapSetStatBonus("ls_255")}
            preset={{
              hp: 500,
              mp: 100,
              atk: 0,
              def: 0,
              matk: 0,
              mdef: 0,
              power: 30,
              endure: 30,
              luck: 30,
              intelligence: 30,
              split: 30,
              speed: 30,
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LightShadowBonusForm;
