import React, {createContext} from 'react';
import { useState } from 'react';


 export const CartContext= createContext();

const CartContextProvider=({children})=>{

const [cart,setCart]=useState([]);
const [total, setTotal]=useState(0)
const addToCart=(item)=>{ 
    setTotal(item.cuenta*item.precio+total);
    const indexPlant = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexPlant !== -1) {
      const newCart = [...cart];
      newCart[indexPlant].cuenta = newCart[indexPlant].cuenta + item.cuenta;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }}
const cartWidget=cart.length;
const removeItem=(prId, prC, prP)=>{
                                    setTotal(total-(prC*prP));
                                    setCart(cart.filter((prod) => prod.id!==prId))}
const finalCompra=()=>{setCart([])
                      setTotal(0)};
return(
    <CartContext.Provider value={{ cart, addToCart, removeItem, finalCompra, cartWidget, total}}>
         {children}
    </CartContext.Provider>
    );
 }
 

export default CartContextProvider;

