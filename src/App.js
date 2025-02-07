import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import GameDetail from './components/GameDetail';
import GameChat from './components/GameChat';
import Navbar from './components/Navbar';
import GamePhotos from './components/GamePhotos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/Home.css';
import './styles/Navbar.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Schedule />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/game/:id/chat" element={<GameChat />} />
        <Route path="/game/:id/photos" element={<GamePhotos />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/rules" element={<div className="container mt-4"><h2>Rules and Policies</h2></div>} />
        <Route path="/registration" element={<div className="container mt-4"><h2>Registration Form</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



