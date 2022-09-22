import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (item) =>{
        const existInCart = cart.find((prod)=> prod.id === item.id)
        if(existInCart){
            existInCart.quantity = existInCart.quantity + item.quantity
        }else{
            setCart([...cart, item])
        }
        console.log(cart);
    }

    const clear = ()=>{
        setCart([])
    }

    const removeItem = (id)=>{
        setCart(cart.filter((item)=> item.id !== id))
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
