import React from 'react';

function Configuracion() {
  return (
    <div>
      <h2 className="text-secondary">Configuración General</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre de la Empresa</label>
          <input type="text" className="form-control" defaultValue="Gato Repuestos" />
        </div>

        <div className="mb-3">
          <label className="form-label">Moneda</label>
          <select className="form-select">
            <option>₡ Colón (CRC)</option>
            <option>$ Dólar (USD)</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Logo de la Empresa</label>
          <input type="file" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default Configuracion;
