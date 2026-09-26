import { motion } from 'motion/react';
import { Download, ChevronDown, Linkedin, Mail, Phone, Award, GraduationCap, Github, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { resumeData } from '../resumeData';

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
      case 'coursera':
        return (
          <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
            <GraduationCap size={22} />
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
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Area: Professionally Framed Avatar Image with Glowing Arched Glassmorphism Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          {/* Grand arched portal frame */}
          <div className="relative w-full max-w-md group">
            {/* Outer neon halo glow */}
            <div className="absolute -inset-1.5 rounded-t-[140px] md:rounded-t-[180px] rounded-b-[40px] bg-gradient-to-b from-cyan-400/40 via-blue-500/30 to-indigo-600/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            {/* Arched glassmorphism frame container */}
            <div className="relative rounded-t-[136px] md:rounded-t-[176px] rounded-b-[36px] p-2.5 bg-slate-900/70 border-2 border-cyan-400/40 backdrop-blur-2xl shadow-[0_0_45px_rgba(6,182,212,0.3)] overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              {/* Top rim specular highlight */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-cyan-400/25 to-transparent pointer-events-none z-10" />

              {/* Avatar Image (Cellular tower, Engr. Saud, and glowing cybersecurity shield) */}
              <div className="relative rounded-t-[124px] md:rounded-t-[164px] rounded-b-[26px] overflow-hidden bg-slate-950 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/avatar.jpg"
                  alt="Engr. Muhammad Saud - RF & Data Specialist with Telecom Tower and Digital Security Shield"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom dark vignette for caption */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

                {/* Role caption */}
                <div className="absolute bottom-3 inset-x-3 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-200">
                  <span className="font-semibold text-white">RF Engineer</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-cyan-400">2G / 4G / 5G KPI Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Area: Profile Details, Germany Relocation Headline & Glassmorphic Action Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Open to Relocation
          </div>

          {/* Prominent Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">
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
          <p className="text-base sm:text-lg text-slate-300 mb-8 font-light leading-relaxed max-w-2xl">
            RF Engineer at <span className="text-white font-semibold">Huawei Pakistan</span> specializing in 2G/4G/5G network KPI performance optimization, combined with cutting-edge expertise in <span className="text-cyan-300 font-semibold">Data Science</span>, <span className="text-cyan-300 font-semibold">Python</span>, <span className="text-cyan-300 font-semibold">SQL</span>, and <span className="text-cyan-300 font-semibold">Power BI</span> analytics.
          </p>

          {/* 4 Glassmorphic Action Cards: LinkedIn, Coursera, Credly, GitHub */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
            {resumeData.basics.profiles.map((profile, idx) => (
              <motion.a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/50 hover:bg-slate-800/80 backdrop-blur-xl transition-all shadow-sm hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] group"
              >
                <div className="flex items-center justify-between mb-3">
                  {getProfileIcon(profile.network)}
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.network}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">
                    {profile.tagline || 'Professional'}
                  </div>
                </div>
              </motion.a>
            ))}
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

            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 text-sm font-semibold transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Github size={16} className="text-cyan-400" />
              <span>Featured GitHub Repos</span>
            </button>

            <a
              href="/Muhammad-Saud-CV.pdf"
              download
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 text-sm font-semibold transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Download size={16} className="text-cyan-400" />
              <span>Download CV</span>
            </a>

            <div className="flex items-center gap-3 ml-auto">
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
                title={`Email ${resumeData.basics.email}`}
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${resumeData.basics.phone}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
                title={`Call ${resumeData.basics.phone}`}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
