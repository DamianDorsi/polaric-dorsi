import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

export default function ItemListContainer(){

  const [product, setProduct] = useState([])

  useEffect(()=>{
    let promiseProduct = new Promise ((res, rej) =>{
        setTimeout(() => {
            res([{id:"1", title:"Call Of Duty", description:"Empujando los límites de lo que los fanáticos esperan de la franquicia de entretenimiento que establece récords, Call of Duty®: Black Ops II impulsa a los jugadores a un futuro cercano, la Guerra Fría del siglo XXI, donde la tecnología y las armas han convergido para crear una nueva generación de guerra.", price: 2000, pictureUrl:"img/callOfDuty.jpg"},
                 {id:"2", title:"God Of War", description:"accion", price: 10, pictureUrl:""},
                 {id:"3", title:"Halo", description:"shooter", price: 10, pictureUrl:""},
                 {id:"4", title:"Monster Hunter", description:"RPG", price: 10, pictureUrl:""}
                ])
        }, 2000);
    })
    promiseProduct.then((res) =>{
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