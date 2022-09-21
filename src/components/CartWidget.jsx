import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

export default function CartWidget(){

  const{cartQuantity} = useCart()

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, flexDirection: "row-reverse" }}>

          <ShoppingCartIcon/>
          <span>{cartQuantity() || " "}</span>

        </Box>
    )

}