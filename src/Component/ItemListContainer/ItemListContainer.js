import React, {useState} from 'react'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ( {titulo} ) => {

    const [greeting, setGreeting] = useState(0)

    setTimeout(() => {
      setGreeting(greeting+1)
    },1000)

    return (
        <Container>
            <hr/>
            <br/>
            <h2>{titulo} {greeting}</h2>
            <hr/>
        </Container>
    )
}
