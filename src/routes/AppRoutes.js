import React from "react"
import { Navigate, useRoutes } from "react-router"
import { ItemListContainer } from "../Component/ItemListContainer/ItemListContainer"
import { ItemDitailContainer } from "../Component/ItemDitailContainer/ItemDitailContainer"
import { Principal } from "../Component/Principal/Principal"
import { CartView } from "../Component/CartView/CartView"
import { Checkout } from "../Component/Checkout/Checkout"


export const AppRoutes = () => {

    const routes = useRoutes([
        {path:"/", element:<Principal Titulo="Bienvendio a Nuestro Mundo" Mensaje="Esperamos ir mejorando clase a clase"/>},
        {path:"/list/:catId", element:<ItemListContainer/>},
        {path:"/listcomplet", element:<ItemListContainer/>},
        {path:"/details/:prodId", element:<ItemDitailContainer/>},
        {path:"/detail", element:<ItemListContainer/>},
        {path:"/CartView", element:<CartView/>},
        {path:"/Checkout", element:<Checkout/>},
        {path: "*", element: <Navigate to ="/"/>}
    ])

    return routes
}