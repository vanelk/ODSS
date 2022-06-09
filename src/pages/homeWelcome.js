import { Avatar, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BottomNav from '../components/BottomNav'
import SearchIcon from '@mui/icons-material/Search';
import CardItem from '../components/CardItem';

export default function HomeWelcome() {
    return (
        <Box sx={{ padding: '6px 16px' }}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 90, height: 90, margin: 'auto' }}
            />
            <Typography sx={{mt: 2}} variant='h3'>
                Hi Jack
            </Typography>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt: 3}}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Box sx={{mt: 3, display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '8px', maxWidth: '100%'}}>
                <CardItem image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    title="Headset"
                ></CardItem>
                <CardItem image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    title="Headset"
                ></CardItem>
            </Box>
            <BottomNav></BottomNav>
        </Box>
    )
}
