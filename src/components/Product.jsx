import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-1" style={{ height: "95%" }}>
        <Card.Body style={{ height: "50%" }}>
          <Card.Img
            variant="top"
            style={{ height: "100%", width: "100%" }}
            src={product.image}
          />
        </Card.Body>
        <Card.Footer style={{ height: "50%" }}>
          <div>
            <div>{product.title}</div>
          </div>
          <div>
            <div>${product.price}</div>
          </div>
          {/* <div>
            <Button variant="success">Comprar</Button>
          </div> */}
          {/* <Card.Text>{product.description}</Card.Text> */}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Product;
