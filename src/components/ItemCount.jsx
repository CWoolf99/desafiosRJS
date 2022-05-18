import React, {useState} from "react"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function ItemCount({stock, initial, producto}){
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
  const { addToCart, total } = useContext(CartContext);
  function onAdd(){
    setNumber(cuenta);
    console.log(total)
    addToCart({...producto,cuenta});
  }


    return(
        <>
        {number===0
        ? <div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", height:"auto", width:"100%", marginBottom:"5px"}}>
              <button style={{height:"40px", width:"30px"}} onClick={()=>mas()}>+</button>
              <p style={{backgroundColor:"white", height:"40px", width:"30px", borderStyle:"solid", borderColor:"black"}}>{cuenta}</p>
              <button style={{height:"40px", width:"30px"}} onClick={()=>menos()}>-</button><br/>
            </div>
          <button  onClick={()=>onAdd()}>Agregar al carrito</button>
        </div>  
        :<Link to='/cart'>Terminar compra</Link>}   
        </>
    )
};
