import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const cardStyle = {
    backgroundColor: '#1a472a',
    border: '2px solid #c41e3a',
    borderRadius: '10px',
    padding: '20px',
    margin: '15px 0',
    color: 'white'
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
    fontWeight: 'bold'
  };

  const placeholderStyle = {
    width: '100%',
    height: '150px',
    backgroundColor: 'rgba(196, 30, 58, 0.1)',
    border: '2px dashed #c41e3a',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffd700',
    margin: '15px 0'
  };

  const formInputStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '2px solid #c41e3a',
    color: 'white',
    marginBottom: '15px'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado a Santa');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container fluid>
      <h1 style={titleStyle}>Contacto Navideno</h1>
      
      <div className="text-center mb-4">
        <p>Envia un mensaje a Santa Claus</p>
      </div>

      <Row>
        <Col lg={8}>
          <div style={cardStyle}>
            <h3 style={{ color: '#ffd700' }}>Formulario de Contacto</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={formInputStyle}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={formInputStyle}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label style={{ color: 'white' }}>Mensaje para Santa</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={formInputStyle}
                  required
                />
              </Form.Group>

              <Button type="submit" style={buttonStyle}>
                Enviar Mensaje
              </Button>
            </Form>
          </div>
        </Col>

        <Col lg={4}>
          <div style={{...cardStyle, height: '100%'}}>
            <h3 style={{ color: '#ffd700' }}>Informacion de Santa</h3>
            <div className="mt-3">
              <h5 style={{ color: '#ffd700' }}>Direccion:</h5>
              <p>Polo Norte, Taller de Santa</p>
            </div>
            
            <div className="mt-3">
              <h5 style={{ color: '#ffd700' }}>Telefono:</h5>
              <p>+1-555-SANTA-CLAUS</p>
            </div>
            
            <div className="mt-3">
              <h5 style={{ color: '#ffd700' }}>Email:</h5>
              <p>santa@polonorte.com</p>
            </div>
            
            <div style={placeholderStyle}>
              Imagen de Santa
            </div>
          </div>
        </Col>
      </Row>

      {/* Informacion adicional */}
      <Row className="mt-4">
        <Col md={4}>
          <div style={{...cardStyle, height: '100%'}}>
            <h5 style={{ color: '#ffd700' }}>Horarios de Entrega</h5>
            <p>24 de Diciembre, despues de medianoche</p>
          </div>
        </Col>
        
        <Col md={4}>
          <div style={{...cardStyle, height: '100%'}}>
            <h5 style={{ color: '#ffd700' }}>Para Santa</h5>
            <p>Galletas y leche</p>
          </div>
        </Col>
        
        <Col md={4}>
          <div style={{...cardStyle, height: '100%'}}>
            <h5 style={{ color: '#ffd700' }}>Para los Renos</h5>
            <p>Zanahorias y agua</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;