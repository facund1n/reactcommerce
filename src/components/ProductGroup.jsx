import React from "react";
import Product from "./Product"; // Componente
import mock from "../Mocks/Mock.json"; //mock

import { CardGroup, Container } from "react-bootstrap";

export const ProductGroup = () => {
  return (
    <>
      <Container fluid>
        <CardGroup>
          {mock.map((product) => (
            <Product product={product} /> // mapea el 'mock' y obtiene un product (prop) con los valores que obtivo del map del mock
          ))}
        </CardGroup>
      </Container>
    </>
  );
};

export default ProductGroup;
