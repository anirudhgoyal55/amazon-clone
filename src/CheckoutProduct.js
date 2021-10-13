import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ image, title, price, rating }) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct-image' src={image} />

            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>₹</small>
                    <strong>{price}</strong></p>
                <p className='checkoutProduct-rating'>{rating}</p>
            </div>
            <button>Remove from basket</button>

        </div>
    )
}

export default CheckoutProduct
