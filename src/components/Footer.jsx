import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Stack sx={{ position: 'relative', top: '55px'}}>
            <Typography sx={{ display: 'flex',boxShadow:'6', padding: '8px' }}><h3>Schedule Visit</h3></Typography>

            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0px' }}>
                <Button variant='contained' color='success' sx={{ borderRadius: '8px' }} >CALL FOR VISIT</Button>
                <Button variant='contained' color='success' sx={{ borderRadius: '8px' }} >CALL FOR VISIT</Button>
            </div>
        </Stack>
    )
}

export default Footer