import { motion } from 'motion/react';
import { Download, ChevronDown, Linkedin, Award, Github, ArrowUpRight, MapPin } from 'lucide-react';
import { resumeData } from '../resumeData';
import { ContactActions } from './ContactActions';
import headshot from '../assets/images/headshot.png';
import techBackground from '../assets/images/tech-background.png';
import ibmSupportBadge from '../assets/images/ibm-it-support-professional-certificate.png';
import googleProjectBadge from '../assets/images/google-project-management-certificate-v1.png';
import ibmCybersecurityBadge from '../assets/images/ibm-cybersecurity-analyst-professional-certificate.png';

const profileOrder = ['linkedin', 'github', 'credly'];
const profileBadges = [
  { name: 'IBM IT Support Professional Certificate', image: ibmSupportBadge },
  { name: 'Google Project Management Certificate', image: googleProjectBadge },
  { name: 'IBM Cybersecurity Analyst Professional Certificate', image: ibmCybersecurityBadge },
];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getProfileIcon = (network: string) => {
    switch (network.toLowerCase()) {
      case 'linkedin':
        return (
          <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Linkedin size={22} />
          </div>
        );
      case 'credly':
        return (
          <div className="p-2.5 rounded-xl bg-amber-600/20 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-all">
            <Award size={22} />
          </div>
        );
      case 'github':
        return (
          <div className="p-2.5 rounded-xl bg-slate-700/50 text-white group-hover:bg-white group-hover:text-slate-950 transition-all">
            <Github size={22} />
          </div>
        );
      default:
        return (
          <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
            <ArrowUpRight size={22} />
          </div>
        );
    }
  };

  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-[0.12] mix-blend-screen"
        style={{ backgroundImage: `url(${techBackground})`, backgroundPosition: 'center 45%' }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-950/55 via-slate-950/80 to-slate-950/65" />
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-slate-950" />

      {/* Ambient background glow */}
      <div className="absolute z-[1] top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute z-[1] top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(280px,0.75fr)_minmax(0,1.5fr)] lg:gap-10 xl:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.5fr)] xl:gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="group relative flex aspect-square w-[min(68vw,240px)] items-center justify-center sm:w-[min(42vw,300px)] lg:w-[320px] xl:w-[360px]">
            <div className="absolute inset-[8%] rounded-full border border-cyan-400/20 bg-gradient-to-b from-cyan-400/[0.08] to-blue-500/[0.03] shadow-[0_0_55px_rgba(6,182,212,0.12),inset_0_0_35px_rgba(6,182,212,0.06)]" />
            <div className="absolute inset-[12%] rounded-full bg-cyan-500/20 blur-3xl transition-opacity duration-700 group-hover:opacity-90" />
            <img
              src={headshot}
              alt="Engr. Muhammad Saud"
              className="relative z-10 h-full w-full object-contain object-center drop-shadow-[0_12px_32px_rgba(34,211,238,0.12)] transition-transform duration-500 group-hover:scale-[1.01]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>

        {/* Right Area: Profile Details, Germany Relocation Headline & Glassmorphic Action Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start text-left"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Open to Relocation
          </div>

          {/* Prominent Name */}
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            {resumeData.basics.name}
          </h1>

          {/* Prominent Germany Relocation & Target Roles Banner */}
          <div className="w-full mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900/90 to-blue-500/10 border border-amber-500/30 backdrop-blur-xl shadow-[0_4px_25px_rgba(245,158,11,0.08)]">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                  {resumeData.basics.relocationHeadline}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Available for full-time sponsorship / on-site positions in Germany. Fluent in English & Elementary German (A1/A2).
                </p>
              </div>
            </div>
          </div>

          {/* Role Summary / Headline */}
          <p className="mb-6 max-w-3xl text-base font-light leading-relaxed text-slate-300 sm:text-lg lg:mb-5">
            RF Engineer at <span className="text-white font-semibold">Huawei Pakistan</span> specializing in 2G/4G/5G network KPI performance optimization, combined with cutting-edge expertise in <span className="text-cyan-300 font-semibold">Data Science</span>, <span className="text-cyan-300 font-semibold">Python</span>, <span className="text-cyan-300 font-semibold">SQL</span>, and <span className="text-cyan-300 font-semibold">Power BI</span> analytics.
          </p>

          {/* Professional profile cards */}
          <div className="mb-6 flex w-full flex-col gap-3 lg:mb-5 xl:flex-row xl:items-stretch">
            <div className="grid min-w-0 flex-1 grid-cols-3 gap-3.5">
              {[...resumeData.basics.profiles]
                .sort((a, b) => profileOrder.indexOf(a.network.toLowerCase()) - profileOrder.indexOf(b.network.toLowerCase()))
                .map((profile, idx) => (
                <motion.a
                  key={idx}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex min-w-0 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3.5 shadow-sm backdrop-blur-xl transition-all hover:border-cyan-400/50 hover:bg-slate-800/80 hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] sm:p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    {getProfileIcon(profile.network)}
                    <ArrowUpRight size={14} className="text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <div className="truncate text-sm font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-base">
                      {profile.network}
                    </div>
                    <div className="truncate text-[11px] font-mono text-slate-400">
                      {profile.tagline || 'Professional'}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            <div
              aria-label="Featured certification badges"
              className="flex flex-wrap items-center justify-center gap-2 xl:justify-end"
            >
              {profileBadges.map(badge => (
                <div
                  key={badge.name}
                  title={badge.name}
                  className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 p-1.5 shadow-sm backdrop-blur-xl sm:h-[88px] sm:w-[88px]"
                >
                  <img
                    src={badge.image}
                    alt={badge.name}
                    loading="lazy"
                    className="h-full w-full rounded-xl bg-white object-contain p-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs & Contact Pills */}
          <div className="w-full flex flex-wrap items-center gap-4 pt-2 border-t border-white/5">
            <button
              onClick={() => scrollToSection('arsenal')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Explore Technical Arsenal</span>
              <ChevronDown size={16} />
            </button>

            <a
              href="https://github.com/saudazmat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-500/40 hover:bg-slate-800 hover:text-white backdrop-blur-md"
            >
              <Github size={16} className="text-cyan-400" />
              <span>View my GitHub</span>
            </a>

            <a
              href="/Muhammad-Saud-CV.pdf"
              download
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 text-sm font-semibold transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Download size={16} className="text-cyan-400" />
              <span>Download CV</span>
            </a>

            <div className="ml-auto">
              <ContactActions />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
