import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { generateToken } from './firebase';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import Resume from './components/Resume';
import AccessibilityNav from './components/AccessibilityNav';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    generateToken();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accessibility-nav" element={<AccessibilityNav />} />
          </Routes>
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2025 FAZIM R. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
