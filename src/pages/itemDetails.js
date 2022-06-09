import React from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';

export default function ItemDetails() {
  return (
    <div>
        <Box
          component="img"
          sx={{
            height: 350,
            width: 450,
            maxHeight: { xs: 233, md: 350 },
            maxWidth: { xs: 350, md: 450 },
            margin: "auto",
            padding: 4
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
      />
    </div>
  )
}
