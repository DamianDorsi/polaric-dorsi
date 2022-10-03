import React from "react"
import { useCart } from "../context/CartContext" 
import { useNavigate } from "react-router-dom"
import { Box, Button, Grid, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Cart(){
    const {cart, removeItem, cartTotal, clear} = useCart()
    const navegar = useNavigate()
    
    return(
        <div>
            {
                !cart.length
                ?<Box sx={{alignItems:"center",
                           display:"flex",
                           flexDirection:"column",
                           backgroundColor:"lightblue",
                           mx:"auto",
                           width:"20rem",
                           borderRadius:5,
                           gap:2,
                           py:"1rem",
                           mt:"5rem"
                           }}>
                    <Typography variant="h5">Tu carrito esta vacio!!</Typography>
                    <br />
                    <Button variant="contained" size="medium" onClick={()=> navegar("/")}> Inicio </Button>
                </Box>

                :<>
                <Box sx={{display:"flex", justifyContent:"space-around"}}>
                    <Typography variant="h4" sx={{my:5}}>Productos en tu carrito</Typography>
                </Box>

                <Box sx={{display:"flex", justifyContent:"space-around", my:5}}>
                    <Typography variant="h5">Total a pagar: {cartTotal()}</Typography>
                    <Button variant="contained" size="small" onClick={clear}>Vaciar carrito</Button>
                </Box>
                         
                <Grid container pl={8} display="flex" justifyContent="space-evenly" alignItems="center" spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {cart.map((item)=>{
                            return(
                            <Grid item xs={3} sm={4} md={4} key={item.id}>
                                <Card sx={{ maxWidth: 345, backgroundColor:"lightblue"}}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    alt={item.name}
                                />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                            <br /><br />
                                            $ {item.price}
                                            <br /><br />
                                            Cantidad:{item.quantity}
                                        </Typography>
                                    </CardContent>
                          
                                    <CardActions>
                                        <Button variant="contained" size="small" onClick={()=> removeItem(item.id)}>X</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            )   
                    })}
                </Grid>

                <Button sx={{}} variant="contained" size="medium" onClick={()=> navegar("/comprar")}> Terminar compra </Button>
                </>
            }
        </div>
    )

}

