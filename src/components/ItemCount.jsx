import React, {useState, useEffect} from "react";

export default function ItemCount({stock, initial, onAdd}){

    
    const [contador, setContador] = useState(initial)
    
 
    return (
        
      <div>
        <h1>contador: {contador}</h1>
        <button onClick={()=>{
          setContador(contador + 1)
          if (contador >= stock) {
            setContador(initial)
            alert("no hay mas stock")
          }
          }}>sumar</button>

        <button onClick={()=>{
            setContador(contador - 1)
            if (contador <= 0) {
                setContador(0)
            }
            }}>restar</button>

        <br /><br /><br />
    
        <button onClick={()=>{
          return (
            onAdd(contador)
          )
        }}>Agregar al carrito</button>
      </div>
)
}