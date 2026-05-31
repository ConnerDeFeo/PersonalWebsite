import { ExternalLink } from 'lucide-react';
import Reveal from './components/Reveal';

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "PeakFlow",
    description: "AI phone receptionist for roofing contractors that catches missed calls and books appointments. Dual-LLM architecture handles live conversation while a background model extracts structured job data into DynamoDB.",
    image: "/PeakFlowLogo.png",
    technologies: ["React (TS)", "FastAPI", "Terraform", "xAI Grok", "Twilio", "AWS", "EC2", "SES", "Lambda", "DynamoDB"],
    link: "https://peakflowaiautomations.com",
  },
  {
    name: "FinDiff",
    description: "AI-powered SEC 10-K analysis tool. Parses and chunks filings to prevent context loss, caches per-section summaries in S3, and serves pre-processed data on repeat queries — improving accuracy, latency, and cost.",
    image: "/FinDiffLogo.jpg",
    technologies: ["React (TS)", "Python", "Terraform", "AWS", "DynamoDB", "Lambda", "S3", "Bedrock", "IAM", "Cognito"],
    link: "https://findiff.com",
  },
  {
    name: "TrackMe",
    description: "Mobile app replacing paper and email logs for a track coach. Structured in-app submissions feed a centralized dashboard, increasing recorded practice data by ~600% and grew to 20 DAUs.",
    image: "/TrackMeLogo.png",
    technologies: ["React Native", "Expo", "Python", "Terraform", "PostgreSQL", "Docker", "AWS", "RDS", "Lambda"],
  },
  {
    name: "Kaizen Habits",
    description: "Habit tracking web app with streak tracking, progress history, friend accountability, and AI-generated recommendations based on user behavior.",
    image: "/KaizenHabits.png",
    technologies: ["React (TS)", "C# ASP.NET", "Docker", "MongoDB", "AWS", "EC2"],
  },
];

export default function Projects() {
  return (
    <div className="pt-24 pb-20 sm:pt-28 sm:pb-28 min-h-screen">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <Reveal className="mb-16">
          <p className="section-label">// Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#14171c] mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            <span className="font-mono text-[#ff5500]/70 text-sm">{`> `}</span>
            A collection of systems I've designed, built, and shipped.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={(index % 2) * 90}>
              <div
                data-cursor="hover"
                className="group relative flex flex-col h-full rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5500]/50 hover:shadow-[0_16px_40px_rgba(255,85,0,0.16)]"
              >
                {/* Orange border slides in from the left */}
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#ff7a1f] to-[#c23e00] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 z-20" style={{ boxShadow: '0 0 12px rgba(255,85,0,0.55)' }} />

                {/* Image area */}
                <div className="relative h-44 bg-[#fafafa] flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/[0.05] to-transparent" />
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="relative max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(255,85,0,0.35)]"
                    />
                  ) : (
                    <span className="font-mono text-slate-400 text-sm">no_image</span>
                  )}
                  {project.link && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/40 text-orange font-mono text-[10px] font-semibold tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] pulse-ring" />
                        LIVE
                      </span>
                    </div>
                  )}
                  {/* index marker */}
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.2em] text-slate-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-[#14171c] font-bold text-xl leading-tight tracking-tight group-hover:text-orange transition-colors duration-300">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="flex-shrink-0 p-2 rounded-lg border border-[#ff5500]/25 text-slate-400 hover:text-orange hover:border-[#ff5500]/60 hover:shadow-[0_0_14px_rgba(255,85,0,0.3)] transition-all duration-200"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 font-mono text-[11px] rounded border border-slate-200 bg-slate-50 text-slate-500 transition-colors duration-200 group-hover:border-[#ff5500]/20 group-hover:text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
