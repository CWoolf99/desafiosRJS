import React, {useState} from "react"

export default function ItemCount({stock, initial}){
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
    alert('Se agregó ' + cuenta +' al carrito');
  }

    return(
        <>
                <button onClick={()=>mas()}>+</button>
                <p>{cuenta}</p>
                <button onClick={()=>menos()}>-</button><br/>
                <button onClick={()=>onAdd()}>Agregar al carrito</button>
        </>
    )
};
