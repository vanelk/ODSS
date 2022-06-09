import React from 'react';
import { Button, Avatar } from '@mui/material';

export default function Home() {
   
  return (
    <div>
        
        <Avatar
        alt ="ODSS Logo"
        sx={{width: 90, height: 90}}> Logo </Avatar>
        <br />
        <Button variant="contained">Scan Shop QR Code</Button>
        <br /><br />
        <Button variant="contained">Manual Entering Shop ID</Button>
    </div>
  )
}
