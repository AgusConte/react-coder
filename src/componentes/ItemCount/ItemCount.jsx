import React, { useState } from 'react'
import "./itemcount.css"

const ItemCount = ({stock, addProducto}) => {
    
    const [count, setCount] = useState(1)

    const handleClickRestar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const handleClickSumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    return (
        <div className='sumrestadd'>
            <div>
            <button className='sumrest' onClick={handleClickRestar}>-</button>
            <p>{count}</p>
            <button className='sumrest' onClick={handleClickSumar}>+</button>
            </div>

            <button className='add' onClick={() => addProducto(count)}>Agragar al carrito</button>
        </div>
    )
}

export default ItemCount
