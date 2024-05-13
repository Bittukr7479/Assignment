import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Stack, Typography } from '@mui/material';

const cardData = [
    {
        hName: 'Solar Panels',
        primary1: '550Wx9 Adani ',
        primary2: '550Wx9 Adarenty'
    },
    {
        hName: 'Inverter',
        primary1: '550Wx9 Adani ',
        primary2: '550Wx9 Adarenty'
    },
    {
        hName: 'Structure',
        primary1: 'grehbvsr',
        primary2: '550Wx9 Adarenty'
    },
    {
        hName: 'Cable',
        primary1: '550Wx9 Adani',
        primary2: '550Wx9 Adarenty'
    }
]
function Materials() {

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
        >
            <ListItemButton onClick={handleClick} sx={{boxShadow:'9', color: 'green', backgroundColor: '#d0e9d0', paddingLeft:'32px'}} >
                <ListItemText primary={<Typography><h3 style={{ margin: "unset" }}>Materials</h3></Typography>} secondary="" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse sx={{backgroundColor:'#d0e9d0', color:'green'}} in={open} timeout="auto" unmountOnExit>

                {cardData.map((item, index) => (
                    <List 
                     key={index} component="div" disablePadding>
                        <ListItemText
                            primary={<Typography  sx={{borderBottom: '1px solid black', fontWeight:'bold', color:'green'}}  padding='8px' paddingLeft='32px' align="left">{item.hName}</Typography>}
                            margin="unset"
                        />
                        <ListItemButton sx={{ pl: 4, paddingLeft:'32px'}}>
                            <ListItemText
                                primary={<Typography variant='body'component='div'>{item.primary1}</Typography>}
                            />
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary2}</Typography>}
                            />
                        </ListItemButton>
                    </List>
                ))}
            </Collapse>
        </List>
        </Stack>
    )
}

export default Materials