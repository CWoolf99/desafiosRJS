import React from "react"
import ItemCount from "./ItemCount"


export default function ItemListContainer () {

  return (
    <>
      <p> Container para el catalogo de futuros desafios</p>
      <ItemCount stock={10}/>
    </>
  );
}