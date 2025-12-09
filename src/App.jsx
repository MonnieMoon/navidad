import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChristmasTrees from './pages/ChristmasTrees';
import Gifts from './pages/Gifts';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: '#0a2e1f'
      }}>
        <Navbar />
        <div style={{ 
          flex: 1, 
          width: '100%',
          padding: '20px 0'
        }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trees" element={<ChristmasTrees />} />
              <Route path="/gifts" element={<Gifts />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;