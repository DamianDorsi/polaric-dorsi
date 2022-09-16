import React from "react"
import { useCart } from "../context/CartContext" 



export default function Cart(){
    const {cart} = useCart()
    
    return(
        <div>CARRITO</div>
    )

}