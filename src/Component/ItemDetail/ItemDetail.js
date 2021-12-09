import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Clicker } from '../Clicker/Clicker'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const ItemDetail = ({id, name, img, desc, price, catId, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    
    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState(0)
    const [agregado, setAgregado] = useState(false)

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () => {
        if (cantidad > 0) {
            agregarAlCarrito({
                id,
                name,
                price,
                img,
                cantidad
            })
        }
    }

    return (
        <div>
            <Container>
                <h2>Producto: {name}</h2>
                <img src={img} alt={name}/>
                <p>Precio: ${price}</p>

                {
                    !isInCart(id)
                    ?  <Clicker
                            max={stock}
                            cantidad={cantidad} setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    : <Link to="/CartView" className="btn btn-success">Terminar mi compra</Link>
                }
            </Container>
            <button className="btn btn-primary my-2" onClick={handleVolver}>Volver atras</button>
            <button className="btn btn-outline-primary my-2" onClick={handleVolverInicio}>Volver al Inicio</button>
        </div>
    )
}
