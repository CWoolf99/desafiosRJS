import React from 'react';
import {Card, Image} from "react-bootstrap";
import ItemCount from './ItemCount';

export default function ItemDetail({producto}){
    return(
        <>
        <Card className="text-center">
            <Card.Header>{producto.nombre}</Card.Header>
            <Card.Body>
            <Image src={producto.imagen} height="300px" />
                <Card.Title>Detalles del producto</Card.Title>
                <Card.Text>
                Precio:${producto.precio}<br></br>
                Id:{producto.id}<br></br>
                {producto.descripcion}
                </Card.Text>
                <ItemCount initial={1} stock={10} producto={producto}/>
            </Card.Body>
            <Card.Footer className="text-muted">
            <button>Ir al carrito</button>
            </Card.Footer>
        </Card>
        </>
    );
}