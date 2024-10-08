import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
   <div>
    <NavBar/>
    <ItemListContainer prop={"soy una prop"} />
   </div>
  )
}

export default App
