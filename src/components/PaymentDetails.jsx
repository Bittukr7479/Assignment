import React from 'react'
// import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Stack, Typography } from '@mui/material';

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
            <span><b>-</b></span>
        ),
        secondary2: (
            <span><b>-</b></span>
        )
    },
    {

        primary1: 'After Installation',
        primary2: 'After Installation',
        secondary1: (
            <span><b>INR 43K</b>(Central) <br /> <b>INR 20K</b>(State)</span>
        ),
        secondary2: (
            <span><b>INR 43K</b>(Central) <br /> <b>INR 20K</b>(State)</span>
        )
    }
]

function PaymentDetails() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (<Stack>

        <List
        sx={{width: '100%', bgcolor: 'background.paper', fontSize: 'bold', color: 'green'}}
        // component="nav"
        // aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader" >
        //     Rooftop solar quotes <HelpIcon />

        //   </ListSubheader>
        // }
        >
            <ListItemButton onClick={handleClick} sx={{boxShadow:'9', color: 'green', backgroundColor: '#d0e9d0', paddingLeft:'32px' }} >
                <ListItemText primary={<Typography><h3 style={{ margin: "unset" }}>PaymentDetails</h3></Typography>} secondary="" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse sx={{ color: 'green', backgroundColor: '#d0e9d0' }} in={open} timeout="auto" unmountOnExit>

                {cardData1.map((item, index) => (
                    <List key={index} component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary1}</Typography>}
                                secondary={<Typography fontWeight='bold' variant='body' component='div'>{item.secondary1}</Typography>}
                            />
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary2}</Typography>}
                                secondary={<Typography fontWeight='bold' variant='body' component='div'>{item.secondary2}</Typography>}
                            />
                        </ListItemButton>
                    </List>
                ))}
                <ListItemText primary={<Typography sx={{ display: 'flex', borderBottom: '1px solid black', padding: '8px', paddingLeft: '32px'}}><h3 style={{ margin: "unset", color:'green' }}>Subsidy</h3></Typography>} sx={{ borderBottom: '1px solid black' }} />
                {cardData2.map((item, index) => (
                    <List key={index} component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary1}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary1}</Typography>}
                            />
                            <ListItemText
                                primary={<Typography variant='body' component='div'>{item.primary2}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary2}</Typography>}
                            />
                        </ListItemButton>
                    </List>
                ))}
            </Collapse>
        </List>

    </Stack>)
}

export default PaymentDetails