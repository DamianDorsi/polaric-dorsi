import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

export default function ItemListContainer(){

    const [item, setItem] = useState([]);
    useEffect(() => {
      fetch("./mock/items.json")
        .then((res) => res.json())
        .then((datos) => {
          setItem(datos);
        })
    
    }, []);

    return(
       <ItemList item = {item}/>
    )
}