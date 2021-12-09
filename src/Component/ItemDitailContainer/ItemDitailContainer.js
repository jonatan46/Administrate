import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDitailContainer = () => {

    const [item, setItem] = useState()
    const [loadign, setLoading] = useState(false)
    
    const { prodId } = useParams()

    console.log(prodId)
    useEffect(() => {
        
        setLoading(true)

        const docRef = doc(db, 'productos', prodId)
        // 2 - traer los datos GET
        getDoc(docRef)
            .then((doc) =>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() =>  {
                setLoading(false)
            })

    }, [])

    return (
        <div className="container my-5">
            {
                loadign
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item}/>
            }
        </div>
    )
}
