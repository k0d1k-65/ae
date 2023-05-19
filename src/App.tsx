import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeColorModeContext } from "./common/contexts/ThemeColorModeContext";
import { NavigationBar } from "./common/NavigationBar";
import styled from "styled-components";
import Home from "./home";
import NotFound from "./not-found";
import { AppRoutes } from "./Routes";
import { ToastContainer } from "react-toastify";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  overflow: auto;
  padding: 0;
  flex: auto;

  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 620px;
  }
  @media (min-width: 980px) {
    width: 780px;
  }
  @media (min-width: 1200px) {
    width: 960px;
  }
  @media (min-width: 1440px) {
    width: 1140px;
  }
  @media (min-width: 1680px) {
    width: 1300px;
  }
  @media (min-width: 1920px) {
    width: 1460px;
  }
  @media (min-width: 2160px) {
    width: 1620px;
  }
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
            <ToastContainer newestOnTop theme="dark" />

            <Routes>
              <Route index element={<Home />} />
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
