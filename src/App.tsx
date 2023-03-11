import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeColorModeContext } from './common/contexts/ThemeColorModeContext';
import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import SamplePage1 from "./pages/SamplePage1";
import UnitBase from './components/unit/UnitBase';
import NotFound from "./pages/NotFound";
import { AppLinks } from './common/constants/AppLinks';

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        {/* MUI css */}
        <CssBaseline />

        <ThemeColorModeContext.Provider value={handler}>
          <NavigationBar />
        </ThemeColorModeContext.Provider>

        <Routes>
          <Route index element={<Home />} />
          <Route path={AppLinks.master.path} element={<SamplePage1 />} />
          <Route path={AppLinks.units.path} element={<SamplePage1 />} />
          <Route path={AppLinks.damageCalc.path} element={<SamplePage1 />} />
          <Route path={AppLinks.battleCalc.path} element={<SamplePage1 />} />
          <Route path="/sample" element={<UnitBase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
