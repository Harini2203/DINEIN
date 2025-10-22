import React from "react";
import "./Home.css";

function Home({ onStart }) {
  return (
    <div>
      <header>
        <div className="logo">🍽️ DineNDream</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Tables</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Our Restaurant</h1>
          <p>Order your favorite meals quickly and enjoy a seamless dining experience.</p>
          <button onClick={onStart}>Reserve a Table</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>🍕 Delicious Menu</h2>
          <p>Choose from a wide variety of dishes crafted with love.</p>
        </div>
        <div className="feature-card">
          <h2>🪑 Easy Table Booking</h2>
          <p>Select your preferred table and seat count easily.</p>
        </div>
        <div className="feature-card">
          <h2>💳 Multiple Payments</h2>
          <p>Pay securely with Card, UPI, or Cash at your convenience.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 DineNDream | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
