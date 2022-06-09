import React from 'react';
import { Button, Avatar, Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate();
  
    const navigateStartHone = () => {
        navigate("/start_home");
    }

   
  return (
    <div>
        <br /><br />
        <Avatar
            alt ="ODSS Logo"
            sx={{width: 90, height: 90, margin: "auto", marginBottom: 30}}>
                Logo 
        </Avatar>
        <br /><br />

        <Grid container  spacing={{xs: 1}} columns={{xs: 1}} direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={2} sm={4}>
                <Button variant="contained" sx={{margin: "auto"}} onClick={navigateStartHone}>Scan Shop QR Code</Button>
            </Grid>
        
            <Grid item xs={2} sm={4}>
                <Button variant="contained" sx={{margin: "auto"}} onClick={navigateStartHone}>Manual Entering Shop ID</Button>  
            </Grid>
        </Grid>

       
       
        
    </div>
  )
}
