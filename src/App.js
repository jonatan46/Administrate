import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './Component/NavBar/NavBar';
import { Principal } from './Component/Principal/Principal';
import { ItemListContainer } from './Component/ItemListContainer/ItemListContainer';
import { Clicker } from './Component/Clicker/Clicker';

function App() {


  const [mostrarClicks, setMostrarClicks] = useState(true)

  const handleMostrar = () => {
    setMostrarClicks(!mostrarClicks)
  }

  return (
    <>
        <NavBar/>
        
        <Principal Titulo="Bienvendio a Nuestro Mundo" Mensaje="Esperamos ir mejorando clase a clase"/>

        <ItemListContainer/>

        <button onClick={handleMostrar}>Visualizar Contador</button>

        {mostrarClicks && <Clicker/>}
    </>
  );
}

export default App;
