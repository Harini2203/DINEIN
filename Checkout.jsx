import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout({ order }) {
  const navigate = useNavigate();

  if (!order) return null;

  // Handle payment
  const handlePay = (method) => {
    alert(`✅ Payment successful via ${method.toUpperCase()}!`);
    navigate("/"); // redirect to home after payment
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">💳 Checkout</h1>

      {/* Order Summary Card */}
      <div className="checkout-card">
        <div className="checkout-item">
          <span>Subtotal</span>
          <span>₹{order.subtotal.toFixed(2)}</span>
        </div>
        <div className="checkout-item">
          <span>Tax</span>
          <span>₹{order.tax.toFixed(2)}</span>
        </div>
        <div className="checkout-item">
          <span>Service Charge</span>
          <span>₹{order.service.toFixed(2)}</span>
        </div>
        <div className="checkout-item total">
          <strong>Total</strong>
          <strong>₹{order.total.toFixed(2)}</strong>
        </div>
      </div>

      {/* Payment Options */}
      <div className="payment-options">
        <button className="btn upi" onClick={() => handlePay("upi")}>
          📲 UPI
        </button>
        <button className="btn card" onClick={() => handlePay("card")}>
          💳 Card
        </button>
        <button className="btn cash" onClick={() => handlePay("cash")}>
          💵 Cash
        </button>
      </div>

      <button className="btn back" onClick={() => navigate("/cart")}>
        ⬅ Back to Cart
      </button>
    </div>
  );
}
