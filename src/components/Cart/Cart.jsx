import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart)
    let no=0;
    return (
        <div>
            <h3>Order Summary</h3>
            <div className='cartBody'>
            
                {
                    cart.map(d=> {
                        no++;
                        return (
                            <div className="cart-item">
                                <div>
                                    <h6>{no} {d.name}</h6>
                                </div>
                                <div>
                                    <h6>{d.price}</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Cart;