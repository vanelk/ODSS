import React from 'react';
import { Button, Typography, Avatar, Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function HomeB(){

    const navigate = useNavigate();
  
    const navigateHone = () => {
        navigate("/home");
    }

    return (
        <>
                 <br /><br />
                <Avatar
                    alt ="Rema Logo"
                    sx={{width: 90, height: 90, margin: "auto", marginBottom: 30}}>
                        Rema 
                </Avatar>
                <br /><br />

                <Grid container spacing={{xs: 8}} columns={{xs: 1}} direction="column" alignItems="center" justifyContent="center">
                    <Grid item xs={2} sm={4}>
                        <Typography variant="h5" component="h5">
                            Welcome To Rema 1000 Shop
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Button variant="contained" size="large" onClick={navigateHone}>Start Shopping</Button>
                    </Grid>
                </Grid>
        </>
    )
}