import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getFirestore, doc ,getDoc} from "firebase/firestore";
import './App.css'
import Error from "./componentes/Error";
import Home from './componentes/Home';
import Contacto from "./componentes/Contacto";
import ItemList from './componentes/ItemList';          
import Detalle from './componentes/Detalle';
import Layout from './componentes/Layout';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  const [data, setData] =useState({});

  const db = getFirestore();

  useEffect(() => {
    const itemRef = doc(db, "productos", "Oa1M8hxQ8XFN26hsenPx")
    getDoc(itemRef).then(snapshot=>{
      console.log(snapshot);
      console.log(snapshot.data());
      setData(snapshot.data())
    })
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:id' element={<Detalle/>}/>
            <Route path='/*' element={<Error/>}/>
        </Route>  
      </Routes>  
    </BrowserRouter>

  );
}

export default App
