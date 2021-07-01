import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const total = props.cart.reduce(
    (total, prd) => (total = total + prd.price),
    0
  );
  let shippingCost = 0.0;
  if (total == 0) {
    shippingCost = 0;
  } else if (total < 700) {
    shippingCost = 15.0;
  } else if (total > 700) {
    shippingCost = 0.0;
  }

  const vat = total / 10;

  const grandTotal = Number(total) + Number(vat) + Number(shippingCost);
  console.log(typeof grandTotal);
  const formatNumber = (num) => {
    const presicion = num.toFixed(2);
    return presicion;
  };

  return (
    <div className="yourCart">
      <h2>Your cart</h2>
      <h4>Total Order: {props.cart.length} products</h4>
      <h3>Total cost: ${formatNumber(total)}</h3>
      <h4>Shippig cost: ${formatNumber(shippingCost)}</h4>
      <h4>Taxs + Vat (10%): ${formatNumber(vat)}</h4>
      <hr />
      <h2>Sub Total: ${formatNumber(grandTotal)}</h2>
    </div>
  );
};

export default Cart;
