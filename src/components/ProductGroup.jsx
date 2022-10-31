import React from "react";
import { useState, useEffect } from "react";
import { CardGroup, Container } from "react-bootstrap";
import Product from "./Product"; // Componente

export const ProductGroup = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <Container>
        <CardGroup>
          {data.map((product) => (
            <Product product={product} />
          ))}
        </CardGroup>
      </Container>
    </>
  );
};

export default ProductGroup;
