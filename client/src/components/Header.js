import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tech Helper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/QuestionForm">Tech Assist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
