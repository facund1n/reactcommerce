import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            E - Commerce The Comeback
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
