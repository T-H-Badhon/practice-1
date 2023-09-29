import React, { useState } from 'react';
import './Body.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

 


const Body = () => {
    const [cart, setCart]=useState([]);
    const cartSummary=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart)
    }

    return (
        <div className='body'>
            <div>
                <Products fn={cartSummary}></Products>
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body