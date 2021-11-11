import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './Component/NavBar/NavBar';
import { Principal } from './Component/Principal/Principal';
import { ItemListContainer } from './Component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
        <NavBar/>
        
        <Principal Titulo="Bienvendio a Nuestro Mundo" Mensaje="Esperamos ir mejorando clase a clase"/>

        <ItemListContainer greeting="Esperamos aprender y mostrar el E-comerces"/>
    </>
  );
}

export default App;
