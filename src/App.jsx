import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

function Home() {
  return (
    <div className="background-image">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Explore aromatic and medicinal plants and add them to your cart.</p>

        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
             <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}
