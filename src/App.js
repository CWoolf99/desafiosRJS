import React from "react"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import NavbarW from "./components/NavbarW"



export default function App () {
  return (
    <>
    <NavbarW/>
    <ItemDetailContainer/>
    <ItemListContainer/>
    </>
  );
}

