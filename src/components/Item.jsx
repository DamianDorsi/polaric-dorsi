import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function Item({item}){

  const navegar = useNavigate()

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
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={()=> navegar(`/item/${item.id}`)}>Ver mas</Button>
      </CardActions>
    </Card>
    )
}