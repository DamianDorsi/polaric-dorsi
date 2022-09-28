import { AccountCircle } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, {useState, useEffect} from "react";
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCart } from '../context/CartContext';

export default function TerminarCompra(){

    

    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")

    const [idCompra, setIdCompra] = useState('');
    const [cartelito, setCartelito] = useState('');

    const [apagarBoton, setApagarBoton] = useState(false);

    function comprar() {
        if (!name || !tel || !email) {
          setCartelito('Por favor completa todos los campos');
          return;
        }
    
        setApagarBoton(true);
    
        let order = {
          buyer: { nombre: name, phone: tel, email: email },
          carrito: [
            { id: 555, title: "prueba" , price: 100, cant: 5 },
          ],
          total: 100,
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
            <TextField id="standard-basic" label="Telefono" variant="standard" defaultValue={tel} onChange={(e)=> setTel(e.target.value)}/>
        </Box>

        <Box>
            <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="Email" variant="standard" defaultValue={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Box>

        {!idCompra ? !apagarBoton ? <Button variant="contained" onClick={comprar}>Terminar compra</Button> : 'Loading' : <p>Gracias por tu compra. Tu numero de ticket es: {idCompra}</p>}
        
     </Box>
)
}