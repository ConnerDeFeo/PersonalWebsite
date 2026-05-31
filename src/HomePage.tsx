import { Github, Linkedin, Download, Mail, User, Code, Briefcase, ChevronDown, Terminal, Zap } from 'lucide-react';
import GlitchTypewriter from './components/GlitchTypewriter';
import Reveal from './components/Reveal';

const ROLES = ['SWE Student', 'Competitive Sprinter', 'Builder'];

const SKILLS = [
  { label: 'Frontend', items: ['React', 'TypeScript', 'React Native', 'Tailwind', 'CSS'] },
  { label: 'Backend', items: ['Node.js', 'Python', 'C#', 'Java'] },
  { label: 'Database', items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'RDS'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Terraform', 'GitHub Actions'] },
] as const;

const TELEMETRY = [
  { label: 'Focus', value: 'Full-Stack' },
  { label: 'Base', value: 'RIT' },
  { label: 'Exp', value: '2+ YRS' },
  { label: 'Status', value: 'Shipping' },
];

const SkillTag = ({ children }: { children: string }) => (
  <span
    data-cursor="hover"
    className="group relative overflow-hidden px-2.5 py-1 font-mono text-xs rounded-md border border-[#ff5500]/25 bg-[#ff5500]/[0.05] text-slate-700 transition-all duration-200 hover:text-[#14171c] hover:border-[#ff5500]/70 hover:shadow-[0_0_16px_rgba(255,85,0,0.3)]"
  >
    {/* shimmer sweep on hover */}
    <span
      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
      style={{
        background:
          'linear-gradient(110deg, transparent 25%, rgba(255,85,0,0.3) 50%, transparent 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.1s linear infinite',
      }}
    />
    <span className="relative">{children}</span>
  </span>
);

const HomePage = () => {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl mx-auto px-5 sm:px-6 text-center py-20 sm:py-28">
          {/* HUD frame corners */}
          <span className="hidden md:block absolute -top-6 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#ff5500]/50" />
          <span className="hidden md:block absolute -top-6 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#ff5500]/50" />
          <span className="hidden md:block absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#ff5500]/50" />
          <span className="hidden md:block absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#ff5500]/50" />

          {/* Status line */}
          <div className="flex items-center justify-center gap-2 mb-8 font-mono text-[11px] tracking-[0.3em] uppercase text-slate-500">
            <Terminal size={13} className="text-orange" />
            <span>
              <span className="text-orange">//</span> system online
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] pulse-ring" />
          </div>

          {/* Glitch-typed name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.95] animate-flicker break-words">
            <GlitchTypewriter text="Conner DeFeo" startDelay={500} className="gradient-text" />
          </h1>

          {/* Role line */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-8 font-mono text-sm sm:text-base">
            {ROLES.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="text-[#ff5500]/70">/</span>}
                <span className="text-slate-700">{role}</span>
              </span>
            ))}
          </div>

          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Full-stack developer building cloud applications and intelligent systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <a
              href="https://www.linkedin.com/in/conner-jack-defeo"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#ff5500] text-white font-semibold text-sm w-full sm:w-auto justify-center transition-all duration-200 hover:bg-[#ff6a1a] hover:shadow-[0_8px_30px_rgba(255,85,0,0.45)]"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ConnerDeFeo"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white border border-[#ff5500]/30 text-slate-700 font-medium text-sm w-full sm:w-auto justify-center transition-all duration-200 hover:border-[#ff5500] hover:text-[#14171c] hover:shadow-[0_6px_20px_rgba(255,85,0,0.22)]"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1RFEyk_cdvw1Q3YhDzoLTVkgxhdGzstrg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-sm w-full sm:w-auto justify-center transition-all duration-200 hover:border-slate-400 hover:text-[#14171c]"
            >
              <Download size={17} />
              Resume
            </a>
          </div>

          {/* Telemetry readout strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px max-w-2xl mx-auto rounded-lg overflow-hidden border border-[#ff5500]/15 bg-[#ff5500]/[0.06]">
            {TELEMETRY.map(({ label, value }) => (
              <div key={label} className="px-4 py-3 bg-white">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate-400 mb-1">
                  {label}
                </div>
                <div className="font-mono text-sm font-semibold text-orange">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={14} className="animate-bounce text-orange" />
        </div>
      </section>

      {/* ============================= ABOUT ============================= */}
      <section id="about" className="py-20 sm:py-28 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <Reveal className="mb-16">
            <p className="section-label">// About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14171c] mb-4 tracking-tight">
              Built for <span className="text-orange glow-text-soft">performance</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              Pursuing a B.S. in Software Engineering at RIT with two years of professional experience
              shipping production software. Shaving milliseconds off on and off the track.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {([
                {
                  icon: <User size={18} />,
                  label: 'Background',
                  text: 'B.S. in Software Engineering at RIT, with two years of hands-on experience building real systems.',
                },
                {
                  icon: <Code size={18} />,
                  label: 'Expertise',
                  text: 'React, TypeScript, Node.js, and AWS — with a focus on scalable, fast full-stack architecture.',
                },
                {
                  icon: <Zap size={18} />,
                  label: 'Drive',
                  text: 'Competitive sprinter and relentless builder. High output, low excuses.',
                },
                {
                  icon: <Briefcase size={18} />,
                  label: 'Experience',
                  text: 'Shipped for Accessible Learning Labs, Rochester Regional Health, and Linde.',
                },
              ] as const).map(({ icon, label, text }, i) => (
                <Reveal key={label} delay={i * 80}>
                  <div className="group relative flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:border-[#ff5500]/40 hover:shadow-[0_8px_30px_rgba(255,85,0,0.1)]">
                    {/* slide-in left accent */}
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ff5500] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
                    <div className="p-2.5 rounded-lg border border-[#ff5500]/25 bg-[#ff5500]/[0.07] text-orange flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(255,85,0,0.3)]">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-mono text-[#14171c] font-semibold text-sm mb-1 tracking-wide">{label}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="relative p-5 sm:p-6 rounded-xl border border-[#ff5500]/[0.18] bg-white h-full shadow-[0_4px_24px_rgba(255,85,0,0.06)]">
                <div className="flex items-center gap-2 mb-6">
                  <Terminal size={15} className="text-orange" />
                  <h3 className="font-mono text-[#14171c] font-semibold text-sm tracking-wide">tech_stack</h3>
                </div>
                <div className="space-y-5">
                  {SKILLS.map(({ label, items }) => (
                    <div key={label}>
                      <p className="font-mono text-slate-400 text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                        <span className="text-[#ff5500]/70">›</span> {label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <SkillTag key={item}>{item}</SkillTag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================= CONTACT ============================= */}
      <section id="contact" className="py-20 sm:py-28 relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center mb-16">
            <p className="section-label">// Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#14171c] mb-4 tracking-tight">
              Let's build something <span className="text-orange glow-text-soft">fast</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">
              Always open to new opportunities and interesting problems. Let's talk.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {([
              {
                href: 'mailto:jjd2843@g.rit.edu',
                icon: <Mail size={22} />,
                label: 'Email',
                value: 'jjd2843@g.rit.edu',
                external: false,
              },
              {
                href: 'https://github.com/ConnerDeFeo',
                icon: <Github size={22} />,
                label: 'GitHub',
                value: 'View my work',
                external: true,
              },
              {
                href: 'https://www.linkedin.com/in/conner-jack-defeo/',
                icon: <Linkedin size={22} />,
                label: 'LinkedIn',
                value: 'Connect with me',
                external: true,
              },
            ] as const).map(({ href, icon, label, value, external }, i) => (
              <Reveal key={label} delay={i * 90}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  data-cursor="hover"
                  className="group relative flex flex-col items-center p-6 sm:p-8 rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5500]/50 hover:shadow-[0_12px_30px_rgba(255,85,0,0.16)]"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ff5500] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
                  <div className="p-4 rounded-xl border border-[#ff5500]/25 bg-[#ff5500]/[0.07] text-orange mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,85,0,0.4)]">
                    {icon}
                  </div>
                  <h3 className="font-mono text-[#14171c] font-semibold text-sm mb-1 tracking-wide">{label}</h3>
                  <p className="text-slate-500 text-xs">{value}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
