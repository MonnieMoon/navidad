import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: '#1a472a',
    border: '2px solid #c41e3a',
    borderRadius: '10px',
    padding: '20px',
    margin: '15px 0',
    color: 'white',
    height: '100%'
  };

  const titleStyle = {
    color: '#ffd700',
    textAlign: 'center',
    margin: '30px 0',
    padding: '20px',
    backgroundColor: 'rgba(196, 30, 58, 0.2)',
    borderRadius: '10px',
    border: '2px solid #c41e3a'
  };

  const buttonStyle = {
    backgroundColor: '#c41e3a',
    color: 'white',
    border: '2px solid #ffd700',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    margin: '10px'
  };

  const placeholderStyle = {
    width: '100%',
    height: '200px',
    backgroundColor: 'rgba(196, 30, 58, 0.1)',
    border: '2px dashed #c41e3a',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffd700',
    margin: '20px 0'
  };

  const listStyle = {
    listStyle: 'none',
    paddingLeft: '0'
  };

  const listItemStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '5px 0',
    padding: '10px',
    borderLeft: '4px solid #ffd700',
    borderRadius: '5px'
  };

  return (
    <Container fluid>
      <h1 style={titleStyle}>Bienvenidos a la Navidad 2023</h1>
      
      <div className="text-center mb-4">
        <p style={{ fontSize: '1.2rem' }}>Encuentra todo lo necesario para celebrar la navidad</p>
      </div>

      <Row className="mb-4">
        <Col md={6}>
          <div style={cardStyle}>
            <h3 style={{ color: '#ffd700' }}>Sobre la Navidad</h3>
            <p className="mt-3">
              La Navidad es una época especial para compartir con familia y amigos.
              En nuestro sitio encontrarás ideas para hacer estas fiestas memorables.
            </p>
          </div>
        </Col>
        
        <Col md={6}>
          <div style={cardStyle}>
            <h3 style={{ color: '#ffd700' }}>Lo que ofrecemos</h3>
            <ul style={listStyle} className="mt-3">
              <li style={listItemStyle}>Ideas para decorar arboles</li>
              <li style={listItemStyle}>Sugerencias de regalos</li>
              <li style={listItemStyle}>Recetas navideñas</li>
              <li style={listItemStyle}>Informacion de contacto</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div style={{
  width: '100%',
  maxWidth: '600px',
  margin: '20px auto',
  padding: '15px',
  backgroundColor: '#1a472a',
  borderRadius: '10px',
  border: '2px solid #c41e3a',
  textAlign: 'center'
}}>
  <img 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW32dw3kIPDEyvbM06VLDvE8rvkV-pKEuSeQ&s'
    alt="Imagen navideña"
    style={{
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '8px',
      border: '3px solid #ffd700',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
    }}
  />
</div>

      <div className="text-center mt-4">
        <Button 
          style={buttonStyle}
          onClick={() => navigate('/trees')}
        >
          Ver Arboles
        </Button>
        <Button 
          style={buttonStyle}
          onClick={() => navigate('/gifts')}
        >
          Ver Regalos
        </Button>
      </div>
    </Container>
  );
}

export default Home;