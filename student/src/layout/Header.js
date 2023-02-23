import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="px-4"
    >
      <Container>
        <Navbar.Brand href="#home">Student</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={() => navigate("/")}>
              หน้าแรก
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/student")}>
              ข้อมูลนักศึกษา
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">เข้าสู่ระบบ</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              ลงทะเบียน
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
