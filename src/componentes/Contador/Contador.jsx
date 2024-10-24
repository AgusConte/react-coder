import { useState, useEffect } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0)
    const [toggle, setToggle] = useState(true)

    const aumentarContador = () => {
        if(contador < 10){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    const alternarToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        const fetchApi = () => {
            fetch("https://fakestoreapi.com/products")
                .then((respuesta) => respuesta.json())
                .then((data) => console.log(data))
        }
    
        fetchApi()
    }, [])


    return(
        <div>
            <p>Contador: {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={disminuirContador}>-</button>
            <p>valor toggle: {toggle.toString()} </p>
            <button onClick={alternarToggle}>Alternar valor toggle</button>
        </div>
    )

}

export default Contador