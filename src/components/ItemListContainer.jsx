import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {data} from "../mock/mockData"

export default function ItemListContainer(){

  const [product, setProduct] = useState([])

  useEffect(()=>{
    data.then((res) =>{
        setProduct(res)
    })
},[])

return (
  <div>
    <h1>ITEM LIST CONTAINER</h1>
      <ItemList product={product}/>
  </div>
)
}