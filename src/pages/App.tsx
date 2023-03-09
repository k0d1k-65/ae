import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeColorModeContext } from '../common/contexts/ThemeColorModeContext';
import { NavigationBar } from '../components/NavigationBar';
import UnitBase from '../components/unit/UnitBase';

function App() {
  const [themeColor, setThemeColor] = React.useState<'light' | 'dark'>('dark');
  const theme = createTheme({
    palette: {
      mode: themeColor,
    },
  });

  const handler = React.useMemo(
    () => ({
      toggleThemeColor: () => {
        setThemeColor((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    // navバー
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ThemeColorModeContext.Provider value={handler}>
          <NavigationBar />
        </ThemeColorModeContext.Provider>

        <UnitBase />
      </ThemeProvider>
  );
}

export default App;
