import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "./styles/Home.css"; 
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import GameDetail from './components/GameDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Schedule />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



