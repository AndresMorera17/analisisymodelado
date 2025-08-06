import React from 'react';

function EditarProducto() {
  return (
    <div>
      <h2 className="text-warning">Editar Producto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" defaultValue="Filtro de aceite" />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" defaultValue="5000" />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" defaultValue="12" />
        </div>
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarProducto;
