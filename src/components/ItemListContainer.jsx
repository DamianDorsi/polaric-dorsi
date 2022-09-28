import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Box } from "@mui/material";


export default function ItemListContainer(){

  const{categoryId}= useParams()
  const [product, setProduct] = useState([])


  useEffect(()=>{
    const productos = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products")
    getDocs(productos)
    .then((res)=>{
      const lista = res.docs.map((prod)=>{
        return{
          id:prod.id,
          ...prod.data()
        }
      })
      setProduct(lista)
    })
    .catch((error)=> console.log(error))
  }, [categoryId])

return (
  <>
  <h1>ULTIMAS NOVEDADES!</h1>

  <Box> 
    <ItemList product={product}/>
  </Box>
  </>
)
}