import React from 'react'
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
            sx={{top:'8px', bgcolor: 'background.paper', fontSize: 'bold', color: 'red', backgroundColor: 'rgb(243 251 241)' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ textAlign:'center', paddingLeft:'32px'}}>
                  <Typography textAlign='justify' variant='h6' fontWeight='bold'> Rooftop solar quotes &nbsp;<HelpIcon /></Typography> 
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClick} sx={{borderRadius:'8px', boxShadow:'9', color: 'black', backgroundColor: '#d0e9d0'  }} >
                <ListItemText primary={<Typography color='black' paddingLeft='16px' variant='h6' fontWeight='bold'>XYZ Solar Solutions</Typography>} />
                <ListItemText primary={<Typography color='black' variant='h6' fontWeight='bold'>Annapurna Sola Tech</Typography>} />
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