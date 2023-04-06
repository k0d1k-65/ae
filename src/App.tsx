import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeColorModeContext } from './contexts/common/ThemeColorModeContext';
import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import SamplePage1 from "./pages/SamplePage1";
import UnitBase from './components/unit/UnitBase';
import NotFound from "./pages/NotFound";
import { AppRoutes } from './routes/Routes';
import Ocr from './components/ocr';

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
          {AppRoutes.map(appRoute => (
            <Route path={appRoute.path} element={<appRoute.component />} />
          ))}
          <Route path="/dev" element={<UnitBase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
