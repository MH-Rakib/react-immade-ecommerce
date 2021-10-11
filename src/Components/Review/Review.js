import React, { useEffect, useState } from "react";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import Cart from "../Cart/Cart";
import { Link, useHistory } from "react-router-dom";
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
    const newCartData = cartData.filter((prd) => prd.key !== productKey);
    setCartData(newCartData);
    removeFromDatabaseCart(productKey);
  };

  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();

  const handleProceedOrder = () => {
    history.push("/Shipment");
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const keys = Object.keys(savedCart);

    fetch(`http://localhost:5000/productsByKeys`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((data) => setCartData(data));

    // const cartProducts = keys.map((key) => {
    //   const product = fakeData.find((prd) => prd.key === key);
    //   product.quantity = savedCart[key];
    //   return product;
    // });
    // setCartData(cartProducts);
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
          <button onClick={handleProceedOrder} className="btn">
            Proceed to checkout
          </button>
          {/* </Link> */}
        </Cart>
      </div>
    </div>
  );
};

export default Review;
