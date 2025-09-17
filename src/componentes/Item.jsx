import { Link } from "react-router-dom"

function Item({nombre, precio, imagen, id}) {
  return (
    <Link to={`/productos/${id}`} className="card">
      <h2>{nombre}</h2>
      <p>${precio} </p>
      <img src={imagen} />
    </Link>
  )
}

export default Item
