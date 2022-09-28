import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ItemDetailContainer(){

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

   useEffect(()=>{
    const itemColleaction = collection(db, "products")
    const referenceDoc = doc(itemColleaction, id)
    getDoc(referenceDoc)
    .then((res)=>{
        setItem({
            id: res.id,
            ...res.data()
        })
    })
    .catch((error)=> console.log(error))
    .finally(setTimeout(()=>setLoading(false), 2000))
   }, [id])

    return(
        <div>
            <div><h1>ITEM DETAIL</h1></div>
            {loading ? <div>CARGANDO...</div> : <ItemDetail item={item}/>}
        </div> 
    )
}

