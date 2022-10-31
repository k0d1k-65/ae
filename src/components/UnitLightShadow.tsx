import * as React from 'react';
import { ClickAwayListener, Divider, Fade, Grid, Popper, TextField, ToggleButton } from "@mui/material";
import { Box } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LightShadowType } from "../common/constants/LightShadowType";
import { Unit } from '../common/types/Unit';
import { UnitStatType } from '../common/constants/UnitStatType';

export function UnitLightShadow(props: {
  unit: Unit | null,
  currentLs: number,
  setLightShadow: (ls: number) => void,
}) {
  const { unit, currentLs, setLightShadow } = props;

  const [opened, setOpened] = React.useState<boolean>(false);

  const anchor = React.useRef(null);

  const bonuses = unit?.lsBonus.map(b => {
    let statType = "";
    let statAmount = 0;
    if (b.stat.hp > 0) {
      statType = UnitStatType.HP;
      statAmount = b.stat.hp;
    }
    else if (b.stat.mp > 0) {
      statType = UnitStatType.MP;
      statAmount = b.stat.mp;
    }
    else if (b.stat.power > 0) {
      statType = UnitStatType.POWER;
      statAmount = b.stat.power;
    }
    else if (b.stat.endure > 0) {
      statType = UnitStatType.ENDURE;
      statAmount = b.stat.endure;
    }
    else if (b.stat.luck > 0) {
      statType = UnitStatType.LUCK;
      statAmount = b.stat.luck;
    }
    else if (b.stat.intelligence > 0) {
      statType = UnitStatType.INTELLIGENCE;
      statAmount = b.stat.intelligence;
    }
    else if (b.stat.split > 0) {
      statType = UnitStatType.SPEED;
      statAmount = b.stat.split;
    }
    else if (b.stat.speed > 0) {
      statType = UnitStatType.SPLIT;
      statAmount = b.stat.speed;
    }

    return {
      lightShadow: b.lightShadow,
      statType,
      statAmount,
    };
  });

  return (
    <Box sx={{ display: 'flex' }}>
      {/* 天冥 */}
      <TextField
        id="filled-number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        label={!!unit ? unit.lightShadow : "-"}
        value={currentLs}
        onChange={e => {
          setLightShadow(Number(e.target.value));
        }}
        size={'small'}
      />

      <ClickAwayListener onClickAway={() => setOpened(false)}>
        <div>
          {/* 天冥ボーナス 表示トグル */}
          <ToggleButton
            ref={anchor}
            value={0}
            selected={opened}
            onChange={() => setOpened(!opened)}
            size={'small'}
          >
            <ExpandMoreIcon />
          </ToggleButton>

          {/* 天冥ボーナス内容 */}

          <Popper
            disablePortal
            open={opened}
            anchorEl={anchor?.current ?? null}
            placement={'right-start'}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={100}>
                <Grid container spacing={1} sx={{
                  width: 300,
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'text',
                }}>
                  {
                    !!unit && !!bonuses
                    ? bonuses.map(b =>
                        <Grid item xs={6}>
                          <span>{unit.lightShadow}{b.lightShadow} {b.statType}+{b.statAmount}</span>
                        </Grid>
                    )
                    : <></>
                  }
                </Grid>
              </Fade>
            )}
          </Popper>

        </div>
      </ClickAwayListener>
    </Box>
  );
};