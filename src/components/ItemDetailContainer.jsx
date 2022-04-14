import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {productofetch} from "./Products";

export default function ItemDetailContainer(){
    const [producto,setproducto]=useState({});
    const {id}=useParams();

    useEffect(()=>{
        productofetch(id)
        .then((resp)=>setproducto(resp))
        .catch((err)=>console.log(err))
    },[id]);   

    return(
        <>
        <ItemDetail producto={producto}/>
        </>
    );
}