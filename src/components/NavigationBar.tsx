import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeColorModeContext } from '../common/contexts/ThemeColorModeContext';

export function NavigationBar() {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeColorModeContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleThemeColor} color="inherit">
          {theme.palette.mode === 'light' ? <LightMode /> : <DarkMode />}
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}
