import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const GoodsItem = (props) => {
    const {name, price, poster, setOrder} = props;

    return (
        <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    image={poster}
                    className={name}
                    alt={name}
                    sx={{height: 160}}
                />
                <CardContent>
                    <Typography variant="h5" component="h3">{name}</Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;