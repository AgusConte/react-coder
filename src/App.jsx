import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventListener from './componentes/EventListener/EventListener'
import Checkout from "./componentes/Checkout/Checkout.jsx"
import { CartProvider } from './context/CartContext'
import Cart from './componentes/Cart/Cart'
import './App.css'


function App() {

  return (
   <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer prop={"PRODUCTOS"}/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer prop={"PRODUCTOS"}/>} />
            <Route path="/detail/:idProducto" element={<ItemDetailContainer/>} />
            <Route path="/event" element={<EventListener/>}  />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
   </div>
  )
}

export default App
