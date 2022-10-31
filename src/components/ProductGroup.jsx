import { CardGroup, Container } from "react-bootstrap";
import Product from "./Product"; // Componente

const ProductGroup = ({ data }) => {
  // Container que tiene cada card armada y consume su api
  return (
    <Container>
      <CardGroup>
        {data.map((product) => (
          <Product product={product} />
        ))}
        <Product />
      </CardGroup>
    </Container>
  );
};

export default ProductGroup;
