import React, { useState } from "react";
import { useTheme, styled } from '@mui/material/styles';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeColorModeContext } from '../common/contexts/ThemeColorModeContext';
import { Link } from 'react-router-dom';
import { AppLinks } from "../common/constants/AppLinks";

const NavigationBar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeColorModeContext);

  const CusMenuButton = styled(IconButton)(({theme}) => ({
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerItems = (
    <div>
    </div>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          {/* ハンバーガーメニュー */}
          <CusMenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </CusMenuButton>

          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            {Object.entries(AppLinks).map(([key, link]) => (
              <Link to={link.path} style={{
                marginRight: "2rem",
                color: "#90caf9",
                textDecoration: "none",
              }}>{link.name}</Link>
            ))}

            {/* テーマ切り替え */}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleThemeColor} color="inherit">
              {theme.palette.mode === 'light' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* メニュー */}
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        {drawerItems}
      </Drawer>
    </>
  );
};

export default NavigationBar;
