import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div className="logo">🍽️ DineNDream</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/tables">Tables</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Our Restaurant</h1>
          <p>Order your favorite meals quickly and enjoy a seamless dining experience.</p>
          <button onClick={() => navigate("/tables")}>Reserve a Table</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>🍕 Delicious Menu</h2>
          <p>Wide variety of meals made with love.</p>
        </div>
        <div className="feature-card">
          <h2>🪑 Easy Booking</h2>
          <p>Select your table and seats easily.</p>
        </div>
        <div className="feature-card">
          <h2>💳 Multiple Payments</h2>
          <p>Pay securely with Card, UPI, or Cash.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
