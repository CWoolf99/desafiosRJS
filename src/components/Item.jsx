import React from 'react';
import ItemCount from './ItemCount';
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom';




export default function Item({produ}){
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={produ.imagen} height="175px" />
                <Card.Body>
                    <Card.Title>{produ.nombre}</Card.Title>
                    <Card.Text>
                    ${produ.precio} <br></br>
                    <Link to={`/item/${produ.id}`}>Ver detalles</Link>
                    </Card.Text>
                    <ItemCount initial={1} stock={10}/>
                </Card.Body>
         </Card>
        </>
    )
    }