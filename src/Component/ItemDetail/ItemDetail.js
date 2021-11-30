import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Clicker } from '../Clicker/Clicker'
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, name, img, desc, price, catId, stock}) => {

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
            console.log('Item Agregado:', {
                id,
                name,
                price,
                cantidad
            })
            setAgregado(true)
        }
    }

    return (
        <div>
            <Container>
                <h2>Producto N° {id}</h2>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
                <p>Precio: ${price}</p>

                {
                    !agregado
                    ?  <Clicker
                            max={stock}
                            cantidad={cantidad} setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                }
            </Container>
            <button className="btn btn-primary my-2" onClick={handleVolver}>Volver atras</button>
            <button className="btn btn-outline-primary my-2" onClick={handleVolverInicio}>Volver al Inicio</button>
        </div>
    )
}
