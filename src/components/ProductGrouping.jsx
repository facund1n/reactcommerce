import { CardGroup, Container } from "react-bootstrap";
import Product from "./Product"; // Componente

// contendor que resguarda las cards con cada producto, le pasamos por props "data" que generó .map de componente ProductListing -> función ObtainData

const ProductGroup = ({ data }) => {
  return (
    <Container>
      <CardGroup>
        {data.map((product, key) => (
          <Product product={product} key={key} />
        ))}
      </CardGroup>
    </Container>
  );
};

export default ProductGroup;
