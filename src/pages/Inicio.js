import React from 'react';

function Inicio() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="text-primary">Bienvenido a Gato Repuestos</h1>
        <p className="lead">
          "Potenciamos tu motor, movemos tu camino"
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title text-success">Visión</h4>
              <p className="card-text">
                Ser la empresa líder en repuestos automotrices en la región, destacando por la calidad de nuestros productos, 
                el compromiso con nuestros clientes y la innovación tecnológica aplicada a la experiencia de compra.
              </p>

              <h4 className="card-title text-success mt-4">Misión</h4>
              <p className="card-text">
                Ofrecer soluciones confiables y accesibles en repuestos automotrices, brindando un servicio eficiente, personalizado 
                y con el respaldo de un equipo humano comprometido con el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
