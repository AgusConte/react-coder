import React from 'react'
import { useState } from 'react'
import "./checkout.css"
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, setDoc, doc } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
    })

    const [idOrder, setIdOrder] = useState(null)
    const {cart, precioTotal, borrarCart} = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
        event.target.value
        event.target.name
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
    
        const order = {
            buyer: {...dataForm},
            productos: {...cart},
            date: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        }

        subirOrder(order)
    }

    const subirOrder = (newOrder) => {
        const orderRef = collection(db, "order")
        addDoc(orderRef, newOrder)
            .then((response) => setIdOrder(response.id))
            .catch((error) => console.log(error))
            .finally(() => {updateStock()})
    }

    const updateStock = () => {
        cart.map(({id, cantidad, ...dataProduct}) => {
            const productoRef = doc(db,"productos",id)
            setDoc(productoRef, {...dataProduct, stock: dataProduct.stock - cantidad})
        })

        borrarCart()
    }

  return (
    <div>
        {
            idOrder === null ? (
                <FormCheckout 
                    dataForm={dataForm} 
                    handleChangeInput={handleChangeInput} 
                    handleSubmitForm={handleSubmitForm}>
                    
                </FormCheckout>
            ) : (
                <div className='checkoutfinal'>
                    <h2>Gracias por su compra!!</h2>
                    <p>Por favor guarde su numero de seguimiento: {idOrder} </p>
                    <Link to="/">Volver al Inicio</Link>
                </div>
            )
        }
    </div>
  )
}

export default Checkout
