import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const Cards = () => {
  const cartCTX = useContext(CartContext);
  const productsArr = [
    {
      title: "Colors",
      id: 1,
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      id: 2,
      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      id: 3,
      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      id: 4,
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const itemAddHandler = (id, title, imageUrl, price) => {
    cartCTX.addItem({
      id:id,
      title:title,
      imageUrl:imageUrl,
      price:price
    });
    // console.log()
  };
  return productsArr.map((Item) => {
    return (
      <Card style={{ width: "18em", margin: 15 }} key={Item.id}>
        <Card.Img variant="top" src={Item.imageUrl} />
        <Card.Body>
          <Card.Title>{Item.title}</Card.Title>
          <Card.Text> $ {Item.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() =>
              itemAddHandler(Item.id, Item.title, Item.imageUrl, Item.price)
            }
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  });
};

export default Cards;
