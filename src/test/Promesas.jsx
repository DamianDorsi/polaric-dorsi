import React, {useState, useEffect} from "react";


const Promesas = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [producto, setProducto] = useState([])

    useEffect(()=>{
        let promiseProduct = new Promise ((res, rej) =>{
            setTimeout(() => {
                res([{id:"1", name:"LOL", description:"juego moba", stock: 10},
                     {id:"2", name:"LOL", description:"juego moba", stock: 10},
                     {id:"3", name:"LOL", description:"juego moba", stock: 10},
                     {id:"4", name:"LOL", description:"juego moba", stock: 10}
                    ])
                //rej("error")
            }, 2000);
        })
        // THEN ES PARA RESPONSE BIEN
        promiseProduct.then((res) =>{
            setProducto(res)
        })
        // CATCH ES PARA REJECTED MAL
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])


    return <div>
        <p>{loading ? "Loading..." : null}</p>
        <p>{error ? error : null}</p>
        {/*<ItemList/>*/}
        {producto.map((item)=>{
            return(
            <div>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.stock}</p>
            </div>
            )
        })}
    </div>

    /*itemlistcontainer promesa y producto
    itemlist el .map y pedir item por prop
    item el <div>*/


}

export default Promesas;