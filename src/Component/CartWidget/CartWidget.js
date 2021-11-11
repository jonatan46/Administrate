import React from 'react'
import './CartWidget.scss'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

export const CartWidget = () => {
    return (
        <div>
            <MdOutlineAddShoppingCart className="cartWidget"/>
        </div>
    )
}
