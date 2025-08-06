import React from 'react';

export default function PuntoDeVenta() {
  return (
    <div className="pos-container" role="main">
      <header className="pos-header" role="banner">
        <div className="left" aria-label="Sistema">
          <span>Sistema Punto de Venta - Gato Repuestos</span>
        </div>
        <div className="right" aria-label="Información usuario">
          <span>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
          <span>Cajero: Nolan Velásquez</span>
          <button
            aria-label="Cerrar sesión"
            title="Cerrar sesión"
            className="btn-logout"
          >
            Salir
          </button>
        </div>
      </header>

      <main className="pos-main">
        <section className="pos-products" aria-label="Registro de productos">
          <h2>Registro de Productos</h2>

          <div className="product-inputs">
            <input
              type="text"
              placeholder="Escanea o ingresa código de producto"
              aria-label="Código de producto"
            />
            <input
              type="number"
              defaultValue="1"
              min="1"
              aria-label="Cantidad"
            />
            <button aria-label="Agregar producto">Agregar</button>
          </div>

          <div className="products-table-wrapper" tabIndex={0}>
            <table aria-describedby="productosAgregados" role="grid">
              <thead>
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio Unitario</th>
                  <th scope="col">Descuento</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123456</td>
                  <td>Filtro de aceite</td>
                  <td>
                    <input
                      className="qty-input"
                      type="number"
                      min="1"
                      defaultValue="1"
                      aria-label="Cantidad filtro de aceite"
                    />
                  </td>
                  <td>₡5,000</td>
                  <td>₡0</td>
                  <td>₡5,000</td>
                  <td>
                    <button
                      className="remove-btn"
                      aria-label="Eliminar filtro de aceite"
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <aside className="pos-summary" aria-label="Resumen y pago">
          <h2>Resumen de la Venta</h2>
          <div className="summary-row">
            <span>Total productos:</span>
            <span>1</span>
          </div>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₡5,000</span>
          </div>
          <div className="summary-row">
            <span>Descuentos:</span>
            <span>₡0</span>
          </div>
          <div className="summary-row">
            <span>IVA (13%):</span>
            <span>₡650</span>
          </div>
          <div className="summary-row total">
            <span>Total a pagar:</span>
            <span>₡5,650</span>
          </div>

          <div className="payment-methods">
            <label htmlFor="metodoPago">Método de pago</label>
            <select id="metodoPago" aria-label="Método de pago">
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="transferencia">Transferencia</option>
              <option value="mixto">Mixto</option>
            </select>

            <label htmlFor="montoRecibido" style={{ marginTop: '10px' }}>
              Monto recibido
            </label>
            <input
              id="montoRecibido"
              type="number"
              min="0"
              aria-label="Monto recibido en efectivo"
              placeholder="₡0"
            />

            <div className="summary-row" style={{ marginTop: '10px' }}>
              <span>Cambio:</span>
              <span>₡0</span>
            </div>

            <button className="finalize-btn" aria-label="Finalizar venta">
              Finalizar Venta
            </button>
          </div>

          <div className="client-info" aria-label="Información del cliente">
            <label htmlFor="cliente">Cliente</label>
            <input
              type="text"
              id="cliente"
              placeholder="Nombre o cédula"
              aria-label="Buscar cliente"
            />
            <button
              style={{
                marginTop: '10px',
                backgroundColor: '#004080',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
              }}
            >
              Agregar nuevo cliente
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
