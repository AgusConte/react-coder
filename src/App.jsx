import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css'
import Error from "./componentes/Error";
import Home from './componentes/home';
import Contacto from "./componentes/Contacto";
import ItemList from './componentes/ItemList';          
import Detalle from './componentes/Detalle';
import Layout from './componentes/Layout';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  

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
