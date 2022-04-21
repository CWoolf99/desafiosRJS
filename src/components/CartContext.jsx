import React, {createContext} from 'react';
import { useState } from 'react';


 export const CartContext= createContext();

const CartContextProvider=({children})=>{

const [cart,setCart]=useState([]);
const addToCart=(item)=>{ 
    const indexPlant = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexPlant !== -1) {
      const newCart = [...cart];
      newCart[indexPlant].cuenta = newCart[indexPlant].cuenta + item.cuenta;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }}
const removeItem=(prId)=>{setCart(cart.filter((prod) => prod.id!==prId))}
const finalCompra=()=>{setCart([])};
return(
    <CartContext.Provider value={{ cart, addToCart, removeItem, finalCompra}}>
         {children}
    </CartContext.Provider>
    );
 }
 

export default CartContextProvider;

