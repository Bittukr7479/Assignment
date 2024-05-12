import React from 'react'
// import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import { Stack,Typography } from '@mui/material';

const cardData = [
    {

        primary1: '',
        primary2: '',
        secondary1: '',
        secondary2: ''
    },
]
function Xyz() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Stack>

        <List
            sx={{ width: '100%', bgcolor: 'background.paper', fontSize: 'bold', color: 'red', backgroundColor: 'rgb(243 251 241)' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{textAlign:'center', paddingLeft:'32px'}}>
                    <h2>Rooftop solar quotes &nbsp;<HelpIcon /></h2>

                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClick} sx={{ boxShadow:'9', color: 'green', backgroundColor: '#d0e9d0'  }} >
                <ListItemText primary={<Typography><h3 style={{ margin: "unset" ,display:'flex', padding:'0px 16px', paddingLeft:'6px'}}>XYZ Solar Solutions</h3></Typography>} />
                <ListItemText primary={<Typography><h3 style={{ margin: "unset" }}>Annapurna Sola Tech</h3></Typography>} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>

                {cardData.map((item, index) => (
                    <List key={index} component="div" disablePadding>
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary1}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary1}</Typography>}
                            />
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary2}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary2}</Typography>}
                            />
                    </List>
                ))}
            </Collapse>
        </List>
        </Stack>
    )
}

export default Xyz