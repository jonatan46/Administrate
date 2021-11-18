import React, {useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { pedirDatos } from '../../helpers/pedirDatos'
import './ItemListContainer.scss';

export const ItemListContainer = () => {

    const [loadign, setLoading] = useState(false)
    const [productos, setTablaProductos] = useState([])
    
    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setTablaProductos(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <Container>
            <br/>
            <hr/>

            {
                loadign
                    ? <h2>Cargando...</h2>
                    : <>
                        <div className="divs">
                        {productos.map( (prod) => (
                            <div key={prod.id} className="card, divsH" style={{width: "18rem"}}>
                                <img src={prod.img} alt={prod.name}></img>
                                <div classss="card-body">
                                    <h4 className="card-title">{prod.name}</h4>
                                    <p className="card-text">Precio: ${prod.price}</p>
                                    <p className="card-text">{prod.desc}</p>
                                    <button className="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </>
            }
        </Container>
    )
}
