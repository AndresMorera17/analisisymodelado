import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'var(--azul)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/inicio">Gato Repuestos</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/inicio">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/productos">Ver Productos</Link></li>
                <li><Link className="dropdown-item" to="/productos/nuevo">Agregar Producto</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuarios
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/usuarios">Ver Usuarios</Link></li>
                <li><Link className="dropdown-item" to="/usuarios/nuevo">Agregar Usuario</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/reportes">Reportes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ventas">Ventas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Configuracion">Configuracion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
