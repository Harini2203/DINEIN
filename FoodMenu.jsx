import React from "react";

export default function FoodMenu({ items, onAdd }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>🍴 Menu</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      }}>
        {items.map((food) => (
          <div key={food.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            width: "180px",
            background: "#fff",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
          }}>
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
            <button
              onClick={() => onAdd(food)}
              style={{
                padding: "8px 12px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
