import { CardGroup, Container } from "react-bootstrap";
import Product from "./Product"; // Componente

const ProductGroup = ({ data }) => {
  return (
    <Container>
      <CardGroup>
        {data.map((product) => (
          <Product product={product} />
        ))}
      </CardGroup>
    </Container>
  );
};

export default ProductGroup;
