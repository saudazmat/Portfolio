import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-400">
              GitHub
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Explore my work
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
              Visit my GitHub profile to explore my repositories and code.
            </p>
          </div>
          <a
            href="https://github.com/saudazmat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            <span>View my GitHub</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
