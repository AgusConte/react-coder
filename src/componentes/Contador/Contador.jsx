import { useState } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0)

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

    return(
        <div>
            <p>Contador: {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={disminuirContador}>-</button>
        </div>
    )

}

export default Contador