import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Product from "./Product"; // Componente

// contendor que resguarda las cards con cada producto, le pasamos por props "data" que generó .map de componente ProductListing -> función ObtainData

const ProductGroup = ({ data }) => {
  return (
    <Container>
      <CardGroup>
        <Row xs={2} md={4}>
          {data.map((product, key) => (
            <Col sm={4}>
              <Product product={product} key={key} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default ProductGroup;
