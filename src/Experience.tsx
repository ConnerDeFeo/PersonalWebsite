import { Briefcase } from 'lucide-react';

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
    <div className="pt-24 pb-28 bg-[#080b12] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Experience</h2>
          <p className="text-slate-400 text-lg">My professional journey and work history.</p>
        </div>

        <div className="relative">
          {/* Vertical timeline rail */}
          <div className="absolute left-6 top-6 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline node */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border flex items-center justify-center">
                    {exp.image ? (
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-12 h-12 object-contain rounded-sm"
                      />
                    ) : (
                      <Briefcase size={18} className="text-indigo-400" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-6">
                  <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-[#0d1117] hover:border-white/[0.1] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold text-lg leading-tight">{exp.name}</h3>
                      <span className="text-slate-500 text-xs bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full whitespace-nowrap">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                    <p className="text-indigo-400 text-sm font-medium mb-4">{exp.position}</p>

                    {exp.bullets.length > 0 && (
                      <ul className="space-y-2.5">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 mt-[7px] flex-shrink-0" />
                            <span className="text-slate-400 text-sm leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
