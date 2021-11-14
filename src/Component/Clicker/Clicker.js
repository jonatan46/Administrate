import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

export const Clicker = () =>  {

    let maxItem=10

    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        if (clicks < maxItem){
            setClicks( clicks + 1 )
        }

    }

    return (
        <>
            <div onClick={handleClick}>
                <Button variant="danger">Clicks: {clicks}</Button> 
                <h5>Fecha y Hora Ultimo Click: {new Date().toLocaleString()}</h5>
            </div>
        </>
    )
}
