import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaDatabase, FaFire, FaDownload } from 'react-icons/fa';
import { SiDart, SiFlutter, SiUnity, SiBlender } from 'react-icons/si';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const skillsContainerRef = useRef(null);
  
  // For the scramble effect
  const [titleText, setTitleText] = useState('');
  const [isScrambling, setIsScrambling] = useState(true);
  const finalTitle = "Merhaba, Ben Enver Yakut";
  const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // Random string effect
  useEffect(() => {
    let interval;
    
    if (isScrambling) {
      // Track how many characters are revealed
      let revealedCount = 0;
      const maxRevealedCount = finalTitle.length;
      
      interval = setInterval(() => {
        if (revealedCount >= maxRevealedCount) {
          setIsScrambling(false);
          setTitleText(finalTitle);
          clearInterval(interval);
          return;
        }
        
        // Increase revealed count
        revealedCount += 1;
        
        // Create new scrambled text with more characters revealed from left to right
        setTitleText(
          finalTitle
            .split("")
            .map((char, idx) => {
              // Keep spaces as spaces
              if (char === ' ') return ' ';
              
              // Characters up to revealedCount are shown normally
              if (idx < revealedCount) {
                return finalTitle[idx];
              }
              
              // Otherwise return a random character
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
      }, 100); // Slower animation (was 70ms)
    }
    
    return () => clearInterval(interval);
  }, [isScrambling, finalTitle]);
  
  const textArray = [
    "Mobil Uygulama Geliştirci",
    "Flutter Uygulama Geliştirici",
    
  ];
  
  useEffect(() => {
    const typingEffect = () => {
      const currentText = textArray[textIndex];
      
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        return;
      }
      
      if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        return;
      }
      
      if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % textArray.length);
        return;
      }
      
      if (charIndex === currentText.length && !isDeleting) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
        return;
      }
    };
    
    const timer = setTimeout(typingEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, textArray]);

  const skills = [
    { 
      name: 'JavaScript', 
      icon: <FaJs size={48} />, 
      color: 'code-js',

    },
    { 
      name: 'React', 
      icon: <FaReact size={48} />, 
      color: 'primary',

    },
    { 
      name: 'Unity', 
      icon: <SiUnity size={48} />, 
      color: 'gray-400',

    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs size={48} />, 
      color: 'code-node',

    },
    { 
      name: 'Python', 
      icon: <FaPython size={48} />, 
      color: 'code-py',

    },
    { 
      name: 'Flutter', 
      icon: <SiFlutter size={48} />, 
      color: 'code-flutter',

    },
    { 
      name: 'Dart', 
      icon: <SiDart size={48} />, 
      color: 'code-dart',

    },
    { 
      name: 'Firebase', 
      icon: <FaFire size={48} />, 
      color: 'code-firebase',

    },
    { 
      name: 'HTML5', 
      icon: <FaHtml5 size={48} />, 
      color: 'orange-500',

    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt size={48} />, 
      color: 'blue-500',

    },
    { 
      name: 'Blender', 
      icon: <SiBlender size={48} />, 
      color: 'orange-500',

    },
    { 
      name: 'SQL', 
      icon: <FaDatabase size={48} />, 
      color: 'gray-400',

    }
  ];

  const handleScrollLeft = () => {
    if (skillsContainerRef.current) {
      skillsContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (skillsContainerRef.current) {
      skillsContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dark-100 text-light-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-200 to-dark-100 text-light-100 py-20 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-light-100">
                {titleText}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-primary min-h-[40px]">
                 <span className="text-accent">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-xl mb-8 max-w-md text-light-300 ml-8">
                          Mobil uygulamalar geliştiriyorum!
              </p>
              <div className="flex flex-wrap gap-4 ml-12" >
                <Link
                  to="/contact"
                  className="bg-primary text-dark-100 font-medium py-2 px-6 rounded-md hover:bg-accent transition"
                >
                  İletişim
                </Link>
                <Link
                  to="/projects"
                  className="bg-transparent border-2 border-primary text-primary font-medium py-2 px-6 rounded-md hover:bg-primary/10 transition"
                >
                  Projeleri Gör
                </Link>
                <a 
                  href="/Enver_Yakut_cv.pdf"
                  download
                  className="flex items-center bg-accent text-dark-100 font-medium py-2 px-6 rounded-md hover:bg-primary transition-colors shadow-lg hover:shadow-accent/30"
                >
                  <FaDownload className="mr-2" /> CV İndir
                </a>
              </div>
              <div className="flex mt-6 space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-300 hover:text-primary transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-300 hover:text-primary transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-300 hover:text-primary transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-dark-300 shadow-2xl border-2 border-primary/30 flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full bg-dark-200 flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl"></span>
                  {  <img src="/images/bitmoji.jpg" alt="Enver Yakut" className="rounded-full object-cover w-60 h-65" /> }
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-light-100 mb-4">Neler Yapabilirim?</h2>
            <p className="text-light-300 max-w-2xl mx-auto">
              Çalıştığım projelerde kullandığım teknolojiler.
            </p>
          </div>
          
          <div className="relative">
            {/* Scroll Left Button */}
            <button 
              onClick={handleScrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-dark-100/80 text-primary hover:text-accent p-2 rounded-full shadow-lg md:flex hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Skills Carousel */}
            <div 
              ref={skillsContainerRef}
              className="flex overflow-x-auto py-8 px-4 hide-scrollbar snap-x snap-mandatory gap-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center w-[280px] bg-dark-300 p-6 rounded-xl shadow-xl border border-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`text-${skill.color} mb-4 rounded-full p-4 bg-dark-100`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{skill.name}</h3>
                    <p className="text-light-300 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Right Button */}
            <button 
              onClick={handleScrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-dark-100/80 text-primary hover:text-accent p-2 rounded-full shadow-lg md:flex hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-6 md:hidden">
            <p className="text-light-300 text-sm">Swipe to see more skills</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 