import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad, totalCompra} = useContext(CartContext)

    return (
        <div>
            <MdOutlineAddShoppingCart className="cartWidget"/>
            <span>{totalCantidad()}</span>
            <span>$ {totalCompra()}</span>
        </div>
    )
}
