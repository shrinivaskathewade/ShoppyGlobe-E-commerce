import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if(cartItems.length === 0) return <p style={{textAlign:'center'}}>Cart is empty. <Link to="/">Shop now</Link></p>;

  return (
    <div className="cart">
      {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      <h2>Total: ${total.toFixed(2)}</h2>
      <Link to="/checkout"><button className="checkout-btn">Proceed to Checkout</button></Link>
    </div>
  );
};

export default Cart;
