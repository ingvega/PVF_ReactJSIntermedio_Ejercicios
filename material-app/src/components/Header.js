import React from "react";
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import '../styles/styles.css';

const Header=()=>{
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className="fg-1">
                    Mi Aplicación
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar> 
        </AppBar>
    );
};

export default Header;