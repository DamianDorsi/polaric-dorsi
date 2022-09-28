import Item from "./Item";
import { Grid } from "@mui/material";

export default function ItemList({product}){

    return(
        <Grid container pl={8} display="flex" justifyContent="space-evenly" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {product.map((item)=>{
            return(
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                    <Item key={item.id} item = {item}/>
                </Grid>
            )
        })}
        </Grid>
)}