import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext)
  
  // const cartElements = [
  //   {
  //     title: "Colors",

  //     price: 100,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

  //     quantity: 2,
  //   },

  //   {
  //     title: "Black and white Colors",

  //     price: 50,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

  //     quantity: 3,
  //   },

  //   {
  //     title: "Yellow and Black Colors",

  //     price: 70,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

  //     quantity: 1,
  //   },
  // ];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", gap: "20%" }}>
          <span>Item</span>
          <span>Price</span>
          <span>quantity</span>
        </div>
      </Modal.Body>
      {cartCtx.items.map((element) => {
        return (
          <div
            key={element.id}
            style={{ display: "flex", gap: "10%", width: "100%", margin:'10px' }}
          >
            <span >
              <Card.Img
                variant="top"
                src={element.imageUrl}
                style={{ width: "80px", borderRadius: "10px" }}
              />
              <span style={{ display:'flex', width:'80px',wordWrap:'wrap'}}>{element.title}</span>
            </span>
            <span>$ {element.price}</span>
            <span>
              <input value={"1"} style={{ width: "35px" }}></input>
            </span>
            <span>
              <Button variant="danger">REMOVE</Button>{" "}
            </span>
          </div>
        );
      })}
      <Modal.Footer>
      <span style={{position:'absolute', left:"2%", fontSize:'25px', color:'green', fontWeight:'bolder'}}>Total Amount: $ {cartCtx.totalAmmount}</span>
        <Button /*onClick={props.onHide}*/>PURCHASE</Button>
      </Modal.Footer>
    </Modal>
  );
  // });
};

export default CartModal;
