import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);
  const beamRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Skip cursor effects on mobile
    if (isMobile) return;

    // Mouse move event to update cursor position with smooth lag
    const onMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Update the beam position with slight delay for smoother movement
      if (beamRef.current) {
        setTimeout(() => {
          beamRef.current.style.left = `${e.clientX}px`;
          beamRef.current.style.top = `${e.clientY}px`;
        }, 50);
      }
    };

    // Check for interactable elements
    const onMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    // Clean up
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isMobile]);

  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col bg-dark-100 text-light-100">
        {/* Only show cursor effects on non-mobile devices */}
        {!isMobile && (
          <>
            {/* Main cursor beam */}
            <div 
              ref={beamRef}
              className={`cursor-beam ${isActive ? 'active' : ''}`}
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
              }}
            ></div>
          </>
        )}
        
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
