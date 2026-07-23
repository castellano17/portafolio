import React, { memo, useMemo, useState } from "react";
import { IconSchool, IconArrowUpRight, IconCalendar, IconChevronDown } from "@tabler/icons-react";

const Estudies = ({ translations, studiesTranslations }) => {
  const [showAll, setShowAll] = useState(false);

  const estudiosDestacados = useMemo(
    () => studiesTranslations.filter((studie) => studie.destacado),
    [studiesTranslations]
  );

  const estudiosVisibles = showAll || estudiosDestacados.length === 0
    ? studiesTranslations
    : estudiosDestacados;

  const hayMasEstudios = !showAll && estudiosVisibles.length < studiesTranslations.length;

  const studiesList = useMemo(() => {
    return estudiosVisibles.map((studie) => (
      <div
        key={studie.id}
        className="glass glass-highlight rounded-3xl flex flex-col items-start group p-8 hover:border-cyan-500/30 transition-all"
      >
        <div className="flex justify-between items-start w-full mb-10">
          <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
            <IconSchool size={28} />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-1 text-cyan-500">
              <IconCalendar size={14} />
              <span className="font-mono text-[10px] uppercase tracking-widest">{studie.date}</span>
            </div>
            <h4 className="text-lg font-heading font-bold leading-none normal-case">{studie.institution}</h4>
          </div>
        </div>

        <p className="text-sm font-light text-primary/50 mb-10 leading-relaxed min-h-[60px]">
          {studie.description}
        </p>

        <a
          href={studie.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 hover:gap-4 transition-all"
        >
          <span>{translations.aboutMe.studes.credentials}</span>
          <IconArrowUpRight size={16} />
        </a>
      </div>
    ));
  }, [estudiosVisibles, translations]);

  return (
    <section id="estudies" className="py-16 md:py-32">
      <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
        <div className="md:col-span-7">
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-cyan-500 mb-4">{translations.aboutMe.studes.background}</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold">
            {translations.aboutMe.studes.one}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">
              {translations.aboutMe.studes.two}
            </span>
          </h3>
        </div>
        <div className="md:col-span-5 md:text-right font-mono text-primary/40 uppercase tracking-widest text-xs">
          {translations.aboutMe.studes.subtitle}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studiesList}
      </div>

      {hayMasEstudios && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="glass px-8 py-4 rounded-full font-heading font-medium text-sm tracking-wider uppercase hover:bg-primary/10 transition-all flex items-center gap-3 group"
          >
            {translations.aboutMe.studes.loadMore}
            <IconChevronDown size={18} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};

export default memo(Estudies);
