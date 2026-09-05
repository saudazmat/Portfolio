import { motion } from 'motion/react';
import { Database, Radio, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Skills = () => {
  const getCategoryMeta = (name: string) => {
    switch (name) {
      case 'Data Science & Analytics':
        return {
          icon: <Database className="text-cyan-400" size={28} />,
          badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
          chipStyle: 'bg-slate-800/90 text-cyan-100 border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white',
          highlight: 'Priority Focus for Data Analyst / Data Scientist Roles'
        };
      case 'Telecom & RF Engineering':
        return {
          icon: <Radio className="text-blue-400" size={28} />,
          badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
          accentGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
          chipStyle: 'bg-slate-800/90 text-slate-200 border-white/10 hover:border-blue-400 hover:bg-blue-950/40 hover:text-white',
          highlight: 'Enterprise RAN & Cellular KPI Optimization'
        };
      case 'IT Systems & Security':
        return {
          icon: <Shield className="text-emerald-400" size={28} />,
          badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
          chipStyle: 'bg-slate-800/90 text-slate-200 border-white/10 hover:border-emerald-400 hover:bg-emerald-950/40 hover:text-white',
          highlight: 'Cloud Infrastructure & Enterprise Security'
        };
      default:
        return {
          icon: <Sparkles className="text-slate-400" size={28} />,
          badgeColor: 'bg-slate-800 text-slate-300 border-white/10',
          accentGradient: 'from-slate-800/40 to-transparent',
          chipStyle: 'bg-slate-800 text-slate-300 border-white/5 hover:border-blue-500/50 hover:text-white',
          highlight: ''
        };
    }
  };

  return (
    <section id="arsenal" className="py-24 px-6 bg-slate-900/40 backdrop-blur-md relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Data-First Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical Arsenal
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Structured for dual excellence across <span className="text-cyan-300 font-medium">Data Analytics & Data Science</span>, <span className="text-blue-300 font-medium">Telecommunications & RF Engineering</span>, and <span className="text-emerald-300 font-medium">Cloud IT Systems</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, idx) => {
            const meta = getCategoryMeta(skillGroup.name);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={`flex flex-col justify-between p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-white/20 transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group ${
                  idx === 0 ? 'ring-1 ring-cyan-500/30' : ''
                }`}
              >
                {/* Subtle top gradient glow */}
                <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${meta.accentGradient} pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                      {meta.icon}
                    </div>
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${meta.badgeColor}`}>
                      {skillGroup.level}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {skillGroup.name}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-400 mb-6 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    {meta.highlight}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skillGroup.keywords.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm border transition-all cursor-default shadow-sm ${meta.chipStyle}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Language Proficiency & Relocation Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl shadow-inner shrink-0">
              🇩🇪
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                German Language Proficiency & Target Location
              </h4>
              <p className="text-slate-400 text-sm">
                Relocating to Germany with elementary German (A1/A2) proficiency, fully eligible for employment in English and German speaking environments.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-slate-800/80 border border-white/10 text-center">
              <div className="text-xs text-slate-500 uppercase font-mono">German</div>
              <div className="text-sm font-bold text-cyan-400">A1 / A2 Elementary</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-800/80 border border-white/10 text-center">
              <div className="text-xs text-slate-500 uppercase font-mono">English</div>
              <div className="text-sm font-bold text-emerald-400">Professional Working</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
