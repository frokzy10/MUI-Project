import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const Snack = ({isOpen,handleClose = Function.prototype}) => {
    return (
        <Snackbar
            open={isOpen}
            onClick={handleClose}
            autoHideDuration={3000}
        >
            <Alert severity="success">
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    );
};

export default Snack;