import Item from "./Item";
import Box from '@mui/material/Box'

export default function ItemList({product}){

    return(
        <Box sx={{display:"flex",
                justifyContent:"space-around"}}>
        {product.map((item)=>{
            return(
                <Item key={item.id} item = {item}/>
            )
        })}
        </Box>
)}