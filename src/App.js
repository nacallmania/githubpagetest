import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import './App.css';

function App() {
    return ( 
      <BrowserRouter>            
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>      
      </BrowserRouter>
    );
}

export default App;
