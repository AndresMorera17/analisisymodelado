import React from 'react';

function Productos() {
  return (
    <div className="container mt-5">
      <h2 className="text-danger mb-4">Listado de Productos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00123</td>
            <td>Filtro de aceite</td>
            <td>Motor</td>
            <td>₡5,000</td>
            <td>15</td>
            <td>Disponible</td>
          </tr>
          <tr>
            <td>00456</td>
            <td>Bujías</td>
            <td>Encendido</td>
            <td>₡3,500</td>
            <td>8</td>
            <td>Bajo Stock</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
