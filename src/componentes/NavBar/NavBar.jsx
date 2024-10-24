import "../../assets/wow.png"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar =() => {

    return(
        <nav className="navbar">
            <Link to="/" className="brand">
                <div className="logo"></div>
                <h1>armain</h1>
            </Link>

            <ul>
                <li>
                    <Link to="/categoria/remeras">Remeras</Link>
                </li>
                <li>
                    <Link to="/categoria/gorras">Gorras</Link>
                </li>
                <li>
                <Link to="/categoria/articulos">Articulos</Link>
                </li>
            </ul>

            <div className="carrito">
                <CartWidget/>
                <p>1</p>
            </div>
        </nav>
    )
}

export default NavBar