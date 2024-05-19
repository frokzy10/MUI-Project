import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, Badge} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = ({handleCartOpen, orderLen}) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h3" sx={{flexGrow: 1}}>
                    Nurdin
                </Typography>
                <IconButton color="inherit" onClick={handleCartOpen}>
                    <Badge color="secondary" badgeContent={orderLen}>
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;