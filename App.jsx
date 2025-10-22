import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import TablePage from "./Pages/TablePage";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";




function App() {
  // ✅ Tables
  const [tables, setTables] = useState([
    { id: 1, seats: 2, isAvailable: true },
    { id: 2, seats: 4, isAvailable: true },
    { id: 3, seats: 6, isAvailable: false },
    { id: 4, seats: 2, isAvailable: true },
    { id: 5, seats: 4, isAvailable: true },
    { id: 6, seats: 6, isAvailable: true },
  ]);

  // ✅ Menu (images from /public/images/)
  const menu = [
    { id: 1, name: "Grilled Burger", price: 120, image: "/images/grilledburger.png" },
    { id: 2, name: "Masala Pizza", price: 250, image: "/images/Masala-Pizzas.png" },
    { id: 3, name: "Pasta", price: 180, image: "/images/tomatospicypasta.png" },
    { id: 4, name: "Coke", price: 60, image: "/images/coke.png" },
    { id: 5, name: "Indian tandoori paneer pizza", price: 229, image: "/images/IndianTandooriPaneer.png" },
    { id: 6, name: "Farm Heaven pizza", price: 199, image: "/images/farmheaven.png" },
    { id: 7, name: "Fries", price: 150, image: "/images/fries.png" },
    { id: 8, name: "Chocolate Brownie with icecream", price: 90, image: "/images/brownie.png" },
    { id: 9, name: "Mutton burger", price: 159, image: "/images/muttonkeemaburger.png" },
    { id: 10, name: "Ravioli", price: 149, image: "/images/butternut-squash-ravioli.jpg" },
    { id: 11, name: "Blueberry cake", price: 99, image: "/images/blueberrycake.png" },
    { id: 12, name: "Hotpot", price: 299, image: "/images/hotpot.png" },
    { id: 13, name: "Caramel cheesecake", price: 199, image: "/images/caramelcheesecake.png" },
    { id: 14, name: "Chicken roll", price: 149, image: "/images/chickenroll.png" },
    { id: 15, name: "Chicken tandoori Roll", price: 179, image: "/images/chickenTandooriRoll.png" },
    { id: 16, name: "Lasagna", price: 399, image: "/images/lasagna.png" },
    { id: 17, name: "Mushroom grilled pizza", price: 199, image: "/images/mushroomgrilledPizza.png" },
    { id: 18, name: "Margarita pizza", price: 199, image: "/images/margheritta.png" },
    { id: 19, name: "Nutella Waffle", price: 99, image: "/images/nutellaWaffle.png" },
    { id: 20, name: "Tiramisu", price: 249, image: "/images/Tiramisu.png" },
    { id: 21, name: "Paneer burger", price: 299, image: "/images/paneervegburger.png" },
    { id: 22, name: "Rainbow cake", price: 159, image: "/images/rainbowcake.png" },
    { id: 23, name: "Raspberry icecream", price: 129, image: "/images/raspberryicecream.png" },
    { id: 24, name: "Strawberry cheesecake", price: 199, image: "/images/strawberrycheesecake.png" },
    { id: 25, name: "Strawberry Delight", price: 149, image: "/images/strawberrydelight.png" },
    { id: 26, name: "Tandoori Paneer Double Cheese Pizza", price: 349, image: "/images/tadooripaneercheese.png" },
    { id: 27, name: "Veggie Sandwich", price: 129, image: "/images/vegsandwich.png" },
    { id: 28, name: "Waffer with icecream", price: 199, image: "/images/wafferwithcream.png" },
    { id: 29, name: "Red Velvet Lava Cake", price: 149, image: "/images/redvelvetLavacake.png" },
    { id: 30, name: "Sphagetti", price: 229, image: "/images/whitesaucesphagetti.png" }
  ];

  const [selectedTable, setSelectedTable] = useState(null);
  const [cart, setCart] = useState([]);

  // ✅ Vacate table after payment
  const handlePaymentComplete = () => {
    if (!selectedTable) return;

    setTimeout(() => {
      setTables((prev) =>
        prev.map((t) =>
          t.id === selectedTable ? { ...t, isAvailable: true } : t
        )
      );
      setSelectedTable(null); // reset
      setCart([]); // clear cart
    }, 10000); // 10 seconds
  };

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Table Selection */}
        <Route
          path="/tables"
          element={
            <TablePage
              tables={tables}
              setTables={setTables}
              setSelectedTable={setSelectedTable}
            />
          }
        />

        {/* Menu - only accessible if table is selected */}
        <Route
          path="/menu"
          element={
            selectedTable ? (
              <Menu menu={menu} cart={cart} setCart={setCart} />
            ) : (
              <Navigate to="/tables" />
            )
          }
        />

        {/* Cart - only accessible if table is selected */}
        <Route
          path="/cart"
          element={
            selectedTable ? (
              <Cart cart={cart} setCart={setCart} />
            ) : (
              <Navigate to="/tables" />
            )
          }
        />

        {/* Payment - only accessible if table is selected */}
        <Route
          path="/payment"
          element={
            selectedTable ? (
              <Payment cart={cart} onComplete={handlePaymentComplete} />
            ) : (
              <Navigate to="/tables" />
            )
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
