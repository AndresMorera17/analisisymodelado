import React from 'react';

function Reportes() {
  return (
    <div className="container mt-5">
      <h2 className="text-info mb-4">Reportes Disponibles</h2>
      <ul className="list-group">
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
    </div>
  );
}

export default Reportes;
