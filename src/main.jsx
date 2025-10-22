import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateItem from './componentes/CreateItem'
import TraerCollection from './componentes/TraerCollection'


import { CartProvider } from "./componentes/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>
      <App />
    </CartProvider>
  </>
);