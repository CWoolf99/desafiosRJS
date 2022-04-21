import React from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext";

export default function Cart (){
    const { cart , removeItem, finalCompra}=useContext(CartContext);
    return(
        <>
            {cart.map(prod=><div>
                                <p>{prod.nombre} cantidad:{prod.cuenta}</p>
                                <button onClick={()=>removeItem(prod.id)}>Quitar del Carrito</button>
                            </div>)}
            <button onClick={()=>finalCompra()}>Finalizar Compra</button>
        </>
    )
} 