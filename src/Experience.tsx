import { Briefcase } from 'lucide-react';
import Reveal from './components/Reveal';

interface ExperienceItem {
  name: string;
  startDate: string;
  endDate: string;
  position: string;
  image: string;
  bullets: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    name: "Linde",
    startDate: "May 2026",
    endDate: "Present",
    position: "Computer Systems Intern",
    image: "/Linde.jpg",
    bullets: [],
  },
  {
    name: "Accessible Learning Labs",
    startDate: "Jan 2026",
    endDate: "May 2026",
    position: "Software Engineer Team Lead",
    image: "/ALL.svg",
    bullets: [
      "Lead a team of 3 software engineers using Agile methodologies to design and implement educational labs on AI bias and hallucinations",
      "Architected and developed full-stack features using React, Node.js, and PostgreSQL for deployment across 9 academic institutions",
      "Coordinated sprint planning, task breakdown, and code reviews to ensure work was done fast while maintaining high quality",
    ],
  },
  {
    name: "Rochester Regional Health",
    startDate: "Aug 2025",
    endDate: "Jan 2026",
    position: "Software Engineer Co-op",
    image: "RRH.svg",
    bullets: [
      "Implemented CI/CD automation (GitHub Actions, RenovateBot, NUnit), cutting maintenance effort by 15–20%",
      "Refactored and optimized 30+ .NET services, reducing backend execution time by 60%+ on critical paths",
      "Consistently delivered sprint work 20–40% ahead of estimates",
    ],
  },
  {
    name: "Accessible Learning Labs",
    startDate: "Jan 2025",
    endDate: "May 2025",
    position: "Software Engineer",
    image: "ALL.svg",
    bullets: [
      "Built a research web platform (React, Node.js, PostgreSQL) used by 600+ participants and adopted for recurring studies",
      "Presented at CCNSE on the impact of accessible software in education and research",
    ],
  },
];

export default function Experience() {
  return (
    <div className="pt-28 pb-28 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="mb-16">
          <p className="section-label">// Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#14171c] mb-4 tracking-tight">Experience</h2>
          <p className="text-slate-500 text-lg">
            <span className="font-mono text-[#ff5500]/70 text-sm">{`> `}</span>
            Professional track record, most recent first.
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical timeline rail */}
          <div
            className="absolute left-8 top-4 bottom-0 w-px bg-gradient-to-b from-[#ff5500] via-[#ff5500]/30 to-transparent"
            style={{ boxShadow: '0 0 8px rgba(255,85,0,0.35)' }}
          />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <Reveal key={index} delay={index * 70}>
                <div className="relative flex gap-6 sm:gap-8">
                  {/* Timeline node */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 rounded-xl bg-white border border-[#ff5500]/30 flex items-center justify-center shadow-[0_4px_18px_rgba(255,85,0,0.18)]">
                      {exp.image ? (
                        <img
                          src={exp.image}
                          alt={exp.name}
                          className="w-12 h-12 object-contain rounded-sm"
                        />
                      ) : (
                        <Briefcase size={18} className="text-orange" />
                      )}
                    </div>
                    {/* node pulse */}
                    {index === 0 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ff5500] pulse-ring" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-2">
                    <div className="group relative p-6 rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:border-[#ff5500]/40 hover:shadow-[0_10px_28px_rgba(255,85,0,0.12)]">
                      <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ff5500] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                        <h3 className="text-[#14171c] font-bold text-lg leading-tight tracking-tight">{exp.name}</h3>
                        <span className="font-mono text-orange text-[11px] bg-[#ff5500]/[0.07] border border-[#ff5500]/25 px-2.5 py-1 rounded-md whitespace-nowrap tracking-wide">
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                      <p className="font-mono text-orange text-sm font-medium mb-4">{exp.position}</p>

                      {exp.bullets.length > 0 && (
                        <ul className="space-y-2.5">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="font-mono text-[#ff5500]/70 text-xs mt-0.5 flex-shrink-0">▸</span>
                              <span className="text-slate-500 text-sm leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
