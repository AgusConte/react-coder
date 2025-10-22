import "./style.css";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "./CartContext.jsx";

function NavBar() {
  const { cartItems } = useCart();

  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Factor BMX" />
          </Link>
        </div>
        <div>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <Link className="icono" to="/carrito">
            🛒 ({cartItems.length})
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
