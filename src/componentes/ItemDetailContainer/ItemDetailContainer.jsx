import { useState, useEffect } from "react"
import { getProductos } from "../../Data/Data"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./ItemDetail.css"


const ItemDetailContainer = () => {
    const [producto, setProduct] = useState({})
    const {idProducto} = useParams()

    useEffect (() => {
        getProductos()
            .then((data) => {
                const findProducto = data.find((producto) => producto.id === idProducto)
                setProduct(findProducto)
            })
    }, [idProducto])
  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer

