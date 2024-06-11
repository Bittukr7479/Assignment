import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider, ListItem, Stack, Typography } from '@mui/material';

const cardData = [
    {
        hName: 'Solar Panels',
        primary1: (<span style={{ lineHeight: '1.5' }}>550W x 9<br /> Adani Mono Panels <br />25 yr warranty</span>),
        primary2: (<span style={{ lineHeight: '1.5' }}>550W x 10<br /> Tata Mono Panels <br />30 yr warranty</span>),
    },
    {
        hName: 'Inverter',
        primary1: (<span style={{ lineHeight: '1.5' }}>3kW x 1<br /> Havells <br />5 yr warranty</span>),
        primary2: (<span style={{ lineHeight: '1.5' }}>3kW x 1<br /> Sungrow <br />8 yr warranty</span>),
    },
    {
        hName: 'Structure',
        primary1: '6ft GI Iron',
        primary2: '3ft Aluminium'
    },
    {
        hName: 'Cable',
        primary1: (<span style={{ lineHeight: '1.5' }}>$Spec x Qty<br />$Brand <br />$Warranty</span>),
        primary2: (<span style={{ lineHeight: '1.5' }}>3kW x 1<br />Sungrow <br />8 yr warranty</span>),
    }
]
function Materials() {

    const [open, setOpen] = React.useState(false);


    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Stack padding='6px'>
            <List
                sx={{ boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.3)', borderRadius: '10px', width: '100%', backgroundColor: '#F3FBF0', fontSize: 'bold', padding: 'unset' }}
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick} sx={{ borderRadius: '10px', paddingLeft: '15px' }} >
                    <ListItemText primary={<Typography color='black' fontWeight='bold' variant='h3'>Materials</Typography>} secondary="" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse sx={{ color: 'green' }} in={open} timeout="auto" unmountOnExit>
                    {cardData.map((item, index) => (
                        <List
                            key={index} component="div" disablePadding>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: 'bold', color: 'green' }} padding='8px 8px 10px 8px' paddingLeft='15px' align="left">{item.hName}</Typography>}
                                margin="unset"
                            />
                            <Divider />
                            <ListItem sx={{ pl: 4, display: 'flex', paddingLeft: '15px', alignItems: 'flex-start' }}>
                                <ListItemText
                                    sx={{ width: '50%', fontSize: '16px' }}
                                    primary={<Typography variant='body' component='div'>{item.primary1}</Typography>}
                                />
                                <ListItemText
                                    sx={{ width: '50%', fontSize: '16px' }}
                                    primary={<Typography variant='body' component='div'>{item.primary2}</Typography>}
                                />
                            </ListItem>
                        </List>
                    ))}
                </Collapse>
            </List>
        </Stack>
    )
}

export default Materials