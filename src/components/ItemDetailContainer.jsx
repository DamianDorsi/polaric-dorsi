import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(){

    const [item, setItem] = useState({})

    useEffect(()=>{
        let itemProduct = new Promise ((res, rej) =>{
            setTimeout(() => {
                res({id:"1", title:"Call Of Duty", description:"Empujando los límites de lo que los fanáticos esperan de la franquicia de entretenimiento que establece récords, Call of Duty®: Black Ops II impulsa a los jugadores a un futuro cercano, la Guerra Fría del siglo XXI, donde la tecnología y las armas han convergido para crear una nueva generación de guerra.", price: 2000, pictureUrl:"../img/callOfDuty.jpg"}
                )
            }, 2000);
        })
        itemProduct.then((res) =>{
            setItem(res)
        })
    },[])

  

    return(
        <div>
            <div><h1>ITEM DETAIL</h1></div>
            <ItemDetail item={item}/>
        </div> 
    )
}

