import { Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Stack sx={{ position: 'relative', top: '55px'}}>
            <Typography variant='h6' fontWeight='bold' sx={{ display: 'flex', padding: '8px', paddingLeft:'16px' }}>Schedule Visit</Typography>
            <Divider/>

            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '21px 0px 36px ' }}>
                <Button variant='contained' color='success'fontSize='16px' sx={{ borderRadius: '10px', fontSize:'14px', fontWeight:'500' }} >CALL FOR VISIT</Button>
                <Button variant='contained' color='success'fontSize='16px' sx={{ borderRadius: '10px', fontSize:'14px', fontWeight:'500' }} >CALL FOR VISIT</Button>
            </div>
        </Stack>
    )
}

export default Footer