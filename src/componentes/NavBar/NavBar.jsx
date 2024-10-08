import "../../assets/wow.png"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar =() => {

    return(
        <nav className="navbar">
            <div className="brand">
                <div className="logo"></div>
                <h1>armain</h1>
            </div>

            <ul>
                <li>Remeras</li>
                <li>Gorras</li>
                <li>Articulos</li>
            </ul>

            <div className="carrito">
                <CartWidget/>
                <p>1</p>
            </div>
        </nav>
    )
}

export default NavBar