import React from 'react';
import logo from './logo.svg';
import './App.css';
import UnitBase from './components/UnitBase';
import Test from './components/test';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <UnitBase />
      {/* <Test /> */}
    </ThemeProvider>
  );
}

export default App;
