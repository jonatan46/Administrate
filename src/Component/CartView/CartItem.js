import React, { useContext } from "react";
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from "../../Context/CartContext";

export const CartItem = ({name, price, cantidad, id}) => {

    const {elimiarDelCarrito} = useContext(CartContext)

    return (
        <div>
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {cantidad}</p>
            <button
                className="btn btn-danger"
                onClick={() => { elimiarDelCarrito(id) }}
                >
                <BsFillTrashFill/>
            </button>
        </div>
    )
}