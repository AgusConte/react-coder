import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  

  const [mostarItemCount, setMostarItemCount] = useState(true)

  const {addProductoInCart } = useContext(CartContext)

  const addProducto = (count) => {
    const productoCart = {...producto, cantidad: count}

    addProductoInCart(productoCart)
    setMostarItemCount(false)
  }

  const [currentImg, setCurrentImg] = useState(producto.img[0]);

  const images = producto.img.filter((img) => img !== currentImg)

  return (
    <div className="detail">
      <div className="images">
        <div className="sec-img">
          {
            images.map((img) => (
              <img src={img} key={img} onClick={() => setCurrentImg(img)} />
            ))
          }
        </div>
        <div className="main-img">
          <img src={currentImg} />
        </div>
      </div>
      <div>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <h3>Precio: ${producto.precio}</h3>
          {
            mostarItemCount === true ? (
              <ItemCount stock ={producto.stock} addProducto={addProducto}></ItemCount>
            ) : (
              <Link to="/cart">Terminar mi compra</Link>
            )
          }
      </div>
    </div>
  );
};

export default ItemDetail;
