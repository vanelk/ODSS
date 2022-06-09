import { List } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BottomNav from '../components/BottomNav'
import ListItem from '../components/ListItem'

export default function ItemList() {
    return (
        <Box>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem name="Headset" image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                <ListItem name="Headset" image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                <ListItem name="Headset" image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                <ListItem name="Headset" image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80" />
            </List>
            <BottomNav />
        </Box>
    )
}
