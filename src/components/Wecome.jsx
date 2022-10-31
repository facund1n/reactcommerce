import { Card, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <>
      <Card className="py-5 border-0 rounder-0 bg-warning ">
        <div className="mx-auto text-center">
          <Card.Body>
            <Card.Title as="h1">Hola, bienveidos a nuestro sitio.</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Acerca de nosotros</Button>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default Welcome;
