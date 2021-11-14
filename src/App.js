import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './Component/NavBar/NavBar';
import { Principal } from './Component/Principal/Principal';
import { ItemListContainer } from './Component/ItemListContainer/ItemListContainer';
import { Clicker } from './Component/Clicker/Clicker';

function App() {


  return (
    <>
        <NavBar/>
        
        <Principal Titulo="Bienvendio a Nuestro Mundo" Mensaje="Esperamos ir mejorando clase a clase"/>

        <ItemListContainer titulo="Segundos conectados a nuestra App:"/>

        <Clicker/>
    </>
  );
}

export default App;
