import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: '#1a472a',
        padding: '20px 0',
        borderTop: '3px solid #c41e3a',
        width: '100%',
        marginTop: 'auto'
      }}
    >
      <Container fluid>
        <div className="text-center">
          <p className="mb-0" style={{ color: 'white', fontSize: '1rem' }}>
            © 2023 Navidad - Pagina de ejemplo
          </p>
          <p className="text-muted small mt-2" style={{ fontSize: '0.9rem' }}>
            Disfruta de la magia navideña
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;