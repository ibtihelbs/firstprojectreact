import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const navLinks = [
  { name: "home", link: "#home" },
  { name: "Header", link: "#Header" },
  { name: "Cards", link: "#Cards" },
  { name: "Contact", link: "#Contact" },
];
const NavbarComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {navLinks.map((v, i) => (
            <Nav.Link href={v.link} key={i}>
              {" "}
              {v.name}{" "}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
