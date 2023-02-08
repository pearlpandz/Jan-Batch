import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cartSlice';

export default function Product(props) {
    const { product } = props;
    const { image, title, id, description } = product;
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addCartItem(product));
    }

     return (
        <Card>
            <CardMedia
                sx={{ height: 220 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title.length > 25 ? title.slice(0,25) + "..." : title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.length > 95 ? description.slice(0, 95) + "..." : description }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleAddToCart()}>Add to Cart</Button>
                <Button size="small">View Product</Button>
            </CardActions>
        </Card>
    );
}