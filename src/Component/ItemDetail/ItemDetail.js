import React from 'react'
import { Container } from 'react-bootstrap'

export const ItemDetail = ({id, name, img, desc, price, catId}) => {

    return (
        <Container>
            <h2>Producto N° {id}</h2>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>Precio: ${price}</p>

        </Container>
    )
}
