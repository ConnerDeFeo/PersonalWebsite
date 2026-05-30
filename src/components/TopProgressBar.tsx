import { useEffect, useState } from 'react';

/**
 * Thin cyan line that draws across the very top of the page on load, then
 * thins into a persistent scroll-progress indicator.
 */
const TopProgressBar = () => {
  const [loaded, setLoaded] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      {/* Load draw-in line */}
      {!loaded && (
        <div
          className="h-full origin-left bg-gradient-to-r from-transparent via-[#ff5500] to-[#ff7a1f]"
          style={{
            animation: 'draw-line 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards',
            boxShadow: '0 0 12px rgba(255,85,0,0.8)',
          }}
        />
      )}
      {/* Persistent scroll progress */}
      {loaded && (
        <div
          className="h-full origin-left bg-gradient-to-r from-[#ff5500] to-[#ff7a1f] transition-transform duration-150 ease-out"
          style={{
            transform: `scaleX(${scroll})`,
            boxShadow: '0 0 10px rgba(255,85,0,0.7)',
          }}
        />
      )}
    </div>
  );
};

export default TopProgressBar;
