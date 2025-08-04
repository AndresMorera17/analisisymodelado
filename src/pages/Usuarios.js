import React from 'react';

function Usuarios() {
  return (
    <div className="container mt-5">
      <h2 className="text-warning mb-4">Gestión de Usuarios</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Correo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>admin</td>
            <td>Gerardo Morera</td>
            <td>Administrador</td>
            <td>admin@gato.com</td>
            <td>Activo</td>
          </tr>
          <tr>
            <td>cajera1</td>
            <td>Luisa Campos</td>
            <td>Cajera</td>
            <td>luisa@gato.com</td>
            <td>Activo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
