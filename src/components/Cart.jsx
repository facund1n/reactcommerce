import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand, k) => (
        <Navbar key={expand} bg="light" expand={expand} k={k}>
          <Container>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              k={k}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              k={k}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  k={k}
                >
                  CART
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
