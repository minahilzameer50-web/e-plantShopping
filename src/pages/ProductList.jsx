import React, { useState } from "react";
import CartItem from "./CartItem";

const plants = [
  {
    id: "mint",
    name: "Mint",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=600&q=60",
    category: "Aromatic Plants",
  },
  {
    id: "lavender",
    name: "Lavender",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=600&q=60",
    category: "Aromatic Plants",
  },
  {
    id: "aloe",
    name: "Aloe Vera",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=600&q=60",
    category: "Medicinal Plants",
  },
  {
    id: "chamomile",
    name: "Chamomile",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=600&q=60",
    category: "Medicinal Plants",
  },
];

export default function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existing = cart.find((c) => c.id === plant.id);
    if (existing) {
      setCart(
        cart.map((c) =>
          c.id === plant.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const aromatic = plants.filter((p) => p.category === "Aromatic Plants");
  const medicinal = plants.filter((p) => p.category === "Medicinal Plants");

  return (
    <div style={{ width: "min(1000px, 95%)", margin: "20px auto", color: "#111" }}>
      <h2>Product Listing</h2>

      <h3>Aromatic Plants</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {aromatic.map((p) => (
          <div key={p.id} style={{ background: "white", padding: 12, borderRadius: 10 }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10 }} />
            <h4>{p.name}</h4>
            <p>Rs {p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 20 }}>Medicinal Plants</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {medicinal.map((p) => (
          <div key={p.id} style={{ background: "white", padding: 12, borderRadius: 10 }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10 }} />
            <h4>{p.name}</h4>
            <p>Rs {p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <CartItem cart={cart} setCart={setCart} />
    </div>
  );
}
