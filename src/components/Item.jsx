import React from 'react';
import ItemCount from './ItemCount';
import { Card } from "react-bootstrap"



export default function Item({prod}){
    return(
        <>
        <Card.Img variant="top" src={prod.imagen} height="175px" />
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>
                ${prod.precio} 
                </Card.Text>
                <ItemCount initial={1} stock={10}/>
            </Card.Body>
        </>
    )
    }