import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeColorModeContext } from "./common/contexts/ThemeColorModeContext";
import { NavigationBar } from "./common/NavigationBar";
import styled from "styled-components";
import Home from "./home";
import UnitStatComponent from "./unit-stat";
import NotFound from "./not-found";
import { AppRoutes } from "./Routes";
import { ToastContainer } from "react-toastify";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100svh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  overflow: auto;
  padding: 0;
  flex: auto;
`;

function App() {
  const [themeColor, setThemeColor] = React.useState<"light" | "dark">("dark");

  const theme = createTheme({
    palette: {
      mode: themeColor,
    },
  });

  const handler = React.useMemo(
    () => ({
      toggleThemeColor: () => {
        setThemeColor((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Wrapper>
          {/* MUI css */}
          <CssBaseline />

          <ThemeColorModeContext.Provider value={handler}>
            <NavigationBar />
          </ThemeColorModeContext.Provider>

          <Main>
            <ToastContainer newestOnTop pauseOnFocusLoss={false} theme="dark" />

            <Routes>
              <Route index element={<UnitStatComponent />} />
              {AppRoutes.map((appRoute) => (
                <Route path={appRoute.path} element={<appRoute.component />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
