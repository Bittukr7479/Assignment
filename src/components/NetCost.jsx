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
        <Stack padding='6px'>
            <List
                sx={{ boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.3)', width: '100%', backgroundColor: '#F3FBF0', borderRadius: '10px', fontSize: 'bold', padding: 'unset' }}
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick} sx={{ borderRadius: '10px', backgroundColor: '#F3FBF0', paddingLeft: '15px' }} >
                    <ListItemText primary={<Typography color='black' variant='h6' fontSize='20px' fontWeight='bold'>NetCost</Typography>} secondary="" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Divider />
                <Collapse sx={{ backgroundColor: '#F3FBF0', color: 'green', borderRadius: '10px', paddingBottom: '40px' }} in={open} timeout="auto" unmountOnExit>

                    {cardData.map((item, index) => (
                        <List key={index} component="div"  >
                            <ListItem sx={{ pl: 4, padding: '0px 0px 0px 15px', fontSize: '16px' }}>
                                <ListItemText
                                    primary={<Typography fontWeight='bold' variant='body' component='div'>{item.primary1}</Typography>}
                                    secondary={<Typography variant='body1' component='div'>{item.secondary1}</Typography>}
                                />
                                <ListItemText
                                    primary={<Typography fontWeight='bold' variant='body' component='div'>{item.primary2}</Typography>}
                                    secondary={<Typography variant='body1' component='div'>{item.secondary2}</Typography>}
                                />
                            </ListItem>
                        </List>
                    ))}
                </Collapse>
            </List>
        </Stack>
    )
}

export default NetCost