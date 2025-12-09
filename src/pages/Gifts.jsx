import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

function Gifts() {
  const [index, setIndex] = useState(0);
  const [budget, setBudget] = useState(100);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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

  const placeholderStyle = {
    width: '100%',
    height: '100px',
    backgroundColor: 'rgba(196, 30, 58, 0.1)',
    border: '2px dashed #c41e3a',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffd700',
    margin: '15px 0'
  };

  const giftCategories = [
    { id: 1, name: 'Para Ninos', items: ['Juguetes', 'Libros', 'Bicicleta'] },
    { id: 2, name: 'Para Adultos', items: ['Electronica', 'Ropa', 'Libros'] },
    { id: 3, name: 'Para Familia', items: ['Juegos', 'Viajes', 'Cena'] },
    { id: 4, name: 'DIY', items: ['Manualidades', 'Galletas', 'Fotoalbum'] }
  ];

  return (
    <Container fluid>
      <h1 style={titleStyle}>Ideas de Regalos Navidenos</h1>
      
      <div className="text-center mb-4">
        <p>Encuentra el regalo perfecto para cada persona</p>
      </div>

      {/* Carrusel simple */}
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        className="mb-4"
      >
        <Carousel.Item>
          <div style={cardStyle}>
            <h3 className="text-center" style={{ color: '#ffd700' }}>Regalos Populares</h3>
            <p className="text-center">Smartphones, Auriculares, Relojes</p>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div style={cardStyle}>
            <h3 className="text-center" style={{ color: '#ffd700' }}>Regalos Economicos</h3>
            <p className="text-center">Tarjetas, Manualidades, Detalles</p>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Filtro de presupuesto */}
      <div style={cardStyle}>
        <h3 style={{ color: '#ffd700' }}>Filtra por presupuesto</h3>
        <Form.Group>
          <Form.Label style={{ color: 'white' }}>Presupuesto: ${budget}</Form.Label>
          <Form.Range
            min="10"
            max="500"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </Form.Group>
      </div>

      {/* Categorias de regalos */}
      <h3 className="text-center mb-4" style={{ color: '#ffd700' }}>Categorias</h3>
      
      <Row>
        {giftCategories.map(category => (
          <Col md={3} key={category.id} className="mb-4">
            <div style={{...cardStyle, height: '100%'}}>
              <h5 style={{ color: '#ffd700' }}>{category.name}</h5>
              <div style={placeholderStyle}>
                <img src='data:image/jpeg;base64,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'/>
              </div>
              <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                {category.items.map((item, idx) => (
                  <li key={idx} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    margin: '5px 0',
                    padding: '10px',
                    borderLeft: '4px solid #ffd700',
                    borderRadius: '5px'
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>

      {/* Consejos */}
      <div style={cardStyle}>
        <h3 style={{ color: '#ffd700' }}>Consejos para regalar</h3>
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          <li style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: '5px 0',
            padding: '10px',
            borderLeft: '4px solid #ffd700',
            borderRadius: '5px'
          }}>Piensa en los intereses de la persona</li>
          <li style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: '5px 0',
            padding: '10px',
            borderLeft: '4px solid #ffd700',
            borderRadius: '5px'
          }}>Considera regalos experienciales</li>
          <li style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: '5px 0',
            padding: '10px',
            borderLeft: '4px solid #ffd700',
            borderRadius: '5px'
          }}>No tiene que ser caro</li>
          <li style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: '5px 0',
            padding: '10px',
            borderLeft: '4px solid #ffd700',
            borderRadius: '5px'
          }}>Personaliza cuando sea posible</li>
        </ul>
      </div>
    </Container>
  );
}

export default Gifts;