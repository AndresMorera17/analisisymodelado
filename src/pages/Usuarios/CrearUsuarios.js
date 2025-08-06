import React from 'react';

function CrearUsuario() {
  return (
    <div>
      <h2 className="text-success">Agregar Usuario</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Ingrese el nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="usuario@correo.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <select className="form-select">
            <option>Administrador</option>
            <option>Vendedor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}

export default CrearUsuario;
