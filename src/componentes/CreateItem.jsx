import { addDoc, collection, getFirestore } from "firebase/firestore"

function CreateItem() {

    const item = { 
      nombre: "BICICLETA SUNDAY PRIMER 2019", 
      precio: 1500000, 
      imagen: "bmx3.PNG", 
      categoria: "armadas",
      descripcion: "La Sunday Primer 2019 es una BMX de nivel intermedio con cuadro Chromoly y geometría versátil. Su montaje incluye piezas de alta calidad que brindan estabilidad, ideal para evolucionar en street, park o dirt."
    }

    const db = getFirestore();

    const itemCollection = collection(db, "productos")

    addDoc(itemCollection, item).then(({id}) =>{
        console.log(id);
        console.log("producto agregado")
    } )

  return (
    <div>
      
    </div>
  )
}

export default CreateItem
