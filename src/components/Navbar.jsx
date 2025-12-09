import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ChristmasNavbar() {
  return (
    <Navbar 
      expand="lg" 
      style={{
        backgroundColor: '#1a472a',
        borderBottom: '3px solid #c41e3a',
        width: '100%'
      }}
    >
      <Container fluid>
        <Navbar.Brand 
          as={Link} 
          to="/"
          style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          Navidad 2023
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/"
              style={{ color: 'white', fontSize: '1.1rem', padding: '10px 15px' }}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/trees"
              style={{ color: 'white', fontSize: '1.1rem', padding: '10px 15px' }}
            >
              Arboles
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/gifts"
              style={{ color: 'white', fontSize: '1.1rem', padding: '10px 15px' }}
            >
              Regalos
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/recipes"
              style={{ color: 'white', fontSize: '1.1rem', padding: '10px 15px' }}
            >
              Recetas
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact"
              style={{ color: 'white', fontSize: '1.1rem', padding: '10px 15px' }}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ChristmasNavbar;