import React from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ItemDetails() {

    return (
        <Box sx={{ padding: 4 }}>
            <Box
                component="img"
                sx={{
                    height: 350,
                    width: 450,
                    maxHeight: { xs: 233, md: 350 },
                    maxWidth: { xs: 350, md: 450 },
                    margin: "auto",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
            />

            <Grid container spacing={{ xs: 4 }} columns={{ xs: 6 }} direction="row" alignItems="center" justifyContent="center">
                <Grid item xs={4}>
                    <Typography variant="h5" component="h5">
                        Product: Headset
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5" component="h5">
                        Price: $100
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5" component="h5">
                        Description: Headset to be use with Phones
                    </Typography>
                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
            <Link to="/list">
                <Button variant="contained" size="large" sx={{ position: 'absolute', right: 40, bottom: 20 }}>Add To Cart</Button>
            </Link>
        </Box>
    )
}
