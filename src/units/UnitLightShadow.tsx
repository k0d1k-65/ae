import * as React from 'react';
import { Button, ClickAwayListener, Fade, Popper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Unit } from './types/units/Unit';
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
      <ClickAwayListener onClickAway={() => setOpened(false)}>
        <div>
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
            onFocus={() => {setOpened(true)}}
            ref={anchor}
          />

          <Popper
            open={opened}
            anchorEl={anchor?.current ?? null}
            placement={'bottom-start'}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={100}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 160,
                }}>
                  {
                    !!unit && !!bonuses
                    ? bonuses.map(b =>
                      <Button
                        variant='outlined'
                        color='inherit'
                        onClick={() => {
                          setLightShadow(b.lightShadow);
                          setOpened(false);
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          fontSize: '90%',
                          width: '100%',
                        }}>
                          <span>{!!unit ? unit.lightShadow: "-"}{b.lightShadow}</span>
                          <span>{b.statType}+{b.statAmount}</span>
                        </div>
                      </Button>
                    )
                    : <></>
                  }

                </Box>
              </Fade>
            )}
          </Popper>

        </div>
      </ClickAwayListener>
    </Box>
  );
};
