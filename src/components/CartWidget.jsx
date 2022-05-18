import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


export default function CartWidget () {
  const { cartWidget}=useContext(CartContext);
  return (
    <>
    <Link to="/cart"> 🛒({cartWidget})</Link>
    </>
  );
}