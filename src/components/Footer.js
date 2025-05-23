import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();

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
  };
  
  return (
    <footer className="bg-dark-100 text-light-100 py-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-primary">ENVER YAKUT</h2>
            <p className="max-w-md text-light-300">
              Mobile Development
            </p>
            <div className="mt-6 flex items-center text-light-300">
              <span></span>
            </div>
            <div className="mt-6">
              <a 
                href="/Enver_Yakut_cv.pdf"
                download
                className="inline-flex items-center text-primary hover:text-accent transition-colors"
              >
                <FaDownload className="mr-2" /> CV İndir
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-light-300 hover:text-primary transition-colors">Ana Sayfa</Link>
                </li>
                <li>
                  <Link to="/projects" className="text-light-300 hover:text-primary transition-colors">Projeler</Link>
                </li>
                <li>
                  <Link to="/about" className="text-light-300 hover:text-primary transition-colors">Hakkımda</Link>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    onClick={scrollToSkills}
                    className="text-light-300 hover:text-primary transition-colors cursor-pointer"
                  >
                    Neler Yapabilirim
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-light-300 hover:text-primary transition-colors">İletişim</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/enver-yakut-419418321/" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:yakutenver@gmail.com" className="text-light-300 hover:text-primary transition-colors">
                  <FaEnvelope size={24} />
                </a>
              </div>
              <div className="mt-4">
                <p className="text-light-300 text-sm">
                  Email: yakutenver@gmail.com<br />
                  Lokasyon: Balikesir, Türkiye
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-300">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-light-300 text-sm">
              &copy; {new Date().getFullYear()} Enver Yakut. Bütün Haklarını Sakladım
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 