import './App.css';
import OSnotes from './components/OSnotes'
import Elecnotes from './components/Elecnotes'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <nav>
        <>
          <Link to="/os">ОС</Link>  
          <Link to="/tsi">ТСИ</Link>
          <Link to="/electronics">Электроника</Link>
          <Link to="/">Home</Link>
        </>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/os" element={<OSnotes />} />  
          <Route path="/electronics" element={<Elecnotes />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
