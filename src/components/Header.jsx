import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo"><Link to="/">ShoppyGlobe</Link></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FaShoppingCart /> Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
