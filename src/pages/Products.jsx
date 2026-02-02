import React, { useMemo } from "react";
import { plants } from "../data/plants";
import { useCart } from "../context/CartContext";

function PlantCard({ plant, onAdd }) {
  return (
    <div className="card">
      <img className="card__img" src={plant.image} alt={plant.name} />
      <div className="card__body">
        <h4 className="card__title">{plant.name}</h4>
        <p className="card__desc">{plant.description}</p>
        <div className="card__row">
          <span className="price">Rs {plant.price}</span>
          <button className="btn btn--small" onClick={() => onAdd(plant)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const { addToCart } = useCart();

  const grouped = useMemo(() => {
    const map = {};
    for (const p of plants) {
      map[p.category] = map[p.category] || [];
      map[p.category].push(p);
    }
    return map;
  }, []);

  return (
    <main className="container">
      <h2 className="pageTitle">Product Listing</h2>

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="section">
          <h3 className="section__title">{category}</h3>
          <div className="grid">
            {items.map((plant) => (
              <PlantCard key={plant.id} plant={plant} onAdd={addToCart} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
