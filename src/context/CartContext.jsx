import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (item) =>{
        const existInCart = cart.find((prod)=> prod.id === item.id)
        if(existInCart){
            const carritoActualizado = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado)
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

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>

    )
}

export const useCart = () => { return useContext(CartContext)}
