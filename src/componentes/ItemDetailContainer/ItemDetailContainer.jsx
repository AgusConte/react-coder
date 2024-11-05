import { useState, useEffect } from "react"
import { getProductos } from "../../Data/Data"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./ItemDetail.css"


const ItemDetailContainer = () => {
    const [producto, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {idProducto} = useParams()

    useEffect (() => {
      setLoading(true)

      getProductos()
        .then((data) => {
          const findProducto = data.find((producto) => producto.id === idProducto)
          setProduct(findProducto)
        })
        .finally (() => setLoading(false))
    }, [idProducto])
  return (
    <>
      {
        loading === true ? (
          <div>Cargando...</div>
        ) : (
          <ItemDetail producto={producto} />
        )
      }
    </>
  )
}

export default ItemDetailContainer

