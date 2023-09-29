import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart)
    let no=0;
    return (
        <div className='cartBody'>
            {
                cart.map(d=> {
                    no++;
                    return (
                        <h6>{no} {d.name} {d.price}</h6>
                    )
                })
            }
            fksjof
        </div>
    );
};

export default Cart;