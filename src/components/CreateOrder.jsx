import { addDoc, getFirestore , collection, serverTimestamp} from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { ListGroup, Badge, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";



export default function CreateOrder () {
    const { cart , finalCompra , total}=useContext(CartContext);
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [ide,setIde]=useState("");
    useEffect(()=>{
        console.log(name,phone,email)
    },[email,phone,name])
     
    const crearOrden=()=>{
        finalCompra();
        const orden={
            buyer: {name,phone,email},
            items: cart,
            fecha:serverTimestamp(),
            total}
        const db=getFirestore();
        const ordersCollection=collection(db,'ordenes');
        addDoc(ordersCollection,orden).then(({id})=>setIde(id))
        console.log(ide)
        }
  return (
    <>  
       <div style={{backgroundColor:"lightblue", paddingBottom:"10%"}}>
        <h1>Registra tus datos</h1>
            <h4>Nombre</h4>
            <input type="text" value={name} onChange={(e)=>{
                setName(e.currentTarget.value);}} />
            <h4>Correo</h4>
            <input type="text" value={email} onChange={(e)=>{
                setEmail(e.currentTarget.value);}}/>
            <h4>Teléfono</h4>
            <input type="text" value={phone} onChange={(e)=>{
                setPhone(e.currentTarget.value);}}/>
        <h1>Productos a comprar</h1>
        {cart.map(prod=><ListGroup key={prod.id} as="ol">
                                <ListGroup.Item style={{backgroundColor:"lightgray"}}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">{prod.nombre}</div>
                                    {prod.precio}
                                    </div>
                                    <Badge bg="primary" pill>
                                    {prod.cuenta}
                                    </Badge>
                                </ListGroup.Item>
                            </ListGroup>)}
                            <ListGroup.Item style={{backgroundColor:"lightgray"}} as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">Total</div>
                                ${total}
                                </div>
                            </ListGroup.Item>
        <Link onClick={()=>crearOrden()} to="/">Finalizar Compra</Link>
        </div>
    </>
  );
}