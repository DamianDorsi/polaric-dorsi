import React, {useState} from "react";
import { Button } from "@mui/material";

export default function ItemCount({stock, initial}){

  const onAdd =()=>{
    console.log("compraste" + contador);
  }
    const [contador, setContador] = useState(initial)
 
    return (
        
      <div>
        <h1>{contador}</h1>
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

        <Button onClick={()=>{
          return (
            onAdd()
          )}} variant="contained" size="small">Comprar</Button>

        <br /><br /><br />
      </div>
)
}