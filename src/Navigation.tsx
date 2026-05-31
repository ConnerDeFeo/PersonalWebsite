import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { to: '/', label: 'Home', code: '01' },
    { to: '/projects', label: 'Projects', code: '02' },
    { to: '/experience', label: 'Experience', code: '03' },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/85 backdrop-blur-xl border-b border-[#ff5500]/[0.12]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-2 shrink-0" data-cursor="hover">
            <span className="font-mono text-xl font-bold tracking-tight">
              <span className="text-[#14171c]">C</span>
              <span className="text-orange glow-text-soft group-hover:glow-text transition-all">D</span>
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">
              / dev.sprint.build
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map(({ to, label, code }) => {
              const active = isActive(to);
              return (
                <Link
                  key={to}
                  to={to}
                  data-cursor="hover"
                  className={`group relative flex items-center gap-1.5 px-4 py-2 font-mono text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
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

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            data-cursor="hover"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex items-center justify-center p-2 -mr-2 rounded-lg text-slate-600 hover:text-orange transition-colors duration-200"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? 'max-h-72 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-2">
            {links.map(({ to, label, code }) => {
              const active = isActive(to);
              return (
                <Link
                  key={to}
                  to={to}
                  data-cursor="hover"
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center gap-3 px-3 py-3 rounded-lg font-mono text-base font-medium transition-colors duration-200 ${
                    active
                      ? 'text-orange bg-[#ff5500]/[0.07] border border-[#ff5500]/25'
                      : 'text-slate-600 border border-transparent hover:text-[#14171c] hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-xs ${active ? 'text-[#ff5500]/70' : 'text-slate-300'}`}>{code}</span>
                  <span className={active ? 'glow-text-soft' : ''}>{label}</span>
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ff5500] pulse-ring" />
                  )}
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