import React, {useState, useEffect} from "react";

export default function Item({item}){

    

    return(
        <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.pictureUrl}</div> 
        </div>
    )
}