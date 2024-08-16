import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
import About from './componets/About';
import Services from './componets/Services';
import Contact from './componets/Contact';
import Navbar from './componets/Navbar';


function App() {
  return (
      <BrowserRouter>
      <div>
        <header>
        <Navbar />
        </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} />
                  </Routes>
              </main>
            </div>
      </BrowserRouter>
  );
}

export default App;
