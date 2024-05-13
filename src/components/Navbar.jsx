import { Stack, Typography } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';



function Navbar() {
    return (
        <div className="Navbar">
            <Stack boxShadow='6' direction="row" spacing={1} p={1} sx={{ position: 'stick', background: 'white', alignItems: 'center', textAlign: 'center' }}>
                <DehazeIcon color='secondary' sx={{color:'rgb(54 151 29 / 83%)'}} />
                <Typography width='100%' fontWeight='bold' variant='h6'><span style={{color:'#76d176'}}>vay</span>solar</Typography>
            </Stack >

        </div>
    );
}

export default Navbar;
