import React, {useState} from "react"
import { Card } from "react-bootstrap"

export default function ItemCount({stock}){
    const [cuenta, setcuenta]=useState(0)
  function mas(){
    if (cuenta<stock){
    setcuenta(cuenta+1)}
  }
  function menos(){
    if (cuenta>0){
    setcuenta(cuenta-1)}
  }

  function onAdd(){
    alert('Se agregó ' + cuenta +' al carrito');
  }

    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Producto ejemplo 1</Card.Title>
                <Card.Text>
                (descripción del producto) 
                </Card.Text>
                <button onClick={()=>mas()}>+</button>
                <p>{cuenta}</p>
                <button onClick={()=>menos()}>-</button><br/>
                <button onClick={()=>onAdd()}>Agregar al carrito</button>
                
            </Card.Body>
            </Card>
        </>
    )
};
