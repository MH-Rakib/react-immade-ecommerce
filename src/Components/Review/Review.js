import React, { useEffect, useState } from "react";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import fakeData from "../../assets/fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../assets/utilities/databaseManager";
import giphy from "../../assets/images/giphy.gif";

const Review = () => {
  const [cartData, setCartData] = useState([]);

  const handleRemove = (productKey) => {
    const newCartData = cartData.filter((prd) => prd.key != productKey);
    setCartData(newCartData);
    removeFromDatabaseCart(productKey);
  };

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCartData([]);
    setOrderPlaced(true);
    processOrder();
    console.log("order placed");
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const keys = Object.keys(savedCart);

    const cartProducts = keys.map((key) => {
      const product = fakeData.find((prd) => prd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCartData(cartProducts);
  }, []);
  return (
    <div className="container">
      <div className="products-container">
        {/* <h2>Total {cartData.length} products</h2> */}
        {cartData.map((prd) => (
          <ReviewProduct
            key={prd.key}
            event={handleRemove}
            product={prd}
          ></ReviewProduct>
        ))}
        {orderPlaced && <img src={giphy} alt="" />}
      </div>
      <div className="cart-container">
        <Cart cart={cartData}>
          {/* <Link to="/Review"> */}
          <button onClick={handlePlaceOrder} className="btn">
            Place Order
          </button>
          {/* </Link> */}
        </Cart>
      </div>
    </div>
  );
};

export default Review;
