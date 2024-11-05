import "./itemlistcontainer.css"
import { getProductos } from "../../Data/Data.jsx"
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = ({prop}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductos()
            .then((data) => {
                if(idCategoria){
                    const filtrarProductos = data.filter((product) => product.categoria === idCategoria)
                    setProductos(filtrarProductos)
                }
                else{
                    setProductos(data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [idCategoria])

    console.log(productos)


    return(
        <div className="item-list-container">
            <h2>{prop}</h2>
            {
                loading === true ? (
                    <div>Cargando...</div>
                ) :(
                    <ItemList productos={productos}/>
                )
            }
            
        </div>
    )
}

export default ItemListContainer