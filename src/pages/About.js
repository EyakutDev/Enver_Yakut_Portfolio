import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaCode, FaLaptopCode, FaGraduationCap, FaUserTie, FaGamepad, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      title: 'İngilizce Kelime Uygulaması',
      company: 'Teknofest Projesi',
      period: '2025- Devam Ediyor',
      description: '"Teknofest için geliştirilen İngilizce kelime uygulamasında backend tarafında Flutter, Dart ve Firebase ile çalışıyorum."',
    },
    {
      title: 'GameJam ',
      company: 'FPS Oyun',
      period: '2024',
      description: 'GameJam’de Unity ve C# ile tam bir PC oyunu geliştirdim. Karakter kontrolleri, harita tasarımı ve etkileşimli obje kısımlarında çalıştım.',
    },
    {
      title: 'Korku Oyunu',
      company: 'Bireysel Proje',
      period: '2025- Devam Ediyor',
      description: 'Bireysel olarak geliştirdiğim oyuncunun karanlık bir ormanda el feneriyle ormandan kurtulmasını konu alır',
    },
  ];

  const education = [
    {
      degree: 'Bilgisayar Mühendisliği',
      institution: 'Balıkesir Üniversitesi',
      period: '2023 - Present',
      description: 'Bilgisayar Mühendisliği okuyorum, mobil uygulama geliştirme ve yazılım mühendisliği üzerine yoğunlaşıyorum.',
    }
  ];

  return (
    <div className="bg-dark-100 text-light-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="bg-dark-200 rounded-lg shadow-xl overflow-hidden mb-12 border border-primary/20">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-primary/80 to-primary/20 p-8">
              <div className="h-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-dark-100 shadow-xl flex items-center justify-center">
                  <span className="text-6xl"></span>
                  {  <img src="/images/bitmoji.jpg" alt="Enver Yakut" className="rounded-full " /> }
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-light-100 mb-4">Hakkımda</h1>
              <p className="text-light-300 mb-6">
                Flutter ile mobil uygulamalar geliştiriyorum. Kullanıcı deneyimini ön planda tutarak, işlevsel ve sade arayüzlere
                sahip uygulamalar oluşturuyorum.
                Kodun sürdürülebilir, okunabilir ve geliştirilebilir olmasına önem veririm.
              </p>
              <p className="text-light-300 mb-6">
                Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenimime devam ediyorum. Eğitim sürecimde edindiğim teorik bilgileri,
                geliştirdiğim projelerle pratiğe dökmeye çalışıyorum.
                Mobil geliştirme alanında hem teknik becerilerimi hem de problem çözme yeteneğimi sürekli geliştiriyorum.
              </p>
              <p className="text-light-300 mb-6">
                Ayrıca Unity ile oyunlar geliştiriyor, game jam’lere katılıyor ve boş zamanlarımda yeni teknolojileri keşfetmeyi seviyorum.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/Enver_Yakut_cv.pdf"
                  download
                  className="flex items-center gap-2 bg-primary text-dark-100 px-6 py-3 rounded-md hover:bg-accent transition shadow-lg hover:shadow-primary/30"
                >
                  <FaDownload /> CV İndir
                </a>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-100 mb-2">Deneyim</h2>
            <p className="text-light-300">Mobil Uygulama ve Oyun Geliştirme Serüvenim</p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-dark-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition border border-primary/10 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center">
                      {exp.title.includes('Game') ? 
                        <FaGamepad className="text-primary mr-3" /> : 
                        <FaMobileAlt className="text-primary mr-3" />
                      }
                      <h3 className="text-xl font-semibold text-light-100">{exp.title}</h3>
                    </div>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-block bg-dark-300 px-3 py-1 rounded-full text-light-300 text-sm mt-2 md:mt-0 border border-primary/20">
                    {exp.period}
                  </span>
                </div>
                <p className="text-light-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-100 mb-2">Eğitim</h2>
            <p className="text-light-300">Akademik Kısım</p>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-dark-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition border border-primary/10 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center">
                      <FaGraduationCap className="text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-light-100">{edu.degree}</h3>
                    </div>
                    <p className="text-primary font-medium mt-1">{edu.institution}</p>
                  </div>
                  <span className="inline-block bg-dark-300 px-3 py-1 rounded-full text-light-300 text-sm mt-2 md:mt-0 border border-primary/20">
                    {edu.period}
                  </span>
                </div>
                <p className="text-light-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-100 mb-2">Kullanabildiğim Teknolojiler</h2>
            <p className="text-light-300"></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <div className="text-4xl text-primary mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold text-light-100 mb-4">Mobil Uygulama Geliştirme</h3>
              <ul className="space-y-2 text-light-300">
                <li>Flutter & Dart</li>
                <li>React Native</li>
                <li>Firebase Entegrasyonu</li>
                <li>State Management</li>

              </ul>
            </div>
            
            <div className="bg-dark-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <div className="text-4xl text-primary mb-4">
                <FaGamepad />
              </div>
              <h3 className="text-xl font-semibold text-light-100 mb-4">Oyun Geliştirme</h3>
              <ul className="space-y-2 text-light-300">
                <li>Unity & C#</li>
                <li>3D Modeling (Blender)</li>
                <li>Oyun İçi Fizik</li>
                <li>Level Tasarımı</li>
                <li>Mobil Oyun Optimizasyonu</li>
                <li>Oynanış Mekanikleri</li>
              </ul>
            </div>
            
            <div className="bg-dark-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <div className="text-4xl text-primary mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-light-100 mb-4">Yazılım Geliştirme</h3>
              <ul className="space-y-2 text-light-300">
                <li>JavaScript</li>
                <li>Python</li>
                <li>C# & Unity Scripting</li>
                <li>Version Kontrol (Git)</li>
                <li>Problem Çözme</li>
                <li>Algoritma Tasarımı</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-dark-200 p-10 rounded-xl shadow-lg border border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-light-100 mb-4">Beraber Çalışabiliriz</h2>
          <p className="text-light-300 max-w-2xl mx-auto mb-6">
           İlgilendiğiniz projelerde yardıma ihtiyacınız varsa iletişime geçebilirsiniz.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-dark-100 font-medium py-3 px-8 rounded-md hover:bg-accent transition inline-block shadow-md hover:shadow-lg"
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About; 