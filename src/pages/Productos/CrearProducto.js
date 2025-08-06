import React from 'react';

function CrearProducto() {
  return (
    <div>
      <h2 className="text-success">Agregar Producto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Nombre del producto" />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" placeholder="₡0.00" />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}

export default CrearProducto;
