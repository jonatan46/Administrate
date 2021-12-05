import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './Component/NavBar/NavBar';
import { Principal } from './Component/Principal/Principal';
import { ItemListContainer } from './Component/ItemListContainer/ItemListContainer';
import { ItemDitailContainer } from './Component/ItemDitailContainer/ItemDitailContainer';
import { Clicker } from './Component/Clicker/Clicker';
import { CartProvider } from './Context/CartContext';
import { AppRoutes } from './routes/AppRoutes';

function App() {

  
  const [mostrarClicks, setMostrarClicks] = useState(true)

  const handleMostrar = () => {
    setMostrarClicks(!mostrarClicks)
  }

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
      </BrowserRouter>
    </CartProvider>    
  );
}

export default App;
