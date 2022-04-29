import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc , getDoc , getFirestore} from "firebase/firestore";

export default function ItemDetailContainer(){
    const [producto,setproducto]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=doc(db,"productos", id);
        getDoc(itemsCollection).then((snapshot)=>{
            setproducto({id:snapshot.id,...snapshot.data()});
        })
    },[id]); 
    
    return(
        <>
        <ItemDetail producto={producto}/>
        </>
    );
}