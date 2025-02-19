import React from 'react'

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<About/>}/>
      <Route path="/" element={<Cars/>}/>
      <Route path="/" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

