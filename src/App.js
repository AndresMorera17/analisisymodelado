import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import Usuarios from "./pages/Usuarios";
import Reportes from "./pages/Reportes";
import Inicio from "./pages/Inicio";
import Ventas from "./pages/Ventas";

import "./css/css1.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />{" "}
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/ventas" element={<Ventas />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
