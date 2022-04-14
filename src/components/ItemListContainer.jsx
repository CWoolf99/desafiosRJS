import React from "react";
import ItemList from "./ItemList";
import { Container, Row } from "react-bootstrap";
import {productosfetch} from "./Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer () {
const {categoryId}=useParams();

const [productos,setproductos]=useState([]);
useEffect(()=>{
    productosfetch(categoryId)
    .then((resp)=>setproductos(resp))
    .catch((err)=>console.log(err))
},[categoryId]);   
  return (
    <>
    <p> Catalogo</p>
    <Container>
      <Row>
        <ItemList productos={productos}/>
      </Row>
    </Container>
    </>
  );
}