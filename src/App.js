// src/app.js

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import logovaysolal from "./vaysolar.png";
import Account from "../src/pages/Account";
import './App.css';

const THEME = createTheme({
  typography: {
    fontFamily: `"Plus Jakarta Sans", sans-serif`,
    fontSize: `auto`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  return (
    <ThemeProvider theme={THEME}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <AppBar position="static">
              <Toolbar
                sx={{
                  justifyContent: "space-between",
                  backgroundColor: "white",
                }}
              >
                <IconButton size="large" edge="start" aria-label="menu">
                  <MenuIcon sx={{ fontSize: "24px" }} color="success" />
                </IconButton>
                <img
                  src={logovaysolal}
                  style={{ marginLeft: "-36px", display: "sticky", gap: "6px" }}
                  height="46px"
                  width="110px"
                  alt="vaysolar"
                  srcSet=""
                />
                <div />
              </Toolbar>
            </AppBar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Account />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
