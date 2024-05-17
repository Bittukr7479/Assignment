import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import { Divider, ListItem, Stack, Typography } from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const cardData = [
    {
        hName: 'Experience',
        primary1: (<span style={{display:'flex', alignItems:'center'}}>3 years&nbsp;<GppGoodIcon/></span>),
        primary2: (<span style={{display:'flex', alignItems:'center'}}>12 years&nbsp;<GppGoodIcon/></span>),
    },
    {
        hName: 'Certification',
        primary1: (<span style={{ lineHeight: '1.3', fontSize:'16px', fontWeight:'normal' }}>MNRE Certified<br /> BSES Empanelled <br />TPDDL Empanelled</span>),
        primary2: (<span style={{ lineHeight: '1.3', fontSize:'16px', fontWeight:'normal' }}>TPDDL Empanelled<br />  <br /></span>),
    },
    {
        hName: '',
        primary1: (<span style={{display:'flex', alignItems:'center',justifyContent: 'space-around', lineHeight: '1.3', fontSize:'16px', fontWeight:'normal' }}>Full Profile &nbsp;<ArrowCircleRightIcon fontSize='16px' /></span>),
        primary2: (<span style={{display:'flex', alignItems:'center',justifyContent: 'space-around', lineHeight: '1.3', fontSize:'16px', fontWeight:'normal' }}>Full Profile &nbsp;<ArrowCircleRightIcon fontSize='16px' /></span>),
    }
]
function RooftopSolarQuotes() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Stack padding='6px'>
            <List
                sx={{ boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.3)', borderRadius: '10px', width: '100%', backgroundColor: '#F3FBF0', fontSize: 'bold', padding: 'unset' }}
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader sx={{ position: 'relative', padding: '7px 5px' }} component="div" id="nested-list-subheader" >
                        <Typography color='black' display='flex' alignItems='center' variant='h6' fontWeight={500} fontSize='23px' >
                            Rooftop solar quotes&nbsp; <HelpIcon />
                        </Typography>
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick} sx={{ borderRadius: '10px', paddingLeft: '15px' }} >
                    <ListItemText primary={<Typography color='black' fontWeight='bold' variant='h6'>Materials</Typography>} secondary="" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse sx={{ color: 'green' }} in={open} timeout="auto" unmountOnExit>
                    {cardData.map((item, index) => (
                        <List
                            key={index} component="div" disablePadding>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: 'bold', fontSize:'20px',color: 'green' }} padding='8px 8px 10px 8px' paddingLeft='15px' align="left">{item.hName}</Typography>}
                                margin="unset"
                            />
                            <Divider />
                            <ListItem sx={{ pl: 4, display: 'flex', paddingLeft: '15px', alignItems: 'flex-start' , fontSize:'20px', fontWeight:'bold'}}>
                                <ListItemText
                                    sx={{ width: '50%'}}
                                    primary={<Typography variant='body' component='div'>{item.primary1}</Typography>}
                                />
                                <ListItemText
                                    sx={{ width: '50%'}}
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

export default RooftopSolarQuotes