import React from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Cart (){
    const { cart , removeItem}=useContext(CartContext);
    return(
        <>
            {cart.map(prod=><div>
                                <p>{prod.nombre} cantidad:{prod.cuenta}</p>
                                <button onClick={()=>removeItem(prod.id)}>Quitar del Carrito</button>
                            </div>)}
            <Link to='/endOrder'>Finalizar Compra</Link>
        </>
    )
} 