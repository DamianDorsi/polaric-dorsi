import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])


   useEffect(()=>{
    if(window.localStorage.getItem("carritoStorage")){
        const carritoParseado = JSON.parse(window.localStorage.getItem("carritoStorage"))
        setCart(carritoParseado)
    }
    },[])

    
    const addItem = (item) =>{
        const existInCart = cart.find((prod)=> prod.id === item.id)
        if(existInCart){
            existInCart.quantity = existInCart.quantity + item.quantity
            window.localStorage.setItem("carritoStorage", JSON.stringify(cart))
        }else{
            setCart([item, ...cart])
            window.localStorage.setItem("carritoStorage", JSON.stringify([...cart, item]))
        }
    }

    const clear = ()=>{
        setCart([])
        window.localStorage.setItem("carritoStorage", JSON.stringify([]))

    }

    const removeItem = (id)=>{
        setCart(cart.filter((item)=> item.id !== id))
        window.localStorage.setItem("carritoStorage", JSON.stringify([...cart]))
    }

    const isInCart = (id)=>{
        return cart.some((item)=> item.id === id)
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const cartTotal = ()=>{
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => { return useContext(CartContext)}
