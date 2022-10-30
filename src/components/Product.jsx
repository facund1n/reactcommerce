import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <Card className="m-2">
        <Card.Img variant="top" src="/img/product.png" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success">Comprar</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Product;
