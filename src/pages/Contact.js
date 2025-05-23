import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Mesajınız için teşekkürler en kısa sürede dönüş sağlayacağım.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };
  
  return (
    <div className="py-12 bg-dark-100 text-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-light-100 mb-4">İletişime Geç</h1>
          <p className="text-light-300 max-w-2xl mx-auto">
            Bir sorunuz mu var ya da birlikte bir mobil uygulama geliştirmek mi istiyorsunuz? Aşağıdaki formu doldurun ya da iletişim kanallarımdan biriyle bana ulaşın.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-dark-200 p-6 rounded-lg shadow-xl border border-primary/20">
              <h2 className="text-2xl font-semibold text-primary mb-6">İletişim Kanalları</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium text-light-100">Email</h3>
                    <p className="text-light-300">yakutenver@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-medium text-light-100">Telefon</h3>
                    <p className="text-light-300"></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-medium text-light-100">Konum</h3>
                    <p className="text-light-300">Balıkesir, Türkiye</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-light-100 mb-4">İletişim</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-dark-200 p-6 rounded-lg shadow-xl border border-primary/20">
              <h2 className="text-2xl font-semibold text-primary mb-6">Gönder</h2>
              
              {submitResult.success ? (
                <div className="bg-dark-300 border border-primary/30 text-primary p-4 rounded-md mb-6">
                  {submitResult.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-light-100 mb-1">
                        İsim
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-dark-300 border border-primary/30 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-light-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-light-100 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-dark-300 border border-primary/30 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-light-100"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-light-100 mb-1">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-dark-300 border border-primary/30 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-light-100"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-light-100 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-dark-300 border border-primary/30 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-light-100"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary text-dark-100 font-medium py-2 px-4 rounded-md hover:bg-accent transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : ' Gönder'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 