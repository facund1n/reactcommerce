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
            <Product product={product} />
          ))}
        </CardGroup>
      </Container>
    </>
  );
};

export default ProductGroup;
