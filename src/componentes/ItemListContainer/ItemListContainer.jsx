import "./itemlistcontainer.css"
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"

const ItemListContainer = ({prop}) => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    const getProductos = () => {
        const productosRef = collection(db, "productos")
        getDocs(productosRef)
            .then((dataDb) => {
                const productosDb = dataDb.docs.map((productosDb) => {
                    return {id: productosDb.id, ...productosDb.data()}
                })

                setProductos(productosDb)
            })
    }

    const getProductosCategoria = () => {
        const productosRef = collection(db, "productos")
        const querycategories = query(productosRef, where("categoria", "==", idCategoria))
        getDocs(querycategories)
            .then((dataDb) => {
                const productosDb = dataDb.docs.map((productosDb) => {
                    return{id: productosDb.id, ...productosDb.data()}
                })

            setProductos(productosDb)
            })
    }

    useEffect(() => {
        if(idCategoria){
            getProductosCategoria()
        }else{
            getProductos()
        }
    }, [idCategoria])


    return(
        <div className="item-list-container">
            <h2>{prop}</h2>
            
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer