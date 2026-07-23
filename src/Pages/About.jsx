import React from "react";
import { skills } from "../util/Skills";
import { IconArrowRight, IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";

const About = ({ translations, language }) => {
  return (
    <section id="about" className="py-32">
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-7">
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-cyan-500 mb-6">
            {translations.aboutMe.titleOne} {translations.aboutMe.titleTwo}
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight normal-case">
            {translations.aboutMe.roleLabel && `${translations.aboutMe.roleLabel} `}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">{translations.aboutMe.roleHighlight}</span>
          </h3>
          <div className="space-y-6 text-primary/70 text-lg leading-relaxed font-light">
            <p>{translations.aboutMe.paragraphOne}</p>
            <p>{translations.aboutMe.paragraphTwo}</p>
          </div>

          <div className="mt-12 pt-10 border-t border-primary/5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary/40 mb-8">{translations.aboutMe.techMatrix}</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="glass rounded-xl group hover:border-cyan-500/30 flex items-center justify-between px-4 py-3 transition-all"
                >
                  <span className="font-medium text-xs uppercase tracking-wide text-primary/70">{skill.name}</span>
                  <IconArrowRight size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href={language === "es" ? "/EsmirRoque_es.pdf" : "/EsmirRoque_en.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-full font-heading font-medium text-sm tracking-wider uppercase hover:bg-primary/10 transition-all flex items-center gap-3 group"
            >
              {translations.aboutMe.cv}
              <IconDownload size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-6 py-4 text-primary/40">
              <a href="https://github.com/castellano17" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                <IconBrandGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/esmir-roque/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                <IconBrandLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="glass glass-highlight p-8 rounded-3xl relative z-10 overflow-hidden">
            <div className="space-y-8">
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">{translations.aboutMe.stats.deployments}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-500">{translations.aboutMe.stats.deploymentsLabel}</div>
              </div>
              <div className="h-px bg-primary/5" />
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">{translations.aboutMe.stats.backend}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-500">{translations.aboutMe.stats.backendLabel}</div>
              </div>
              <div className="h-px bg-primary/5" />
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">{translations.aboutMe.stats.frontend}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-500">{translations.aboutMe.stats.frontendLabel}</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
