import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
    const navigate = useNavigate()
    const location = useLocation()
    const [value, setValue] = React.useState('recents');
    React.useEffect(()=>{
        setValue(location.pathname)
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue);
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation sx={{}} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="/home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="List"
                    value="/list"
                    icon={<ShoppingCartIcon />}
                />
                <BottomNavigationAction
                    label="Receipt"
                    value="/receipt"
                    icon={<ReceiptIcon />}
                />
                <BottomNavigationAction label="Scan Item" value="/scan" icon={<QrCode2Icon />} />
            </BottomNavigation>
        </Paper>
    );
}