import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget(){

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, flexDirection: "row-reverse" }}>

          <ShoppingCartIcon/>

        </Box>
    )

}