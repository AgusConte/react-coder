import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosFactor from "../Productos";
import "./style.css";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosFactor);
      }, 2000);
    });

    fetchProductos.then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
