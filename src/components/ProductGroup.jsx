import React from "react";
import { useState, useEffect } from "react";

import Product from "./Product"; // Componente

import { CardGroup, Container } from "react-bootstrap";

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
            <Product product={product} /> // mapea el 'mock' y obtiene un product (prop) con los valores que obtivo del map del mock
          ))}
        </CardGroup>
      </Container>
    </>
  );
};

export default ProductGroup;
