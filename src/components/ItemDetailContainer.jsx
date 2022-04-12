import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import {productofetch} from "./Products";

export default function ItemDetailContainer(){
    const [producto,setproducto]=useState({});
    useEffect(()=>{
        productofetch
        .then((resp)=>setproducto(resp))
        .catch((err)=>console.log(err))
    },[]);   

    return(
        <>
        <ItemDetail producto={producto}/>
        </>
    );
}