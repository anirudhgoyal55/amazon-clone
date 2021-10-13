import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("hey", basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }
  return (
    <div className="product">
      <img
        className="product-image"
        src={image}
        alt=""
      />
      <div className="product-info">
        <p>
          <strong>{title}</strong>
        </p>
        <div className="product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div className="product-rating">
          <p>{rating}</p>
        </div>
      </div>
      <div className="dabutton">
        <button onClick={addToBasket}>Add to Basket</button>
      </div>

    </div>
  );
}

export default Product;
