import React, {useState} from "react"
import { Link } from "react-router-dom";

export default function ItemCount({stock, initial}){
  const [number,setNumber]=useState(0);
    const [cuenta, setcuenta]=useState(initial)
  function mas(){
    if (cuenta<stock){
    setcuenta(cuenta+1)}
  }
  function menos(){
    if (cuenta>1){
    setcuenta(cuenta-1)}
  }

  function onAdd(){
    setNumber(cuenta);
  }
  

    return(
        <>
        {number===0
        ? <div>
        <button onClick={()=>mas()}>+</button>
        <p>{cuenta}</p>
        <button onClick={()=>menos()}>-</button><br/>
        <button onClick={()=>onAdd()}>Agregar al carrito</button>
        </div>  
        :<Link to='/cart'>Terminar compra</Link>}   
        </>
    )
};
