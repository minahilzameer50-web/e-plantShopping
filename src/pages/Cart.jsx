import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartItemCard({ item, onInc, onDec, onRemove }) {
  const { plant, qty } = item;
  const total = plant.price * qty;

  return (
    <div className="cartCard">
      <img className="cartCard__img" src={plant.image} alt={plant.name} />
      <div className="cartCard__info">
        <h4>{plant.name}</h4>
        <p className="muted">{plant.description}</p>

        <div className="cartCard__meta">
          <span>Unit: <b>Rs {plant.price}</b></span>
          <span>Total: <b>Rs {total}</b></span>
        </div>

        <div className="cartCard__actions">
          <button className="btn btn--small" onClick={() => onDec(plant.id)}>-</button>
          <span className="qty">{qty}</span>
          <button className="btn btn--small" onClick={() => onInc(plant.id)}>+</button>

          <button className="btn btn--danger btn--small" onClick={() => onRemove(plant.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const { cartItems, totalCost, inc, dec, remove, clear } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return alert("Cart is empty!");
    alert("Checkout demo: Order placed ✅");
    clear();
  };

  return (
    <main className="container">
      <h2 className="pageTitle">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty.</p>
          <Link to="/products" className="btn btn--primary">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cartList">
            {cartItems.map((item) => (
              <CartItemCard
                key={item.plant.id}
                item={item}
                onInc={inc}
                onDec={dec}
                onRemove={remove}
              />
            ))}
          </div>

          <div className="cartFooter">
            <div className="totalBox">
              <span>Grand Total:</span>
              <b>Rs {totalCost}</b>
            </div>

            <div className="cartButtons">
              <Link to="/products" className="btn">
                Continue Shopping
              </Link>
              <button className="btn btn--primary" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
