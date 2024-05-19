import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        cartClose = Function.prototype,
        order = [],
        removeFromOrder,
    } = props;
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={cartClose}
        >
            <List sx={{width: "400px"}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <Typography variant="h6">
                        Корзина
                    </Typography>
                </ListItem>
                <Divider/>
            </List>
            {!order.length ? (
                <ListItem>Корзина пуста</ListItem>
            ) : (
                <>
                    {order.map((item) => (
                        <BasketItem removeFromOrder={removeFromOrder} key={item.name} {...item}/>
                    ))}
                    <Divider/>
                    <ListItem>
                        <Typography>
                            Общая стоимость:{' '}
                            {order.reduce((acc, item) => {
                                return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            рублей.
                        </Typography>
                    </ListItem>
                </>
            )}
        </Drawer>
    );
};

export default Basket;