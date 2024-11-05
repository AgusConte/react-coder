import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget =() => {
    const{cantidadTotal} = useContext(CartContext)
    const cantidad = cantidadTotal()

    return(
        <Link to="/cart">
            <IoIosCart size={75} className={cantidad === 0 ? "empty-cart" : "icon-cart"} />
            <p>{cantidad >= 1 && cantidad} </p>
        </Link>
    )
}

export default CartWidget