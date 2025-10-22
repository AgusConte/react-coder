import { useLocation, Link } from "react-router-dom";
import "./style.css";

function Recibo() {
  const { state } = useLocation();
  if (!state) return <p>No hay datos de compra.</p>;

  const { items, total } = state;

  return (
    <div>
      <h1>Recibo de Compra</h1>
      <ul className="recibo">
        {items.map((item) => (
          <li key={item.id}>
            {item.nombre} - ${item.precio} x {item.quantity} = ${item.precio * item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total Pagado: ${total}</h2>
      <p>¡Gracias por tu compra!</p>
      <Link  to="/" className="link">Volver al inicio</Link>
    </div>
  );
}

export default Recibo;
