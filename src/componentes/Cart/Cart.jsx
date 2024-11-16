import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./cart.css"

const Cart = () => {
    const { cart, precioTotal, borrarProductoPorId, borrarCart } = useContext(CartContext);

    if(cart.length === 0){
        return (
            <div className='noitem'>
                <h2>No hay productos en el carrito :/</h2>
                <Link to="/"> Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <h2 className='h2cart'>Productos en el carrito</h2>
            {
                cart.length > 0 ? (
                    cart.map((productoCart) => (
                        <div className='cart' key={productoCart.id}>
                            <img src={productoCart.img[0]}/>
                            <p>{productoCart.nombre}</p>
                            <p>Cantidad: {productoCart.cantidad}</p>
                            <p>Precio individual: ${productoCart.precio} </p>
                            <p>Precio parcial: ${productoCart.cantidad * productoCart.precio} </p>

                            <button onClick={() => borrarProductoPorId(productoCart.id)}>Borrar Producto</button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en el carrito.</p>
                )
            }
            <p className='preciototal'>Precio total: ${precioTotal()} </p>
            <button className='borrarcarrito' onClick={borrarCart}>Borrar Carrito</button>
            <Link className='checkoutlink' to="/checkout">Terminar mi compra</Link>
        </div>
    );
};

export default Cart;
