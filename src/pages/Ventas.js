import React from 'react';
import icon from '../icons/icon_8.png';

export default function PuntoDeVenta() {
  return (
    <div className="pos-container" role="main">
      <header className="pos-header" role="banner">
        <div className="left" aria-label="Sistema">
          <span>Sistema Punto de Venta - Gato Repuestos</span>
        </div>
        <div className="right" aria-label="Información usuario">
          <span>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
          <span>
            <img src={icon} alt="" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
            Cajero: Nolan Velásquez
          </span>
          <button aria-label="Cerrar sesión" title="Cerrar sesión" className="btn-logout">
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
            <input type="number" defaultValue="1" min="1" aria-label="Cantidad" />
            <button aria-label="Agregar producto">Agregar</button>
            <button aria-label="Limpiar productos">Limpiar productos</button>
            <button aria-label="Cancelar venta" style={{ backgroundColor: '#d9534f', color: 'white' }}>
              Cancelar venta
            </button>
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
                  <th scope="col">Estado Stock</th>
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
                    <button className="remove-btn" aria-label="Eliminar filtro de aceite">
                      X
                    </button>
                  </td>
                  <td>
                    <span style={{ color: 'green', fontWeight: 'bold' }}>Stock alto</span>
                  </td>
                </tr>
                <tr>
                  <td>789012</td>
                  <td>Aceite motor 5W30</td>
                  <td>
                    <input
                      className="qty-input"
                      type="number"
                      min="1"
                      defaultValue="2"
                      aria-label="Cantidad aceite motor"
                    />
                  </td>
                  <td>₡12,000</td>
                  <td>₡500</td>
                  <td>₡23,500</td>
                  <td>
                    <button className="remove-btn" aria-label="Eliminar aceite motor">
                      X
                    </button>
                  </td>
                  <td>
                    <span style={{ color: 'orange', fontWeight: 'bold' }}>Stock bajo</span>
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
            <span>3</span>
          </div>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₡28,500</span>
          </div>
          <div className="summary-row">
            <span>Descuentos:</span>
            <span>₡500</span>
          </div>
          <div className="summary-row">
            <span>IVA (13%):</span>
            <span>₡3,705</span>
          </div>
          <div className="summary-row total">
            <span>Total a pagar:</span>
            <span>₡31,705</span>
          </div>

          <div className="payment-methods">
            <label htmlFor="metodoPago">Método de pago</label>
            <select id="metodoPago" aria-label="Método de pago">
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="transferencia">Transferencia</option>
              <option value="mixto">Mixto</option>
            </select>

            <fieldset style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <legend>Métodos de pago (mixto)</legend>
              <label>
                Efectivo:
                <input type="number" min="0" placeholder="₡0" aria-label="Pago en efectivo" />
              </label>
              <br />
              <label>
                Tarjeta:
                <input type="number" min="0" placeholder="₡0" aria-label="Pago con tarjeta" />
              </label>
            </fieldset>

            <label htmlFor="montoRecibido" style={{ marginTop: '10px' }}>
              Monto recibido
            </label>
            <input id="montoRecibido" type="number" min="0" aria-label="Monto recibido" placeholder="₡0" />

            <div className="summary-row" style={{ marginTop: '10px' }}>
              <span>Cambio:</span>
              <span>₡0</span>
            </div>

            <label htmlFor="descuentoGlobal" style={{ marginTop: '10px' }}>
              Descuento global
            </label>
            <input id="descuentoGlobal" type="number" min="0" placeholder="₡0" aria-label="Descuento global" />
            <div className="client-info" aria-label="Información del cliente" style={{ marginTop: '30px' }}>
              <h3>Cliente</h3>
              <label htmlFor="cliente">Nombre o cédula</label>
              <input type="text" id="cliente" placeholder="Nombre o cédula" aria-label="Buscar cliente" />
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
              <div style={{ marginTop: '15px' }}>
                <p><strong>Teléfono:</strong> 8888-8888</p>
                <p><strong>Dirección:</strong> Calle Falsa 123</p>
                <p><strong>Correo:</strong> cliente@ejemplo.com</p>
              </div>
            </div>
            <button
              className="finalize-btn"
              aria-label="Finalizar venta"
              style={{ marginTop: '15px', backgroundColor: '#28a745', color: 'white' }}
            >
              Finalizar Venta
            </button>
            <button
              className="print-btn"
              aria-label="Imprimir factura"
              style={{ marginTop: '10px', backgroundColor: '#007bff', color: 'white' }}
            >
              Imprimir Factura
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
