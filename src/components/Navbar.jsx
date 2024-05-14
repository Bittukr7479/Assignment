import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logovaysolal from '../vaysolar.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'white' }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon color='success' />
          </IconButton>
          <img src={logovaysolal} style={{marginLeft:'-36px'}} height='45px' width='110px' alt="vaysolar" srcSet="" />
          <div />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
