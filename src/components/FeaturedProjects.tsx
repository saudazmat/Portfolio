import { motion } from 'motion/react';
import { Github, ExternalLink, Terminal, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../resumeData';

export const FeaturedProjects = () => {
  const getTechBadgeColor = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('python')) return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
    if (lower.includes('sql')) return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
    if (lower.includes('power bi')) return 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20';
    if (lower.includes('azure')) return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
    if (lower.includes('pandas') || lower.includes('scikit')) return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
    if (lower.includes('cybersecurity')) return 'bg-rose-500/10 text-rose-300 border-rose-500/20';
    return 'bg-slate-800/80 text-slate-300 border-white/10';
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Github size={13} />
              Open Source & Code
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Featured GitHub Projects
            </h2>
          </div>
          <a
            href={resumeData.basics.profiles.find(p => p.network.toLowerCase() === 'github')?.url || 'https://github.com/saudazmat'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 group transition-colors"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {resumeData.featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)] group relative overflow-hidden"
          >
            {/* Top glass gradient edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header: status tag + GitHub icon */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-wide truncate">
                  <Terminal size={14} className="text-cyan-400 shrink-0" />
                  <span className="truncate">{project.status}</span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-cyan-500/20 transition-all shrink-0"
                  title="View on GitHub"
                >
                  <Github size={16} />
                </a>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                {project.description}
              </p>
            </div>

            {/* Bottom: Tech tags & code link */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs px-2.5 py-1 rounded-md border font-mono ${getTechBadgeColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 group/link"
                >
                  <span>View code</span>
                  <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
