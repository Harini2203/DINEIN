import React from "react";

function TableSelector({ tables, onSelect }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>🪑 Choose Your Table</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {tables.map((table) => (
          <button
            key={table.id}
            disabled={!table.isAvailable}
            onClick={() => onSelect(table)}
            style={{
              margin: "10px",
              padding: "20px",
              minWidth: "120px",
              background: table.isAvailable ? "#4CAF50" : "#999",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: table.isAvailable ? "pointer" : "not-allowed",
              fontSize: "16px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.2)"
            }}
          >
            Table {table.id} <br />
            Seats: {table.seats} <br />
            {table.isAvailable ? "✅ Available" : "❌ Occupied"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TableSelector;
