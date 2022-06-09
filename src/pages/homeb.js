import React from 'react';
import { Button, Typography, Avatar, Grid } from '@mui/material';

export default function HomeB(){
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
                        <Button variant="contained" size="large">Start Shopping</Button>
                    </Grid>
                </Grid>
        </>
    )
}