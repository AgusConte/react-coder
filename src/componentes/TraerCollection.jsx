import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect } from "react"

function TraerCollection() {

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "productos")

        getDocs(itemCollection).then(snapshot => snapshot.docs.map(producto=>{
            console.log(producto.data())
            console.log(producto.id)
        }))
    },[])

  return (
    <div>
      
    </div>
  )
}

export default TraerCollection
