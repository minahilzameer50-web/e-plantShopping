import React from "react";

export default function CartItem({ cart, setCart }) {
  const inc = (id) => {
    setCart(cart.map((c) => (c.id === id ? { ...c, quantity: c.quantity + 1 } : c)));
  };

  const dec = (id) => {
    setCart(
      cart
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c))
        .filter((c) => c.quantity > 0)
    );
  };

  const remove = (id) => setCart(cart.filter((c) => c.id !== id));

  const total = cart.reduce((sum, c) => sum + c.price * c.quantity, 0);

  return (
    <div style={{ marginTop: 25 }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((c) => (
            <div
              key={c.id}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                background: "white",
                padding: 12,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <img src={c.image} alt={c.name} style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 10 }} />
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{c.name}</h4>
                <p style={{ margin: "6px 0" }}>Unit: Rs {c.price}</p>
                <p style={{ margin: "6px 0" }}>Item Total: Rs {c.price * c.quantity}</p>
              </div>

              <button onClick={() => dec(c.id)}>-</button>
              <b>{c.quantity}</b>
              <button onClick={() => inc(c.id)}>+</button>

              <button onClick={() => remove(c.id)}>Remove</button>
            </div>
          ))}

          <h3>Total Amount: Rs {total}</h3>
          <button>Continue Shopping</button>{" "}
          <button>Checkout</button>
        </>
      )}
    </div>
  );
}
