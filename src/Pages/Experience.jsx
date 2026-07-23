import React, { memo, useMemo, useRef, useState, useEffect } from "react";
import { IconExternalLink, IconArrowUpRight } from "@tabler/icons-react";

const Experience = ({ translations, experienceTranslations }) => {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - rect.top) / (vh + rect.height);
      setProgress(Math.min(Math.max(p, 0), 1));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const experienceItems = useMemo(() => {
    return experienceTranslations.map((exp, index) => {
      const reverse = index % 2 === 1;
      return (
        <div
          key={exp.id}
          className={`relative flex flex-col md:items-center group ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <div className={`md:w-1/2 mb-6 md:mb-0 ${reverse ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-500 mb-2">{translations.Experience.role}</div>
            <h4 className="font-heading text-2xl font-bold text-primary mb-4 normal-case">{exp.titulo}</h4>
            <p className={`text-primary/60 text-sm leading-relaxed max-w-md ${reverse ? "" : "md:ml-auto"}`}>
              {exp.descripcion}
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.8)] hidden md:block" />
          <div className={`md:w-1/2 ${reverse ? "md:pr-16" : "md:pl-16"}`}>
            <div className={`glass p-6 rounded-2xl group-hover:border-cyan-500/30 transition-all ${reverse ? "md:text-right" : ""}`}>
              <div className={`flex flex-wrap gap-2 ${reverse ? "justify-start md:justify-end" : ""}`}>
                {exp.tecnologias.split(',').map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/5 rounded text-[10px] font-mono text-primary/50 border border-primary/5 uppercase">
                    {tech.trim()}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 justify-start md:justify-end">
                <a href={exp.enlaceGitHub} target="_blank" rel="noreferrer" className="text-primary/40 hover:text-cyan-400 transition-colors">
                  <IconArrowUpRight size={18} />
                </a>
                <a href={exp.enlaceWeb} target="_blank" rel="noreferrer" className="text-primary/40 hover:text-cyan-400 transition-colors">
                  <IconExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [experienceTranslations]);

  return (
    <section id="experience" className="py-32">
      <div className="text-center mb-20">
        <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-cyan-500 mb-4">{translations.Experience.subtitle}</h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold">{translations.Experience.title}</h3>
      </div>

      <div className="relative" ref={timelineRef}>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/10 hidden md:block" />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-cyan-500 shadow-[0_0_8px_rgba(0,255,255,0.6)] hidden md:block transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
        <div className="space-y-16">
          {experienceItems}
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
