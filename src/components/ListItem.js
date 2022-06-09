import { Avatar, Divider, Fab, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function ({ image, name }) {
    return (
        <>
            <ListItem
                secondaryAction={
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                } disablePadding>
                <ListItemButton sx={{ py: 1 }}>
                    <ListItemAvatar>
                        <Avatar
                            alt={`product ${name}`}
                            src={image}
                            sx={{width: 50, height: 50}}
                        />
                    </ListItemAvatar>
                    <ListItemText sx={{ml: 2}} primary={name} />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}