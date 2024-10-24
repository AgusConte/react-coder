

const ItemDetail = ({producto}) => {
  return (
    <div className="detail" >
      <img src={producto.img} alt="" />
      <div>
        <h2>{producto.nombre} </h2>
        <p>{producto.descripcion} </p>
        <h3>Precio: ${producto.precio} </h3>
      </div>
    </div>
  )
}

export default ItemDetail
