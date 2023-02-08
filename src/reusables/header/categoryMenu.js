import React from 'react'
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './categoryMenu.css'

function CategoryMenu() {
    const url = 'https://fakestoreapi.com/products/categories';
    const { data: categories } = useFetch(url, []);

  return (
    <div className='secondary-navigation'>
            {
                categories.map((category, index) => (
                    <NavLink  style={({isActive}) => ({ color: isActive ? "red" : "#fff" }) } key={index} to={`category/${category}`}>{category.trim()}</NavLink>
                ))
            }
        </div>
  )
}

export default CategoryMenu