import React from 'react';
import { Link } from 'react-router-dom';

function ListaProductos() {
  return (
    <div>
      <h2 className="text-primary">Productos</h2>
      <Link to="/productos/nuevo" className="btn btn-success mb-3">Agregar Producto</Link>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>Filtro de aceite</td>
            <td>₡5.000</td>
            <td>12</td>
            <td>
              <Link to="/productos/editar/1001" className="btn btn-warning btn-sm me-2">Editar</Link>
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
