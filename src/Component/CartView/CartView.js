import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"

export const CartView = () => {

    const {carrito, vaciarCarrito, totalCompra, totalCantidad} = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length > 0
            ?   <>
                    <h2>Compras en Carrito. </h2>
                    <h3>Total: $ {totalCompra()}</h3>
                    <h4>Cantidad de Items: {totalCantidad()}</h4>
                    <hr/>
                    <section>
                        {
                            carrito.map((prod) => <CartItem {...prod}/>)
                        }
                    </section>
                    <hr/>
                    <div>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <Link to="/Checkout" className="btn btn-success">Confirmar mi Compra</Link>
                    </div>
                </>
            :   <>
                    <h3>Sin  Compras por el Momento</h3>
                    <hr/>
                    <Link to="/" className="btn btn-primary">Volver</Link>
                </>
            }
        </div>
    )
}