import React from "react";
import { Button } from "@mui/material";

export default function ItemCount({stock, initial, contador, setContador, onAdd}){

  const sumar =()=>{
    if(contador < stock){
      setContador(contador + 1)
    }
  }

  const restar =()=>{
    if(contador > initial){
      setContador(contador - 1)
    }
  }

  return (

      <div>
        <h1>{contador}</h1>
        <button onClick={sumar}>sumar</button>

        <button onClick={restar}>restar</button>

        <Button onClick={onAdd} variant="contained" size="small">Comprar</Button>

        <br /><br /><br />
      </div>
)
}