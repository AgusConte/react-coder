import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return(
        <Link to={"/detail/" + producto.id} className="data">
            <img src={producto.img}alt="" />
            <h2> {producto.nombre} </h2>
            <p>Precio: ${producto.precio} </p>

        </Link>
    )
}

export default Item