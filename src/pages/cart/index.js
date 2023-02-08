import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorBoundary from '../../reusables/components/error-boundary';
import HorizontalCard from './horizontalCard'


function CartPage() {

    const cartItems = useSelector(state => state.cartItems);
    const [actualItems, setActualItems] = useState([])


    useEffect(() => {
        const _actualItems = [...actualItems];
        cartItems.forEach(item => {
            let obj = {...item};
            const index = _actualItems.findIndex(a=> a.id === item.id);
            if(index > -1) { // already exist
                _actualItems[index].quantity = _actualItems[index].quantity + 1
            } else {
                obj['quantity'] = 1;
                _actualItems.push(obj);
            }
        });
        setActualItems(_actualItems);
    }, [])
    
    const updateQuantity = (id, quantity) => {
        const _actualItems = [...actualItems];
        const index = _actualItems.findIndex(a=> a.id === id);
        _actualItems[index].quantity = quantity;
        setActualItems(_actualItems);
    }

    const total = useMemo(() => {
        console.log('test');
        const prices = actualItems.map(a => a.price * a.quantity)
        return prices.reduce((a,b) => a+b, 0)
    }, [actualItems])

  return (
    <div>
        {
            actualItems?.map(product => (
                <ErrorBoundary key={product.id}>
                    <HorizontalCard product={product} updateQuantity={updateQuantity} />
                </ErrorBoundary>
            ))
        }
        <Divider />
        <Box sx={{padding: 2}}>
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <Typography>Total</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography>{total}</Typography>
            </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default CartPage