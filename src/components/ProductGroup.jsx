import { CardGroup, Container } from "react-bootstrap";
import Product from "./Product"; // Componente

export const ProductGroup = ({ data }) => {
  console.log(data, "data?");
  return (
    // Container que tiene cada card armada y consume su api
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
