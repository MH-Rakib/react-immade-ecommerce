import React from "react";

const ReviewProduct = (props) => {
  const { img, name, seller, price, key } = props.product;
  return (
    <div className="single-product" style={{ borderBottom: "1px solid black" }}>
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-description">
        <h4>{name}</h4>
        <p>By: {seller}</p>
        <p>
          <strong>Price: {price}</strong>
        </p>

        {
          
        }

        <button onClick={() => props.event(key)} className="btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewProduct;
