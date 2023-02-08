import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../../reusables/components/list-product';
import useFetch from '../../reusables/hooks/useFetch';

function CategoryPage() {
    const { name } = useParams();
    const url = `https://fakestoreapi.com/products/category/${name}`;
    const { data, loading, error } = useFetch(url, []);

    if(loading) return <h1>fetching proudcts...</h1>

    if(error) return <h1>{JSON.stringify(error)}</h1>

    return (
        <ProductList products={data} />
    )
}

export default CategoryPage