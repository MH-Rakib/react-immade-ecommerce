import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, stock, seller } = props.product;

  return (
    <div className="single-product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-description">
        <h4>{name}</h4>
        <p>By: {seller}</p>
        <p>
          <strong>Price: {price}</strong>
        </p>
        <h4>Only {stock} left in stock. Order soon! </h4>
        <button
          onClick={() => props.handleOnClick(props.product)}
          className="btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
