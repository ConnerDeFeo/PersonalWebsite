import { ExternalLink } from 'lucide-react';

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
    <div className="pt-24 pb-28 bg-[#080b12] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A collection of projects I've built and contributed to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-[#0d1117] hover:border-white/[0.1] overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="relative h-44 bg-[#0d1117] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] to-violet-500/[0.04]" />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="relative max-h-full max-w-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <span className="text-slate-700 text-sm">No image</span>
                )}
                {project.link && (
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] font-semibold tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold text-xl leading-tight">{project.name}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-slate-400 text-xs rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
