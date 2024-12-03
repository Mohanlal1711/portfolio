import React from 'react';
import Navbar from './components/Navebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/style.css';

function App() {
  return (
    <Router>
      <div>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactForm" element={<ContactForm />} />
         
        </Routes>
      </div>
      
      <Footer/>
    </Router>
  );
}

export default App;
