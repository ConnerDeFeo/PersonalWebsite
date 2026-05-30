import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home', code: '01' },
    { to: '/projects', label: 'Projects', code: '02' },
    { to: '/experience', label: 'Experience', code: '03' },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-[#ff5500]/[0.12]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-2" data-cursor="hover">
            <span className="font-mono text-xl font-bold tracking-tight">
              <span className="text-[#14171c]">C</span>
              <span className="text-orange glow-text-soft group-hover:glow-text transition-all">D</span>
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">
              / dev.sprint.build
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {links.map(({ to, label, code }) => {
              const active = isActive(to);
              return (
                <Link
                  key={to}
                  to={to}
                  data-cursor="hover"
                  className={`group relative flex items-center gap-1.5 px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-orange' : 'text-slate-500 hover:text-[#14171c]'
                  }`}
                >
                  <span className={`text-[9px] ${active ? 'text-[#ff5500]/70' : 'text-slate-300'}`}>{code}</span>
                  <span className={active ? 'glow-text-soft' : ''}>{label}</span>
                  {/* underline draws in on hover/active */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px bg-[#ff5500] origin-left transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    style={{ boxShadow: '0 0 8px rgba(255,85,0,0.7)' }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
