import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Carrito() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const handleComprar = () => {
    navigate("/recibo", { state: { items: cartItems, total } });
    clearCart();
  };

  if (cartItems.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div>
      <h1>Mi Carrito</h1>
      <ul className="cart">
        {cartItems.map((item) => (
          <li key={item.id}>
            <img
              src={new URL(`../assets/${item.imagen}`, import.meta.url).href}
              alt={item.nombre}
              width={50}
            />
            {item.nombre} - ${item.precio} x {item.quantity} = $
            {item.precio * item.quantity}
            <div>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>➕</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>➖</button>
            <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
      <button className="comprar" onClick={handleComprar}>Comprar</button>
    </div>
  );
}

export default Carrito;
