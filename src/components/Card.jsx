import React from "react";
import { Button, Card } from "react-bootstrap";

const Cards = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return productsArr.map((Item) => {
    return (
      <Card style={{ width: "18em", margin: 15 }}>
        <Card.Img variant="top" src={Item.imageUrl} />
        <Card.Body>
          <Card.Title>{Item.title}</Card.Title>
          <Card.Text> $ {Item.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  });
};

export default Cards;
