
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navbarra() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://osinskiltd.com/wp-content/uploads/2022/08/1464899714.png"
              width="150"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
            <Nav.Link href="/Mensajes">Mensajes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarra;