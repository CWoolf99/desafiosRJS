import React from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { ListGroup, Badge, Button} from "react-bootstrap";

export default function Cart (){
    const { cart , removeItem, total}=useContext(CartContext);
    return(
        <>
            {cart.map(prod=><ListGroup key={prod.id} as="ol">
                                <ListGroup.Item style={{backgroundColor:"lightblue"}}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">{prod.nombre}</div>
                                    {prod.precio*prod.cuenta}
                                    </div>
                                    <Badge bg="primary" pill>
                                    {prod.cuenta}
                                    </Badge>
                                    <Button variant="danger" size="sm" onClick={()=>removeItem(prod.id, prod.cuenta ,prod.precio)}>X</Button>
                                </ListGroup.Item>
                            </ListGroup>)}
        <ListGroup.Item style={{backgroundColor:"lightblue"}} as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            <div className="fw-bold">Total</div>
            ${total}
            </div>
        </ListGroup.Item>
            <Link to='/endOrder'>Finalizar Compra</Link>

        </>
    )
} 