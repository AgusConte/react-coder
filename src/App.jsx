import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <ItemListContainer prop="Bienvenido a Factor BMX" />
    </div>
  );
}

export default App
