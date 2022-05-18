import React from "react";
import ItemList from "./ItemList";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection , getDocs , getFirestore , query , where} from "firebase/firestore";

export default function ItemListContainer () {
  const [productos,setproductos]=useState([]);
  const {categoryId}=useParams();
  useEffect(()=>{
    const db=getFirestore();
    let itemsCollection;
    if(!categoryId){
      itemsCollection=collection(db,"productos")
    }else{
    itemsCollection=query(collection(db,"productos"),where('categoria',"==",categoryId));}
    getDocs(itemsCollection).then((snapshot)=>{
        setproductos(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})));
    })
},[categoryId]);
  

  return (
    <>
    <div style={{backgroundColor:"lightblue", paddingBottom:"300px"}}>
      <p style={{fontFamily:"'Bebas Neue', cursive", color:"white", fontSize:"50px"}}> Catalogo</p>
      <Container>
        <Row>
          <ItemList productos={productos}/>
        </Row>
      </Container>
    </div>
    </>
  );
}