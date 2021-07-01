import React, { useState } from "react";
import fakeData from "../../assets/fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const products = fakeData.splice(0, 10);
  const [product, setProduct] = useState(products);
  const [cart, setCart] = useState([]);
  const handleOnClick = (product) => {
    console.log("Product Added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="container">
      <div className="products-container">
        <h2>All the Products</h2>
        {product.map((product) => (
          <Product product={product} handleOnClick={handleOnClick}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
