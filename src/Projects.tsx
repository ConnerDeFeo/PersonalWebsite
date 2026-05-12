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
    technologies: ["React (TS)", "Python", "Terraform", "AWS", "DynamoDB", "Lambda", "S3", "Bedrock", "Iam", "Cognito"],
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
    technologies: ["React (TS)", "C# ASP.NET", "Docker", "MongoDB", "AWS", "EC2"]
  },
];

export default function Projects() {
  return (
    <div className="pt-24 pb-20 bg-slate-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Projects</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A collection of projects I've built and contributed to.
          </p>
        </div>

        {PROJECTS.length === 0 ? (
          <div className="text-center text-slate-400 py-20">
            <p className="text-xl">No projects yet — add entries to PROJECTS in Projects.tsx.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl overflow-hidden hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                {project.image ? (
                  <div className="w-full h-48 bg-slate-800 flex items-center justify-center p-4">
                    <img src={project.image} alt={project.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-slate-700 flex items-center justify-center">
                    <span className="text-slate-500 text-sm">No image provided</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-700 text-blue-300 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <div className="mt-auto pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        <span>{project.link.replace(/^https?:\/\//, '')}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
