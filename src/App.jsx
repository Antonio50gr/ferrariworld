import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Asegúrate de importar tu Navbar
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  {/* Asegúrate de que Navbar esté dentro de BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

