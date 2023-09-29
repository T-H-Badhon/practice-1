import React from 'react';
import './Product.css'

const Product = (props) => {
    const fn=props.fn;
    const product=props.product;
    const {name,seller,price,ratings,img}=props.product;
    return (
        <div className='productBody'>
            <img src={img} alt="" />
            <div className='productInfo'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <h6>Manufracturer: {seller}</h6>
                <h6>Ratings: {ratings}</h6>
            </div>
            <div className="productFooter">
                <button onClick={()=> fn(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;