import React from 'react'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ( {greeting} ) => {


    return (
        <Container>
            <hr/>
            <br/>
            <h2>{greeting}</h2>
            <hr/>
        </Container>
    )
}
