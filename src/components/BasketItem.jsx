import {IconButton, ListItem, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

const BasketItem = ({removeFromOrder, id, name, quantity, price}) => {
    return (
        <ListItem>
            <Typography variant="body1">
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;