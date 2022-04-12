import React from 'react';
import Item from './Item';
import { Card } from "react-bootstrap";


export default function ItemList({productos}){
  
    return(
        <>
        {productos.map(prod=> <Card style={{ width: '18rem' }}>
            <Item prod={prod}/>
            </Card>)}
        </>
    )
}