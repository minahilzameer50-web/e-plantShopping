import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero__text">
          <h1>The Paradise Nursery</h1>
          <p>
            Explore aromatic and medicinal plants with a clean shopping cart
            experience.
          </p>
          <Link to="/products" className="btn btn--primary">
            Go to Product Listing
          </Link>
        </div>
        <div className="hero__card">
          <h3>Why choose us?</h3>
          <ul>
            <li>Fresh and well-maintained plants</li>
            <li>Clear pricing</li>
            <li>Fast cart controls</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
