import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { idProducto } = useParams()

  const getProductoById = () => {
    const docRef = doc(db, "productos", idProducto)
    getDoc(docRef)
      .then((dataDb) => {
        if (dataDb.exists()) {
          const productoDb = { id: dataDb.id, ...dataDb.data() }
          setProducto(productoDb)
        } else {
          setError("Producto no encontrado.")
        }
      })
      .catch((err) => {
        setError("Error al cargar el producto.")
        console.error("Error al obtener el producto:", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true) 
    setError(null) 
    getProductoById()
  }, [idProducto])

  return (
    <div className="item-detail-container">
      {loading ? (
        <div></div>
      ) : error ? (
        <div>{error}</div>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <div>Producto no encontrado.</div>
      )}
    </div>
  )
}

export default ItemDetailContainer
