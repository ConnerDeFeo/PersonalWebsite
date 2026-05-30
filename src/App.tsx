import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Experience from './Experience';
import HomePage from './HomePage';
import Navigation from './Navigation';
import CustomCursor from './components/CustomCursor';
import TopProgressBar from './components/TopProgressBar';

function App() {
  return (
    <HashRouter>
      <div className="relative bg-white text-[#14171c] min-h-screen overflow-x-clip">
        {/* Global telemetry background layers */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-grid-animated opacity-70" />
          <div className="absolute inset-0 bg-scanlines opacity-60" />
          <div className="absolute inset-0 bg-vignette" />
          {/* Drifting orange ambience */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#ff5500]/[0.06] blur-[150px]" />
        </div>

        <TopProgressBar />
        <CustomCursor />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        <footer className="relative py-10 border-t border-[#ff5500]/[0.15]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="font-mono text-lg font-bold tracking-tight">
              <span className="text-[#14171c]">C</span>
              <span className="text-orange glow-text-soft">D</span>
            </div>
            <p className="font-mono text-slate-500 text-xs tracking-wide">
              <span className="text-orange">//</span> © 2026 CONNER DEFEO · BUILT WITH REACT + TAILWIND
            </p>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] pulse-ring" />
              System Online
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
