import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./Payment.css";

export default function Payment({ cart = [], onComplete }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [upiId, setUpiId] = useState("");

  const navigate = useNavigate(); // ✅ initialize navigate

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => {
    if (paymentMethod === "card") {
      if (!cardNumber || !cvv || !expiry) {
        alert("⚠️ Please enter complete card details");
        return;
      }
    }

    if (
      (paymentMethod === "upi" ||
        paymentMethod === "paytm" ||
        paymentMethod === "amazon") &&
      !upiId
    ) {
      alert(`⚠️ Please enter your ${paymentMethod.toUpperCase()} ID`);
      return;
    }

    alert(`✅ Payment successful via ${paymentMethod.toUpperCase()}!`);

    // 🕒 Reset table and navigate after 10 secs
    if (onComplete) {
      setTimeout(() => {
        onComplete();
        alert("🪑 Your table has been vacated. Redirecting to home...");
        navigate("/"); // ✅ navigate to home page
      }, 10000);
    }
  };

  return (
    <div className="payment-page">
      <h1 className="payment-title">💳 Complete Your Payment</h1>

      {/* Order Summary */}
      <div className="payment-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price} × {item.qty}
            </li>
          ))}
        </ul>
        <h3>Total: ₹{total.toFixed(2)}</h3>
      </div>

      {/* Payment Options */}
      <div className="payment-methods">
        {["card", "upi", "paytm", "amazon", "cash"].map((method) => (
          <label key={method}>
            <input
              type="radio"
              value={method}
              checked={paymentMethod === method}
              onChange={() => setPaymentMethod(method)}
            />
            {method === "card" && "💳 Card"}
            {method === "upi" && "📲 UPI"}
            {method === "paytm" && "🅿 Paytm"}
            {method === "amazon" && "🛒 Amazon Pay"}
            {method === "scanner" && "📷 QR Scanner"}
            {method === "cash" && "💵 Cash"}
          </label>
        ))}
      </div>

      {/* Conditional Inputs */}
      {paymentMethod === "card" && (
        <div className="card-inputs">
          <input
            type="text"
            placeholder="Enter Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="payment-input"
          />
          <input
            type="text"
            placeholder="MM/YY (Expiry Date)"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="payment-input"
          />
          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="payment-input"
          />
        </div>
      )}

      {(paymentMethod === "upi" ||
        paymentMethod === "paytm" ||
        paymentMethod === "amazon") && (
        <input
          type="text"
          placeholder={`Enter ${paymentMethod.toUpperCase()} ID`}
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="payment-input"
        />
      )}

      

      <button className="btn-pay" onClick={handlePayment}>
        ✅ Pay Now
      </button>
    </div>
  );
}
