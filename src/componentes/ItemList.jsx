import { useState, useMemo } from "react";
import Item from "./Item";
import "./style.css";

const categorias = {
  BmxParts: "parts",
  BmxArmadas: "armadas",
  Protecciones: "protecciones",
};

function ItemList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProds = useMemo(() => {
    if (!selectedCategory) return items;
    return items.filter(
      (p) => (p.categoria || "").toLowerCase() === selectedCategory
    );
  }, [selectedCategory, items]);

  return (
    <div id="container">
      <div className="boxcategory" style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setSelectedCategory("")}>Todos</button>
        <button onClick={() => setSelectedCategory(categorias.BmxArmadas)}>Bmx Armadas</button>
        <button onClick={() => setSelectedCategory(categorias.BmxParts)}>Bmx Parts</button>
        <button onClick={() => setSelectedCategory(categorias.Protecciones)}>Protecciones</button>
      </div>

      <div className="boxcard">
      {filteredProds.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
      </div>
    </div>
  );
}

export default ItemList;
