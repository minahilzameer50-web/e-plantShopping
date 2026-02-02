import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalQty } = useCart();

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="brand">
          🌿 Paradise Nursery
        </Link>

        <nav className="links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Landing
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
            Product Listing
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
            Cart <span className="badge">{totalQty}</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
  About Us
</NavLink>
         
          <NavLink to="/products" className={({isActive}) => isActive ? "active" : ""}>
            Product Listing
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
