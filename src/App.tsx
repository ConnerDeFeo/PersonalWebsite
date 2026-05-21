import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Experience from './Experience';
import HomePage from './HomePage';
import Navigation from './Navigation';

function App() {
  return (
    <HashRouter>
      <div className="bg-[#080b12] text-white min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <footer className="py-8 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-white">C</span>
              <span className="text-indigo-400">D</span>
            </div>
            <p className="text-slate-600 text-sm">© 2026 Conner DeFeo · Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
