import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <p key={item.id}>{item.title} x {item.quantity} = ${item.price * item.quantity}</p>
        ))}
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
