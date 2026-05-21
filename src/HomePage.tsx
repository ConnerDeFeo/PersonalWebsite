import { Github, Linkedin, Download, Mail, User, Code, Briefcase, ChevronDown } from 'lucide-react';

const HomePage = ()=> {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/[0.12] rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/[0.09] rounded-full blur-[100px] animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/[0.06] rounded-full blur-[80px] animate-pulse"
            style={{ animationDelay: '3s' }}
          />
        </div>

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-6 leading-none">
            <span className="gradient-text">Conner</span>
            <br />
            <span className="gradient-text">DeFeo</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12">
            Full-Stack Developer building modern cloud applications and intelligent systems with AI integrations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/ConnerDeFeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200 text-sm font-medium w-full sm:w-auto justify-center"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/conner-jack-defeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 text-sm font-medium shadow-lg shadow-indigo-500/25 w-full sm:w-auto justify-center"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1RFEyk_cdvw1Q3YhDzoLTVkgxhdGzstrg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200 text-sm font-medium w-full sm:w-auto justify-center"
            >
              <Download size={17} />
              Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="section-label">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Building things that matter
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Pursuing a B.S. in Software Engineering at RIT with two years of professional experience shipping production software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              {([
                {
                  icon: <User size={18} />,
                  color: 'text-indigo-400',
                  bg: 'bg-indigo-500/10 border-indigo-500/20',
                  label: 'Background',
                  text: 'Pursuing a B.S. in Software Engineering at RIT, with two years of hands-on experience in software development.',
                },
                {
                  icon: <Code size={18} />,
                  color: 'text-cyan-400',
                  bg: 'bg-cyan-500/10 border-cyan-500/20',
                  label: 'Expertise',
                  text: 'Specialized in React, TypeScript, Node.js, and AWS with a focus on scalable full-stack architecture.',
                },
                {
                  icon: <Briefcase size={18} />,
                  color: 'text-violet-400',
                  bg: 'bg-violet-500/10 border-violet-500/20',
                  label: 'Experience',
                  text: 'Worked with Accessible Learning Labs, Rochester Regional Health, and Linde Gases.',
                },
              ] as const).map(({ icon, color, bg, label, text }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-[#0d1117] transition-colors duration-200"
                >
                  <div className={`p-2.5 rounded-xl border flex-shrink-0 ${bg} ${color}`}>{icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {([
                  {
                    label: 'Frontend',
                    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
                    items: ['React', 'TypeScript', 'React Native', 'Tailwind', 'CSS'],
                  },
                  {
                    label: 'Backend',
                    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
                    items: ['Node.js', 'Python', 'C#', 'Java'],
                  },
                  {
                    label: 'Database',
                    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
                    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'RDS'],
                  },
                  {
                    label: 'Cloud & DevOps',
                    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
                    items: ['AWS', 'Docker', 'Terraform', 'GitHub Actions'],
                  },
                ] as const).map(({ label, badge, items }) => (
                  <div key={label}>
                    <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-[0.15em] mb-2">{label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span key={item} className={`px-2.5 py-1 text-xs rounded-lg border font-medium ${badge}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 relative">
        {/* Subtle top separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-px">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Let's work together</h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto">
              Always open to new opportunities and interesting projects. Let's talk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {([
              {
                href: 'mailto:jjd2843@g.rit.edu',
                icon: <Mail size={22} />,
                color: 'text-indigo-400',
                bg: 'bg-indigo-500/10 border-indigo-500/20',
                label: 'Email',
                value: 'jjd2843@g.rit.edu',
                external: false,
              },
              {
                href: 'https://github.com/ConnerDeFeo',
                icon: <Github size={22} />,
                color: 'text-slate-300',
                bg: 'bg-white/[0.06] border-white/[0.08]',
                label: 'GitHub',
                value: 'View my work',
                external: true,
              },
              {
                href: 'https://www.linkedin.com/in/conner-jack-defeo/',
                icon: <Linkedin size={22} />,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10 border-cyan-500/20',
                label: 'LinkedIn',
                value: 'Connect with me',
                external: true,
              },
            ] as const).map(({ href, icon, color, bg, label, value, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col items-center p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-[#0d1117] hover:border-white/[0.1] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`p-4 rounded-2xl border mb-4 transition-transform duration-300 group-hover:scale-110 ${bg} ${color}`}
                >
                  {icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                <p className="text-slate-500 text-xs">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;