import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { db } from "../firebase";
import "./style.css";

import { collection, getDocs } from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((snapshot) => {
        const productosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productosData);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
