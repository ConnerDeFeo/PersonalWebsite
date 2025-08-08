import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail, User, Code, Briefcase, ChevronDown } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-800 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400">Portfolio</div>
            
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === 'home'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conner DeFeo
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer passionate about modern cloud technologies and scalable web applications with AI integrations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="https://github.com/ConnerDeFeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-slate-900 hover:bg-slate-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/conner-jack-defeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a
              href='https://drive.google.com/file/d/1kNQ1leiMq9Io0Uc6jvgZSdGbA_c2Jso8/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              I'm a passionate developer with expertise in modern web technologies and a love for creating innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors duration-300">
                <User className="text-blue-400" size={32} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Background</h3>
                  <p className="text-slate-300"> Pursuing a B.S. in Software Engineering at RIT, with two years of hands-on experience in software development.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors duration-300">
                <Code className="text-emerald-400" size={32} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                  <p className="text-slate-300">Specialized in React, TypeScript, Node.js, and AWS technologies.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-slate-900 rounded-xl hover:bg-slate-700 transition-colors duration-300">
                <Briefcase className="text-purple-400" size={32} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-slate-300">Worked with Accessible Learning Labs to promote accessible software integrations.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Frontend Development (React, TypeScript)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">Backend Development (Node.js, Python, C#, Java)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">Database Design (PostgreSQL, MongoDB, DynamoDB)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Cloud & DevOps (AWS, Docker, Terraform, Github Actions)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:john@example.com"
              className="flex flex-col items-center p-8 bg-slate-900 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="text-blue-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-300">jjd2843@g.rit.edu</p>
            </a>
            
            <a
              href="https://github.com/ConnerDeFeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-slate-900 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="text-emerald-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-slate-300">View my projects</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/conner-jack-defeo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-slate-900 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-300">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Conner DeFeo. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;