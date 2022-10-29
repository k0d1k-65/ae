import React from 'react';
import logo from './logo.svg';
import './App.css';
import UnitBase from './components/UnitBase';
import Test from './components/test';
import { AppBar, createTheme, CssBaseline, IconButton, ThemeProvider, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    // navバー
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

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
        </Toolbar>
      </AppBar>

      <UnitBase />
      {/* <Test /> */}
    </ThemeProvider>
  );
}

export default App;
