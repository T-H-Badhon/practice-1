import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product'

const Products = (props) => {
    const {fn}=props;
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data));
    },[])

    return (
        <div className='productsBody'>
            {
                products.map(p=> <Product key={p.id} product={p} fn={fn}></Product>)
            }
        </div>
    );
};

export default Products;