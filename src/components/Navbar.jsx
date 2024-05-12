import { Stack } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';


function Navbar() {
    return (
        <div className="Navbar">
            <Stack boxShadow='6' direction="row" textAlign='center' alignItems="center" spacing={2} p={1} sx={{ position: 'stick', background: 'white', alignItems: 'center', textAlign: 'center' }}>
                <DehazeIcon color='secondary' sx={{color:'rgb(54 151 29 / 83%)'}} />
                <h2 style={{ margin: 'auto', color:'green', backgroundColor:'white' }}><span style={{color:'#76d176'}}>vay</span>solar</h2>
            </Stack >

        </div>
    );
}

export default Navbar;
