import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logovaysolal from './vaysolar.png';
import Footer from './components/Footer';
import Materials from './components/Materials';
import NetCost from './components/NetCost';
import BasicInformation from './components/BasicInformation';
import PaymentDetails from './components/PaymentDetails';
import RooftopSolarQuotes from './components/RooftopSolarQuotes';

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
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
        <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'white' }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon color='success' />
          </IconButton>
          <img src={logovaysolal} style={{marginLeft:'-36px', display:'sticky', gap:'6px'}} height='46px' width='110px' alt="vaysolar" srcSet="" />
          <div />
        </Toolbar>
      </AppBar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container sx={{ padding:'unset', display:'grid', gap:'7px'}} >
        <RooftopSolarQuotes />
        <BasicInformation />
        <Materials />
        <PaymentDetails />
        <NetCost />
        <Footer />
      </Container>
    </React.Fragment>
  );
}
export default App;