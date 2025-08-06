import React from 'react';

function Reportes() {
  return (
    <div className="container mt-5">
      <h2 className="text-info mb-4">Reportes Disponibles</h2>
      <ul className="list-group mb-5">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Ventas Mensuales
          <button className="btn btn-outline-primary btn-sm">Ver Reporte</button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Productos más vendidos
          <button className="btn btn-outline-primary btn-sm">Ver Reporte</button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Resumen contable
          <button className="btn btn-outline-primary btn-sm">Ver Reporte</button>
        </li>
      </ul>

      <h3 className="text-secondary mb-3">Bitácoras del sistema</h3>
      <div className="d-grid gap-3">
        <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-light">
          <span>Bitácora de usuarios</span>
          <button className="btn btn-outline-secondary btn-sm">Ver Bitácora</button>
        </div>
        <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-light">
          <span>Bitácora de productos</span>
          <button className="btn btn-outline-secondary btn-sm">Ver Bitácora</button>
        </div>
        <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-light">
          <span>Bitácora de ventas</span>
          <button className="btn btn-outline-secondary btn-sm">Ver Bitácora</button>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
