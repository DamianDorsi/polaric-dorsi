import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount"
import {useState} from "react";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ItemDetail({item}){

  const [contador, setContador] = useState(1)
  const [compra, setCompra] = useState(false)
  const {title, description, price, stock, img, id} = item
  const {addItem} = useCart()
  const navegar = useNavigate()

  
  const onAdd =()=>{
    let agregarCarrito = {
      title,
      price,
      img,
      id,      
      quantity:contador
    }
    setCompra(true)
    addItem(agregarCarrito)
  }

    return(
        <Card sx={{ maxWidth: 345, backgroundColor:"lightblue", mx:"auto", mt:"2rem" }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              <br />
              ${price}
            </Typography>
          {! compra
           ? <ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>
           : <Button variant="contained" size="small" onClick={()=> navegar(`/cart`)}> Ir al carrito </Button>}
          </CardContent>
        </Card> 
    )
}