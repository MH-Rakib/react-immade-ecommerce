import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../assets/fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../assets/utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // const products = fakeData.splice(0, 10);
  const [product, setProduct] = useState(fakeData);
  // console.log(product);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = getDatabaseCart();
    const productKeys = Object.keys(cart);
    // console.log(productKeys);
    const cartData = productKeys.map((eachKey) => {
      const product = fakeData.find((prd) => prd.key === eachKey);
      // console.log(product);
      product.quantity = cart[eachKey];
      // console.log(product);
      return product;
    });
    setCart(cartData);
  }, []);

  const handleOnClick = (product) => {
    // console.log("Product Added", product);

    const similarProduct = cart.find((prd) => product.key === prd.key);

    if (similarProduct) {
      const count = product.quantity + 1;
      product.quantity = count;
      const others = cart.filter((prd) => prd.key != product.key);
      const newCart = [...others, product];
      setCart(newCart);
    } else {
      product.quantity = 1;
      const newCart = [...cart, product];
      setCart(newCart);
    }

    const count = product.quantity;

    addToDatabaseCart(product.key, count);

    // const newCart = [...cart, product];
    // setCart(newCart);
  };

  return (
    <div className="container">
      <div className="products-container">
        <h2>All the Products</h2>
        {product.map((product) => (
          <Product
            key={product.key}
            showButton={true}
            product={product}
            handleOnClick={handleOnClick}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/Review">
            <button className="btn">Review product</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
