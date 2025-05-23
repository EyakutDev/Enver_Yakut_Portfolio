import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const scrollToSkills = (e) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home page first
    if (location.pathname !== '/') {
      window.location.href = '/#skills';
      return;
    }
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`${scrolled ? 'bg-dark-100/90 backdrop-blur shadow-lg' : 'bg-dark-100'} sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'border-primary/20' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary hover:text-accent transition-colors">ENVER YAKUT</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-light-100'} hover:text-accent hover:bg-dark-200 transition-colors`}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/projects" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/projects') ? 'text-primary' : 'text-light-100'} hover:text-accent hover:bg-dark-200 transition-colors`}
            >
              Projeler
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-primary' : 'text-light-100'} hover:text-accent hover:bg-dark-200 transition-colors`}
            >
              Hakkımda
            </Link>
            <a 
              href="#skills" 
              onClick={scrollToSkills}
              className={`px-3 py-2 rounded-md text-sm font-medium text-light-100 hover:text-accent hover:bg-dark-200 transition-colors cursor-pointer`}
            >
              Neler Yapabilirim?
            </a>
            <Link 
              to="/contact" 
              className={`ml-2 px-4 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') 
                  ? 'bg-primary text-dark-100' 
                  : 'bg-primary/80 text-dark-100 hover:bg-accent'
              } transition-colors shadow-md hover:shadow-lg hover:shadow-primary/20`}
            >
              İletişim
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent hover:bg-dark-200"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-200 shadow-lg border-t border-primary/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary bg-dark-300' : 'text-light-100'} hover:text-accent hover:bg-dark-300`}
              onClick={toggleMenu}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects') ? 'text-primary bg-dark-300' : 'text-light-100'} hover:text-accent hover:bg-dark-300`}
              onClick={toggleMenu}
            >
              Projeler
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-primary bg-dark-300' : 'text-light-100'} hover:text-accent hover:bg-dark-300`}
              onClick={toggleMenu}
            >
              Hakkımda
            </Link>
            <a 
              href="#skills" 
              onClick={scrollToSkills}
              className="block px-3 py-2 rounded-md text-base font-medium text-light-100 hover:text-accent hover:bg-dark-300 cursor-pointer"
            >
              Neler Yapabilirim
            </a>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium mt-2 bg-primary text-dark-100 hover:bg-accent shadow-md"
              onClick={toggleMenu}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 