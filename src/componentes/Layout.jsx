import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import "./style.css";

function Layout() {
  return (
    <>
      <nav>
        <div>
          <a href="/">
            <img src={logo} alt="Logo Factor BMX" />
          </a>
        </div>
        <div>
          <ul >
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <button>🛒</button>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
