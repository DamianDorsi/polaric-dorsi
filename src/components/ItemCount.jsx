import React, {useState, useEffect} from "react";

export default function ItemCount(){

    const [contador, setContador] = useState(0)
 
    return (
        
      <div>
        <h1>contador: {contador}</h1>
        <button onClick={()=>{setContador(contador + 1)}}>sumar</button>
        <button onClick={()=>{
            setContador(contador - 1)
            if (contador <= 0) {
                setContador(0)
            }
            }}>restar</button>
      </div>
)
}