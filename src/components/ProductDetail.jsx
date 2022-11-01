import { Button, Card, Row, Col } from "react-bootstrap";

const ProductDetail = ({ data }) => {
  return (
    <>
      <Row sm={6} md={2}>
        <Card className=" h-100 border-0">
          <Col>
            <Card.Body>
              <Card.Img variant="top" src={data.image} />
            </Card.Body>
          </Col>
          <Col>
            <Card.Footer>
              <strong>{data.title}</strong>
            </Card.Footer>
            <Button variant="Primary">Comprar</Button>
          </Col>
          <Col>
            <Card.Footer>
              <p>{data.description}</p>
              <h4>${data.price}</h4>
            </Card.Footer>
            <Button variant="Primary">Comprar</Button>
          </Col>
        </Card>
      </Row>
    </>
  );
};

export default ProductDetail;
