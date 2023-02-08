import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'
import useFetch from '../../reusables/hooks/useFetch';

function CategoryList() {
    const url = 'https://fakestoreapi.com/products/categories';
    const { data: categories } = useFetch(url, []);

  return (
    <div>
        {
            categories.map(category => (
                <Card sx={{width: 275, background: 'red', margin: 10 }}>
                    <CardContent>
                    <Typography variant='h1'>{category}</Typography>
                    </CardContent>
                </Card>
            ))
        }
    </div>
  )
}

export default CategoryList