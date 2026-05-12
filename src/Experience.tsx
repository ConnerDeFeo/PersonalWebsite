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
    <div className="pt-24 pb-20 bg-slate-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Experience</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            My professional journey and work history.
          </p>
        </div>

        {EXPERIENCES.length === 0 ? (
          <div className="text-center text-slate-400 py-20">
            <p className="text-xl">No experience entries yet — add entries to EXPERIENCES in Experience.tsx.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-700 transition-colors duration-300">
                <div className="flex items-start space-x-6">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-16 h-16 rounded-lg object-contain flex-shrink-0 bg-white p-2"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-blue-400" size={28} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">{exp.name}</h3>
                      <span className="text-slate-400 text-sm whitespace-nowrap">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-4">{exp.position}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
