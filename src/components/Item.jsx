import React from 'react';
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom';




export default function Item({produ}){
    return(
        <>
        <Card style={{ width: '16rem', backgroundColor:"lightgray", paddingTop:"5px", margin:"10px"}}>
            <Card.Img variant="top" src={produ.imagen} height="175px" />
                <Card.Body>
                    <Card.Title style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>{produ.nombre}</Card.Title>
                    <Card.Text style={{fontFamily:"'Bebas Neue', cursive", color:"white"}}>
                    ${produ.precio} <br></br>
                    <Link to={`/item/${produ.id}`}>Ver detalles</Link>
                    </Card.Text>
                </Card.Body>
         </Card>
        </>
    )
    }