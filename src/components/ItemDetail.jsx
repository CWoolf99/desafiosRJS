import React from 'react';
import {Card, Image} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({producto}){
    return(
        <>
        <Card className="text-center">
            <Card.Header style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>{producto.nombre}</Card.Header>
            <Card.Body style={{backgroundColor:"lightblue"}}>
            <Image style={{borderStyle:"solid", borderColor:"black"}} src={producto.imagen} height="300px" />
                <Card.Title style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>Detalles del producto</Card.Title>
                <Card.Text style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>
                Precio:${producto.precio}<br></br>
                Id:{producto.id}<br></br>
                {producto.descripcion}
                </Card.Text>
                <ItemCount initial={1} stock={10} producto={producto}/>
            </Card.Body>
            <Card.Footer className="text-muted">
            <Link to='/'style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>Seguir comprando</Link>
            </Card.Footer>
        </Card>
        </>
    );
}