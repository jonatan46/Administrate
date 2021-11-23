import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './Component/NavBar/NavBar';
import { Principal } from './Component/Principal/Principal';
import { ItemListContainer } from './Component/ItemListContainer/ItemListContainer';
import { ItemDitailContainer } from './Component/ItemDitailContainer/ItemDitailContainer';
import { Clicker } from './Component/Clicker/Clicker';

function App() {


  const [mostrarClicks, setMostrarClicks] = useState(true)

  const handleMostrar = () => {
    setMostrarClicks(!mostrarClicks)
  }

  return (
      <BrowserRouter>
        
        <NavBar/>
      
        <Routes>
          <Route path="/" element={<Principal Titulo="Bienvendio a Nuestro Mundo" Mensaje="Esperamos ir mejorando clase a clase"/>}/>
          <Route path="/list/:catId" element={<ItemListContainer/>}/>
          <Route path="/listcomplet" element={<ItemListContainer/>}/>
          <Route path="/details/:prodId" element={<ItemDitailContainer/>}/>
          <Route path="/detail" element={<ItemListContainer/>}/>
          
        
        </Routes>

      </BrowserRouter>
    
  );
}

export default App;
