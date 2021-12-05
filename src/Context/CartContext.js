import React, { createContext, useState } from 'react'

export const CartContext = createContext()

// custom privder

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([])
  
    const agregarAlCarrito = (Item) => {
      setCarrito( [...carrito, Item] )
    }
  
    const elimiarDelCarrito = (id) => {
      setCarrito( carrito.filter(prod => prod.id !== id) )
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
    
    const totalCantidad = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
      }

    const totalCompra = () => {
        return carrito.reduce((acc, prod) => acc + prod.price, 0)
    }
  
    const isInCart = (id) => {
      return carrito.some( prod => prod.id === id )
    }
    return (

        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            elimiarDelCarrito,
            vaciarCarrito,
            isInCart,
            totalCantidad,
            totalCompra
          }}>
              {children}
        </CartContext.Provider>
    )
}