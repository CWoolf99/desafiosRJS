import { addDoc, getFirestore , collection} from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext";



export default function CreateOrder () {
    const { cart , finalCompra}=useContext(CartContext);
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [ide,setIde]=useState("")
    useEffect(()=>{
        console.log(name,phone,email)
    },[email,phone,name])
     
    const crearOrden=()=>{
        finalCompra();
        const orden={
            buyer: {name,phone,email},
            items: cart,}
        const db=getFirestore();
        const ordersCollection=collection(db,'ordenes');
        addDoc(ordersCollection,orden).then(({id})=>setIde(id));
        }
  return (
    <>  
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
        {cart.map(prod=><div>
                            <p>{prod.nombre} cantidad:{prod.cuenta}</p>
                        </div>)}
        <button onClick={()=>crearOrden()}>Finalizar Compra</button>


    </>
  );
}