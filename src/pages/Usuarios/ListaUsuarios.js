import React from 'react';
import { Link } from 'react-router-dom';

function ListaUsuarios() {
  return (
    <div>
      <h2 className="text-primary">Usuarios</h2>
      <Link to="/usuarios/nuevo" className="btn btn-success mb-3">Agregar Usuario</Link>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ana Pérez</td>
            <td>ana@correo.com</td>
            <td>Administrador</td>
            <td>
              <Link to="/usuarios/editar/1" className="btn btn-warning btn-sm me-2">Editar</Link>
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;
