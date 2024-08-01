import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
