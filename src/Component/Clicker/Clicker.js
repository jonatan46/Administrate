import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

export const Clicker = () =>  {

    let maxItem=10
    let minItem=0

    const [clicks, setClicks] = useState(0)

    const handleClickSumar = () => {
        if (clicks < maxItem){
            setClicks( clicks + 1 )
        }
    }

    const handleClickRestar = () => {
        if (clicks > minItem){
            setClicks( clicks - 1 )
        }
    }

    return (
        <>
            <section>
            <div onClick={handleClickSumar}>
                <Button variant="success">Sumar</Button> 
            </div>
            {clicks}
            <div onClick={handleClickRestar}>
                <Button variant="danger">Restar</Button> 
            </div>
            </section>
            <h5>Fecha y Hora Ultimo Click: {new Date().toLocaleString()}</h5>
        </>
    )
}
