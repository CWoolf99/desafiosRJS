import React from "react"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import NavbarW from "./components/NavbarW"
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App () {
  return (
    <BrowserRouter>
      <NavbarW/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

