import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

export const Clicker = ( {max, setCantidad, cantidad, onAdd}) =>  {

    const handleClickSumar = () => {
        cantidad < max && setCantidad( cantidad + 1 )
    }

    const handleClickRestar = () => {
        cantidad > 0 && setCantidad( cantidad - 1 )
    }

    return (
        <div className="my-3">
            <Button variant="btn btn-outline-primary" onClick={handleClickRestar}>-</Button> 
            <span className="mx-2">{cantidad}</span>
            <Button variant="btn btn-primary" onClick={handleClickSumar}>+</Button> 
            <br/>
            <button className="btn btn-success my-2" onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>
    )
}
