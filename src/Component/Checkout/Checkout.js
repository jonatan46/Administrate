import React, { useContext, useState } from 'react'
import { Navigate } from "react-router"
import { CartContext } from "../../Context/CartContext"
import Swal from 'sweetalert2'
import { collection, Timestamp, query, where, documentId, writeBatch, getDocs, addDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import { pedirDatos } from '../../helpers/pedirDatos'

export const Checkout = () => {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

        
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            buyer: {...values},
            items: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db)

        const orderRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemUpdate = carrito.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemUpdate.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemUpdate.cantidad
                })
            } else {
                outOfStock.push(itemUpdate)
            }
        })

        if (outOfStock.length === 0){
            addDoc(orderRef, orden)
                .then((res) => {
                    batch.commit()
                    Swal.fire({
                        icon: 'success',
                        title: 'Su orden ha sido registrada',
                        text: `Su numero de orden es: ${res.id}`
                    })
                    vaciarCarrito()
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los productos:',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }

    }

    return (
        <>

            {carrito.length === 0 && <Navigate to="/"/>}
            <div className="contaimer my-5">
                <h3>Resumen de Compra</h3>
                <hr/>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleInputChange}
                        className='form-control my-2'
                        name="nombre"
                        type="text"
                        value={values.nombre}
                        placeholder='Ingresar Nombre'
                    />
                    <input 
                        onChange={handleInputChange}
                        className='form-control my-2'
                        name="apellido"
                        type="text"
                        value={values.apellido}
                        placeholder='Ingresar Apellido'
                    />
                    <input 
                        onChange={handleInputChange}
                        className='form-control my-2'
                        name="email"
                        type="email"
                        value={values.email}
                        placeholder='Ingresar E-Mail'
                    />
                    
                    <br/>
                    <button type="submit" className="btn btn-primary">Enviar Formulario</button>
                </form>
            </div>
        </>
    )
}