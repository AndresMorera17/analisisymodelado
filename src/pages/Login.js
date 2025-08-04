import React from 'react';

function Login() {
  return (
    <div className="container mt-5">
      <h2 className="text-primary">Inicio de Sesión</h2>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="usuario" placeholder="Ingrese su usuario" />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="contrasena" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
