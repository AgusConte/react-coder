import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProductoInCart = (newProduct) => {
        const condicion = isInCart(newProduct.id)
        if(condicion){
            const tempCart = [...cart]
            const findIndex = tempCart.findIndex((productoCart) => productoCart.id === newProduct.id)
            tempCart[findIndex].cantidad = tempCart[findIndex].cantidad + newProduct.cantidad
            setCart(tempCart)
        }else{
            setCart([...cart, newProduct])
        }

    }

    const cantidadTotal = () => {
        const total = cart.reduce((acumuladorTotal, productoCart) => acumuladorTotal + productoCart.cantidad, 0)
        return total
    }

    const precioTotal = () => {
        const precio = cart.reduce((acumuladorTotal, productoCart) => acumuladorTotal + (productoCart.cantidad * productoCart.precio), 0)
        return precio
    }

    const borrarProductoPorId = (idProducto) => {
        const filterProducto = cart.filter((productoCart) => productoCart.id !== idProducto)
        setCart(filterProducto)
    }

    const borrarCart = () => {
        setCart([])
    }

    const isInCart = (idProducto) => {
        return cart.some((productoCart) => productoCart.id === idProducto)
    }

    return(
        <CartContext.Provider value={ {cart, addProductoInCart, cantidadTotal, precioTotal, borrarProductoPorId, borrarCart} }>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext}