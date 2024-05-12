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
import { Stack, Typography } from '@mui/material';

const cardData = [
    {
        
        primary1: 'INR 1,99,000',
        primary2: 'INR 1,99,000',
        secondary1: '(-)53,000',
        secondary2: '(-)53,000'
    },
    {
        
        primary1: 'INR 1,46,000',
        primary2: 'INR 1,46,000',
        secondary1: '',
        secondary2: ''
    },
]
function NetCost() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
            <Stack>
        <List
            sx={{ width: '100%', bgcolor: 'background.paper', fontSize: 'bold'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader" >
        //     Rooftop solar quotes <HelpIcon />

        //   </ListSubheader>
        // }
        >
            <ListItemButton onClick={handleClick} sx={{ boxShadow:'9', color: 'green', backgroundColor: '#d0e9d0' }} >
                <ListItemText primary={<Typography><h3 style={{ margin: "unset", paddingLeft:'16px' }}>NetCost</h3></Typography>} secondary="" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse sx={{ backgroundColor: '#d0e9d0', color:'green'}} in={open} timeout="auto" unmountOnExit>

                {cardData.map((item, index) => (
                    <List key={index} component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText
                                primary={<Typography fontWeight='bold' variant='body' component='div'>{item.primary1}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary1}</Typography>}
                                />
                            <ListItemText
                                primary={<Typography fontWeight='bold' variant='body' component='div'>{item.primary2}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary2}</Typography>}
                            />
                        </ListItemButton>
                    </List>
                ))}
            </Collapse>
        </List>
        </Stack>
    )
}

export default NetCost