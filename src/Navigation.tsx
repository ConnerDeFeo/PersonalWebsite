import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavDot = ({ active }: { active: boolean })=> {
  if (!active) return null;
  return (
    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
  );
}

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!isHome) return;
      let current = 'home';
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navClass = (active: boolean) =>
    `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      active ? 'text-white' : 'text-slate-500 hover:text-slate-200'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b12]/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white">C</span>
            <span className="text-indigo-400">D</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigate('/')}
              className={navClass(isHome && activeSection === 'home')}
            >
              Home
              <NavDot active={isHome && activeSection === 'home'} />
            </button>
            <Link to="/projects" className={navClass(location.pathname === '/projects')}>
              Projects
              <NavDot active={location.pathname === '/projects'} />
            </Link>
            <Link to="/experience" className={navClass(location.pathname === '/experience')}>
              Experience
              <NavDot active={location.pathname === '/experience'} />
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;