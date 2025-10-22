import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css"; // ✅ Styling

function Menu({ menu, cart, setCart }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  // ✅ Unique categories
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(menu.map((i) => i.category || "Other")))],
    [menu]
  );

  // ✅ Filtered items
  const filtered = menu.filter(
    (i) =>
      (category === "All" || i.category === category) &&
      i.name.toLowerCase().includes(query.toLowerCase())
  );

  // ✅ Add Item
  const handleAdd = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ✅ Decrease Item
  const handleRemove = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing.qty === 1) {
        return prev.filter((p) => p.id !== item.id);
      }
      return prev.map((p) =>
        p.id === item.id ? { ...p, qty: p.qty - 1 } : p
      );
    });
  };

  // ✅ Get item quantity from cart
  const getQty = (id) => {
    const found = cart.find((p) => p.id === id);
    return found ? found.qty : 0;
  };

  return (
    <div className="menu-page">
      <h1 className="menu-title">🍴 Our Menu</h1>

      {/* 🔎 Search + Filter */}
      <div className="menu-filters">
        <input
          className="input"
          placeholder="Search menu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* 🛒 Floating Cart Button */}
      <button className="floating-cart" onClick={() => navigate("/cart")}>
        🛒 {cart.length}
      </button>

      {/* 🥘 Menu Items */}
      <div className="menu-grid">
        {filtered.map((item) => {
          const qty = getQty(item.id);
          return (
            <div className="menu-card" key={item.id}>
              {/* ✅ Image */}
              <div className="menu-img-wrapper">
                <img src={item.image} alt={item.name} className="menu-img" />
              </div>

              <h3>{item.name}</h3>
              <p className="category">{item.category || "Other"}</p>
              <p className="price">₹{item.price.toFixed(2)}</p>

              <div className="menu-actions">
                {qty === 0 ? (
                  <button className="btn" onClick={() => handleAdd(item)}>
                    ➕ Add
                  </button>
                ) : (
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => handleRemove(item)}>
                      ➖
                    </button>
                    <span className="qty-count">{qty}</span>
                    <button className="qty-btn" onClick={() => handleAdd(item)}>
                      ➕
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
