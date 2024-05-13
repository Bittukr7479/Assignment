import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HelpIcon from '@mui/icons-material/Help';
import { Typography } from '@mui/material';

const cardData = [
    {
        hName:'BasicInformation',
        primary1: '4kW',
        primary2: '4kW',
        secondary1:(<span>OmGrid <br />Monocrystalline</span>),
        secondary2:(<span>OmGrid <br />Polycrystalline</span>)
    },
    {
        hName:(<span style={{display:'flex'}}>Payable &nbsp;<HelpIcon sx={{color:'black'}}/></span>),
        primary1: 'INR 1,46,000',
        primary2: 'INR 1,46,000',
        secondary1: 'INR 50K per kW',
        secondary2: 'INR 49k per kW'
    },
]
function BasicInformation() {

    return (
        <div>
        {cardData.map((item, index) => (
        <List key={index}
            sx={{ width: '100%', bgcolor: 'background.paper', fontSize: 'bold', color: 'green', backgroundColor: 'white'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
                <ListItemText primary={<Typography sx={{display:'flex', borderBottom:'1px solid black', padding:'8px', paddingLeft:'32px'}}><h3 style={{ margin: "unset" , color:'green'}}>{item.hName}</h3></Typography>} secondary="" />
                    <List  component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 , paddingLeft: '32px'}}>
                            <ListItemText
                                primary={<Typography sx={{fontWeight:'bold'}} variant='body' component='div'>{item.primary1}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary1}</Typography>}
                                />
                            <ListItemText
                                primary={<Typography sx={{fontWeight:'bold'}} variant='body' component='div'>{item.primary2}</Typography>}
                                secondary={<Typography variant='body' component='div'>{item.secondary2}</Typography>}
                            />
                        </ListItemButton>
                    </List>
               
            
        </List> ))}
        </div>
    )
}

export default BasicInformation