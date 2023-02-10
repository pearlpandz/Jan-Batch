import { Button, Grid } from '@mui/material';
import axios from 'axios';
import React from 'react'
import ProductList from '../../reusables/components/list-product';
import Product from '../../reusables/components/product'
import useFetch from '../../reusables/hooks/useFetch'

function HomePage() {
  const url = 'https://fakestoreapi.com/products';
  const { data: products, loading, error } = useFetch(url, []);

  if(loading) return <h1>fetching proudcts...</h1>

  if(error) return <h1>{JSON.stringify(error)}</h1>

  const addProduct = async () => {
    const payload = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    await axios.post(url, payload).then(res => {
        console.log(res);
    })
}

  return (
    <>
    <Button onClick={() => addProduct()}>add product</Button>
    <ProductList products={products} />
    </>
  )
}

export default HomePage