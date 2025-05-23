import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'İngilizce Kelime Uygulaması',
      description: 'Teknofest ekibimizle geliştirmekte olduğumuz ilkokul öğrencileri için yapay zeka destekli ingilizce kelime çalışması yapabilecekleri uygulama',
      image: '/images/inglizce-kelime.png',
      tags: ['flutter', 'dart', 'firebase', 'mobile', 'teknofest'],
      codeLink: 'https://github.com/EyakutDev',
    },
    {
      id: 2,
      title: 'FPS Game With Unity',
      description: 'Gamejam yarışmasında ekibimle geliştirdiğimiz FPS masaüstü oyunu',
      image: 'https://via.placeholder.com/600x400',
      tags: ['unity', 'c#', 'blender', 'mobile gaming'],
      codeLink: 'https://github.com/EyakutDev',
    },
    {
      id: 3,
      title: 'Horror Game With Unity',
      description: 'Karanlık bir ormanda elinde sadece fenerle ormandan kurtulmaya çalışan oyuncu ormanda bulduğu ipuçlarıyla yoluna devam eder.',
      image: '/images/horror-game.png',
      tags: ['unity', 'c#', 'blender', '3d modeling'],
      codeLink: 'https://github.com/EyakutDev',
    }
  ];

  return (
    <div className="bg-dark-100 text-light-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-light-100 mb-4">Projelerim</h1>
          <p className="text-light-300 max-w-2xl mx-auto">
            "Yaptığım mobil uygulama ve oyunları burada paylaşıyorum. Her biri ayrı bir deneyim!"
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-dark-300 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition border border-primary/10 hover:border-primary/30">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-primary/70 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dark-100 text-primary hover:text-accent p-3 rounded-full hover:bg-dark-200 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dark-100 text-primary hover:text-accent p-3 rounded-full hover:bg-dark-200 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-light-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-dark-200 text-light-300 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}


      </div>
    </div>
  );
};

export default Projects; 