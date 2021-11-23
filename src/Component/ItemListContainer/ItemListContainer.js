import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Container } from 'react-bootstrap'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Link } from 'react-router-dom'
import './ItemListContainer.scss';

export const ItemListContainer = () => {

    const [loadign, setLoading] = useState(false)
    const [productos, setTablaProductos] = useState([])
    
    const { catId } = useParams()


    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {

                if (!catId) {
                    setTablaProductos(resp)
                } else {
                    setTablaProductos( resp.filter ( resp => resp.catId === catId))
                }

            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

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
                                    <Link to={`/details/${prod.id}`}><button className="btn btn-primary">Ver Mas</button></Link>
                                </div>
                            </div>
                        ))}
                        </div>
                    </>
            }
        </Container>
    )
}
