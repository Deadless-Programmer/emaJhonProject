import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  

  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (total * 7) / 100;
  const grandTotal = total + tax + totalShipping;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Item : {cart.length} </p>
      <p>Total Price $ {total} </p>
      <p>Total Shipping : {totalShipping} </p>
      <p>Tax : {tax.toFixed(2)} </p>
      <h4>Grand Total : {grandTotal.toFixed(2)} </h4>
    </div>
  );
};

export default Cart;
