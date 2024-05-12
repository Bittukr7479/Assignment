import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import { Typography } from '@mui/material';



function Cards() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper', fontSize: 'bold' , color: 'green', backgroundColor: '#d0e9d0' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    // subheader={
    //   <ListSubheader component="div" id="nested-list-subheader" >
    //     Rooftop solar quotes <HelpIcon />

    //   </ListSubheader>
    // }
    >

      <ListItemButton onClick={handleClick} sx={{borderBottom: '1px solid black'}} >
        <ListItemText primary={<Typography><h3 style={{margin:"unset"}}>Payment Details</h3></Typography>} secondary="" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Advance" secondary="10%- INR 30K" />
            <ListItemText primary="Advance" secondary="10%- INR 30K" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Before Despatch" secondary="20%- INR 60K" />
            <ListItemText primary="Before Despatch" secondary="20%- INR 60K" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="After Despatch" secondary="40%- INR 1.2L" />
            <ListItemText primary="After Despatch" secondary="40%- INR 1.2L" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="After Commissioning" secondary="20%- INR 60K" />
            <ListItemText primary="After Commissioning" secondary="20%- INR 60K" />
          </ListItemButton>
        </List>
        <ListItemText primary={<Typography borderBottom='1px solid black' padding='8px' paddingLeft='32px' align="left">Subsidy </Typography>} margin="unset" />
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Typography variant='body' component='div'>Before Installation<br />- </Typography>} secondary=" " />
            <ListItemText primary={<Typography variant='body' component='div'>Before Installation<br />- </Typography>} secondary=" " />

            {/* <ListItemText primary="Before Installation -" secondary="INR 43K(Central) INR(State)" /> */}
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Typography>After Installation<br /> </Typography>} secondary={<Typography>INR 43K(Central) <br /> INR 20K(State) </Typography>} />
            <ListItemText primary={<Typography>After Installation<br /> </Typography>} secondary={<Typography>INR 43K(Central) <br /> INR 20K(State) </Typography>} />

            {/* <ListItemText primary="Before Installation -" secondary="INR 43K(Central) INR(State)" /> */}
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}

export default Cards