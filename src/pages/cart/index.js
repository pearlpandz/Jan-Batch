import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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

  return (
    <div>
        {
            actualItems?.map(product => (
                <HorizontalCard key={product.id} product={product} updateQuantity={updateQuantity} />
            ))
        }
    </div>
  )
}

export default CartPage