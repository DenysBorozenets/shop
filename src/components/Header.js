import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="nav">
          <li>About</li>
          <li>Contact</li>
          <li>Account</li>
        </ul>
        <FaShoppingBag
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
