import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {data} from "../mock/mockData"
import { useParams } from "react-router-dom";

export default function ItemDetailContainer(){

    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        data.then((res) =>
            setItem(res.find((item)=> item.id === id)))
    },[id])

    return(
        <div>
            <div><h1>ITEM DETAIL</h1></div>
            <ItemDetail item={item}/>
        </div> 
    )
}

