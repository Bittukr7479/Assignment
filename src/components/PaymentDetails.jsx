import React from 'react'
// import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider, Stack, Typography, ListItem } from '@mui/material';

const cardData1 = [
    {

        primary1: 'Advance',
        primary2: 'Advance',
        secondary1: '12% - INR 30K',
        secondary2: '12% - INR 30K'
    },
    {

        primary1: 'Before Despatch',
        primary2: 'Before Despatch',
        secondary1: '20% - INR 60K',
        secondary2: '20% - INR 60K'
    },
    {

        primary1: 'After Despatch',
        primary2: 'After Despatch',
        secondary1: '40% - INR 1.2L',
        secondary2: '40% - INR 1.2L'
    },
    {

        primary1: 'After Despatch',
        primary2: 'After Despatch',
        secondary1: '20% - INR 60K',
        secondary2: '20% - INR 60K'
    },
]

const cardData2 = [
    {

        primary1: 'Before Installation',
        primary2: 'Before Installation',
        secondary1: (
            <span style={{ lineHeight: '1.4' }}><b>-</b></span>
        ),
        secondary2: (
            <span style={{ lineHeight: '1.4' }}><b>-</b></span>
        )
    },
    {

        primary1: 'After Installation',
        primary2: 'After Installation',
        secondary1: (
            <span style={{ lineHeight: '1.4' }}><b>INR 43K</b>(Central) <br /> <b>INR 20K</b>(State)</span>
        ),
        secondary2: (
            <span style={{ lineHeight: '1.4' }}><b>INR 43K</b>(Central) <br /> <b>INR 20K</b>(State)</span>
        )
    }
]

function PaymentDetails() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (<Stack padding='6px'>

        <List
            sx={{ boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.3)', borderRadius: '10px', width: '100%', backgroundColor: '#F3FBF0', fontSize: 'bold', padding: 'unset' }}
        >
            <ListItemButton onClick={handleClick} sx={{ borderRadius: '10px', color: 'black', backgroundColor: '#F3FBF0', paddingLeft: '15px' }} >
                <ListItemText primary={<Typography variant='h6' fontWeight='bold' color='black'>PaymentDetails</Typography>} secondary="" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse sx={{ color: 'green', backgroundColor: '#F3FBF0', borderRadius: '10px', }} in={open} timeout="auto" unmountOnExit>
                <Divider />
                {cardData1.map((item, index) => (
                    <List key={index} component="div" disablePadding>
                        <ListItem sx={{ pl: 4, paddingLeft: '15px' }}>
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary1}</Typography>}
                                secondary={<Typography fontWeight='bold' variant='body' component='div'>{item.secondary1}</Typography>}
                            />
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary2}</Typography>}
                                secondary={<Typography fontWeight='bold' variant='body' component='div'>{item.secondary2}</Typography>}
                            />
                        </ListItem>
                    </List>
                ))}
                <ListItemText primary={<Typography variant='h6' sx={{ fontWeight: 'bold', display: 'flex', padding: '8px', paddingLeft: '15px' }}>Subsidy</Typography>} />
                <Divider />
                {cardData2.map((item, index) => (
                    <List key={index} component="div" disablePadding>
                        <ListItem sx={{ pl: 4, paddingLeft: '15px' }}>
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary1}</Typography>}
                                secondary={<Typography variant='body' paddingTop='8px' component='div'>{item.secondary1}</Typography>}
                            />
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary2}</Typography>}
                                secondary={<Typography variant='body' paddingTop='8px' component='div'>{item.secondary2}</Typography>}
                            />
                        </ListItem>
                    </List>
                ))}
            </Collapse>
        </List>

    </Stack>)
}

export default PaymentDetails