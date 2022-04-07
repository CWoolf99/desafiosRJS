import React from 'react';
import Item from './Item';
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";



export default function ItemList({timeout}){
    const [productos,setproductos]=useState([]);
    useEffect(()=>{
        timeout.then((resp)=>setproductos(resp)).catch((err)=>console.log(err))
    })   
    return(
        <>
        {productos.map(prod=> <Card style={{ width: '18rem' }}>
            <Item prod={prod}/>
            </Card>)}
        </>
    )
}