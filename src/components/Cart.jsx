import React from "react"
import { useCart } from "../context/CartContext" 
import { useNavigate } from "react-router-dom"


export default function Cart(){
    const {cart, removeItem, cartTotal, clear} = useCart()
    const navegar = useNavigate()
    
    return(
        <div>
            {
                !cart.length
                ?<div>
                    <h2>Todavia no compraste nada</h2>
                    <h3>Volver al inicio</h3>
                    <button onClick={()=>navegar("/")}>inicio</button>
                </div>
                :<div>
                    <p>Productos en el carrito</p>
                        {cart.map((compra)=>{
                            return(
                            <div key={compra.id} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <img src={compra.img} alt={compra.title} />
                                <h3>{compra.name}</h3>
                                <h3>{compra.quantity}</h3>
                                <h3>{compra.precio}</h3>
                                <button onClick={()=> removeItem(compra.id)}>X</button>
                            </div>)
                    })}
                    <span>Total a pagar: {cartTotal()}</span>
                    <button onClick={clear}>Vaciar carrito</button>
                </div>
            }
        </div>
    )

}