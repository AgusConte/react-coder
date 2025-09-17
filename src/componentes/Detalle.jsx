import { useParams } from "react-router-dom";
import productosFactor from "../Productos";

function Detalle() {
    const {id} = useParams()

    const producto = productosFactor.find(prod=>prod.id===(id));

    if(!producto){
        return <h2>El producto seleccionado no existe</h2>
    }
  return (
    <div className="detalles">
      <h1>Detalle del producto</h1>
      <h2>{producto.nombre} </h2>
      <img src={producto.imagen} />
      <h3>${producto.precio} </h3>
      <p>{producto.descripcion} </p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default Detalle
