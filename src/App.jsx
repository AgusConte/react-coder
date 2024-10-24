import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
   <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer prop={"PRODUCTOS"}/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer prop={"PRODUCTOS"}/>} />
          <Route path="/detail/:idProducto" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
