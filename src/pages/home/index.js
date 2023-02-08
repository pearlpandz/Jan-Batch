import { Grid } from '@mui/material';
import React from 'react'
import ProductList from '../../reusables/components/list-product';
import Product from '../../reusables/components/product'
import useFetch from '../../reusables/hooks/useFetch'

function HomePage() {
  const url = 'https://fakestoreapi.com/products';
  const { data: products, loading, error } = useFetch(url, []);

  if(loading) return <h1>fetching proudcts...</h1>

  if(error) return <h1>{JSON.stringify(error)}</h1>

  return (
    <ProductList products={products} />
  )
}

export default HomePage