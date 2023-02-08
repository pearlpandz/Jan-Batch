import { Grid } from '@mui/material'
import React from 'react'
import Product from './product'

function ProductList({products}) {
  return (
    <Grid container justifyContent="flex-start" alignItems="center" spacing={5} sx={{padding: 5}}>
      {
        products.map(product => (
          <Grid item xs={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default ProductList