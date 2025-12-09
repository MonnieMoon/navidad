import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Recipes() {
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
    height: '120px',
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

  const recipes = [
    { id: 1, name: 'Galletas de Jengibre', time: '45 min', difficulty: 'Facil' },
    { id: 2, name: 'Pavo Navideno', time: '4 horas', difficulty: 'Dificil' },
    { id: 3, name: 'Ponche de Frutas', time: '30 min', difficulty: 'Facil' },
    { id: 4, name: 'Tronco de Navidad', time: '2 horas', difficulty: 'Medio' }
  ];

  return (
    <Container fluid>
      <h1 style={titleStyle}>Recetas Navidenas</h1>
      
      <div className="text-center mb-4">
        <p>Deliciosas recetas para disfrutar en familia</p>
      </div>

      {/* Buscador */}
      <div style={cardStyle}>
        <h3 style={{ color: '#ffd700' }}>Busca recetas</h3>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Buscar receta..."
              style={formInputStyle}
            />
          </Form.Group>
        </Form>
      </div>

      {/* Recetas */}
      <h3 className="text-center mb-4" style={{ color: '#ffd700' }}>Recetas Disponibles</h3>
      
      <Row>
        {recipes.map(recipe => (
          <Col md={3} key={recipe.id} className="mb-4">
            <div style={{...cardStyle, height: '100%'}}>
              <div style={placeholderStyle}>
                {recipe.name}
              </div>
              <h5 className="mt-3" style={{ color: '#ffd700' }}>{recipe.name}</h5>
              <p>Tiempo: {recipe.time}</p>
              <p>Dificultad: {recipe.difficulty}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Receta destacada */}
      <div style={cardStyle}>
        <img src='data:image/jpeg;base64,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'/>
        <Row>
          <Col md={8}>
            <h5>Ingredientes:</h5>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                margin: '5px 0',
                padding: '10px',
                borderLeft: '4px solid #ffd700',
                borderRadius: '5px'
              }}>3 tazas de harina</li>
              <li style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                margin: '5px 0',
                padding: '10px',
                borderLeft: '4px solid #ffd700',
                borderRadius: '5px'
              }}>1 cucharadita de jengibre</li>
              <li style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                margin: '5px 0',
                padding: '10px',
                borderLeft: '4px solid #ffd700',
                borderRadius: '5px'
              }}>3/4 taza de mantequilla</li>
              <li style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                margin: '5px 0',
                padding: '10px',
                borderLeft: '4px solid #ffd700',
                borderRadius: '5px'
              }}>1 huevo</li>
            </ul>
          </Col>
          <Col md={4}>
            <div style={{...placeholderStyle, height: '100%'}}>
              Imagen de galletas
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Recipes;