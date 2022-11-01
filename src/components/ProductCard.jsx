import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <Card className="my-1" style={{ height: "95%" }}>
          <Card.Body style={{ height: "50%" }}>
            <Card.Img
              variant="top"
              style={{ height: "100%", width: "100%" }}
              src={product.image}
            />
          </Card.Body>
          <Card.Footer style={{ height: "50%" }}>
            <strong>{product.title}</strong>
            <h4>${product.price}</h4>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
};

export default Product;
