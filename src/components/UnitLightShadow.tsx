import * as React from 'react';
import { ClickAwayListener, Divider, Fade, Grid, Popper, TextField, ToggleButton } from "@mui/material";
import { Box } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LightShadowType } from "../common/constants/LightShadowType";
import { Unit } from '../common/types/Unit';

export function UnitLightShadow(props: {
  unit: Unit | null,
}) {
  const { unit } = props;

  const [unitLightShadowNumber, setUnitLightShadowNumber] = React.useState<number>(0);
  const [opened, setOpened] = React.useState<boolean>(false);

  const anchor = React.useRef(null);

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
        value={unitLightShadowNumber}
        onChange={e => {
          setUnitLightShadowNumber(Number(e.target.value))
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
                    !!unit
                    ? unit.lsBonus.map(b =>
                        <Grid item xs={6}>
                          <span>{unit.lightShadow}{b.lightShadow} {b.statType}+{b.amount}</span>
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