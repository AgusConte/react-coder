import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "./CartContext.jsx";

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <h2>El producto seleccionado no existe</h2>;

  return (
    <div className="detalles">
      <h1>Detalle del producto</h1>
      <h2>{producto.nombre}</h2>
      <img
        src={new URL(`../assets/${producto.imagen}`, import.meta.url).href}
        alt={producto.nombre}
      />
      <h3>
        {producto.precio !== undefined
          ? `$${Number(producto.precio).toLocaleString()}`
          : "Precio no disponible"}
      </h3>
      <p>{producto.descripcion}</p>

      <div className="cantidad-container">
        <button className="btn-agregar" onClick={() => addToCart(producto, cantidad)}>
          Agregar al carrito
        </button>
        <button onClick={() => setCantidad((prev) => Math.max(prev - 1, 1))}>-</button>
        <span>{cantidad}</span>
        <button onClick={() => setCantidad((prev) => prev + 1)}>+</button>
      </div>


    </div>
  );
}

export default Detalle;
