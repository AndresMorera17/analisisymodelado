import React from 'react';

function EditarUsuario() {
  return (
    <div>
      <h2 className="text-warning">Editar Usuario</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" defaultValue="Ana Pérez" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" defaultValue="ana@correo.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <select className="form-select" defaultValue="Administrador">
            <option>Administrador</option>
            <option>Vendedor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarUsuario;
