// kotitehtävät
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Etusivu from './pages/Etusivu';
import Harjoitukset from './pages/Harjoitukset';
import Ratkaisut1 from './pages/Ratkaisut1';
import Ratkaisut4 from './pages/Ratkaisut4';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {/* detta är nya sättet */}
          <Route exact path='/etusivu' element={<Etusivu />} />
          <Route path='/harjoitukset' element={<Harjoitukset/>} />
          <Route path='/ratkaisut1' element={<Ratkaisut1/>} />
          <Route path='/ratkaisut4' element={<Ratkaisut4/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App; 
