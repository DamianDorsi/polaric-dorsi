import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount"
import {useState} from "react";

export default function ItemDetail({item}){

  const [contador, setContador] = useState(1)

  const onAdd =()=>{
    console.log("compraste" + contador);
  }

    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
              <br />
             $ {item.price}
          </Typography>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>
        </CardContent>
      </Card> 
    )
}