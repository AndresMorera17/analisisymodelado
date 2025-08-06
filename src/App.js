import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import ListaUsuarios from "./pages/Usuarios/ListaUsuarios";
import CrearUsuario from "./pages/Usuarios/CrearUsuarios";
import EditarUsuario from "./pages/Usuarios/EditarUsuario";
import ListaProductos from "./pages/Productos/ListaProductos";
import CrearProducto from "./pages/Productos/CrearProducto";
import EditarProducto from "./pages/Productos/EditarProducto";
import Ventas from "./pages/Ventas";

import "./css/css1.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/usuarios/nuevo" element={<CrearUsuario />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/productos/nuevo" element={<CrearProducto />} />
          <Route path="/productos/editar/:id" element={<EditarProducto />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
