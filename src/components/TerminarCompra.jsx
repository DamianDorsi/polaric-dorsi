import { AccountCircle } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, {useState} from "react";
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCart } from '../context/CartContext';
import { useNavigate } from "react-router-dom";

export default function TerminarCompra(){

    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [idCompra, setIdCompra] = useState('');
    const [cartelito, setCartelito] = useState('');
    const [apagarBoton, setApagarBoton] = useState(false);
    const {cartTotal, cart, clear} = useCart()
    const navegar= useNavigate()
    

    function reset(){
      clear()
      navegar("/")
    }

    function comprar() {
        if (!name || !tel || !email) {
          setCartelito('Por favor completa todos los campos');
          return;
        }
    
        setApagarBoton(true);
        let order = {
          buyer: { nombre: name, phone: tel, email: email },
          carrito:
            cart.map((item)=>({
              nombreProducto: item.title,
              precioProducto: item.price,
              cantidadProducto: item.quantity
            }))
          ,
          total: cartTotal()
        };
        const db = getFirestore();
        const miColleccion = collection(db, 'orders');
        addDoc(miColleccion, order)
          .then(({ id }) => {
            setIdCompra(id);
          })
          .catch((e) => {
            setApagarBoton(false);
          });
      }
return (
    <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", gap:4, mt:10}}>
        <Box component="h2" sx={{fontSize:30, textAlign:"center"}}>Ingresa tus datos de contacto</Box>
        {cartelito && 'ERROR: ' + cartelito}
            
        <Box>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="Nombre" variant="standard" defaultValue={name} onChange={(e)=> setName(e.target.value)}/>
        </Box>

        <Box>
            <CallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="Telefono" variant="standard" defaultValue={tel} onChange={(e)=> setTel(e.target.value)} type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
        </Box>

        <Box>
            <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="Email" variant="standard" defaultValue={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Box>

        {!idCompra ? !apagarBoton 
         ? <Button variant="contained" onClick={comprar}>Terminar compra</Button>
         : 'Loading'

         : <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
              <Typography variant="h6">Gracias por tu compra. Tu numero de ticket es: {idCompra}</Typography>
              <br /><br />
              <Button variant="contained" onClick={()=>reset()}>Volver al inicio</Button>
            </Box>
          }
     </Box>
)
}