import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, price, stock, seller, key } = props.product;

  return (
    <div className="single-product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-description">
        <h4>
          <Link to={`/product/${key}`}>{name}</Link>
        </h4>
        <p>By: {seller}</p>
        <p>
          <strong>Price: {price}</strong>
        </p>
        <h4>Only {stock} left in stock. Order soon! </h4>
        {props.showButton && (
          <button
            onClick={() => props.handleOnClick(props.product)}
            className="btn"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
