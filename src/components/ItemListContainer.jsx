import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {data} from "../mock/mockData"
import { useParams } from "react-router-dom";

export default function ItemListContainer(){

  const{categoryId}= useParams()

  const [product, setProduct] = useState([])

  useEffect(()=>{
    data.then((res) =>{
        if (categoryId){
          setProduct(res.filter((item)=>item.category === categoryId))
        }else{
          setProduct(res)
        }
    })
},[categoryId])

return (
  <div>
    <h1>ITEM LIST CONTAINER</h1>
      <ItemList product={product}/>
  </div>
)
}