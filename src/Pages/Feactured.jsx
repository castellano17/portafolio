import React, { useState, useCallback, useMemo, memo } from "react";
import { IconBrandGithub, IconExternalLink, IconTrendingUp, IconChevronDown } from "@tabler/icons-react";

const Feactured = ({ translations, frontEndTranslations }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const handleFilter = useCallback((categoria) => {
    setCategoriaSeleccionada(categoria);
    setShowAll(false);
  }, []);

  const proyectosFiltrados = useMemo(() => {
    return categoriaSeleccionada === "all"
      ? frontEndTranslations
      : frontEndTranslations.filter(
          (proyecto) => proyecto.categoria === categoriaSeleccionada
        );
  }, [categoriaSeleccionada, frontEndTranslations]);

  const proyectosDestacados = useMemo(
    () => proyectosFiltrados.filter((proyecto) => proyecto.destacado),
    [proyectosFiltrados]
  );

  const proyectosVisibles = showAll || proyectosDestacados.length === 0
    ? proyectosFiltrados
    : proyectosDestacados;

  const hayMasProyectos = !showAll && proyectosVisibles.length < proyectosFiltrados.length;

  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
        <div>
          <h2 className="font-heading text-sm uppercase tracking-[0.3em] text-cyan-500 mb-4">
            {translations.project.title}
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold">
            {translations.project.heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">{translations.project.headingHighlight}</span>
          </h3>
        </div>

        <div className="flex gap-2 glass p-2 rounded-full">
          {[
            { key: "all", label: translations.project.all },
            { key: "Front-End", label: translations.project.frontend },
            { key: "Back-End", label: translations.project.backend },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleFilter(cat.key)}
              className={`px-6 py-2 text-xs font-medium uppercase tracking-widest rounded-full transition-all ${
                categoriaSeleccionada === cat.key
                  ? "bg-cyan-500 text-black"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectosVisibles.map((proyecto) => (
          <div key={proyecto.id} className="glass glass-highlight group flex flex-col rounded-3xl overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={proyecto.img}
                alt={proyecto.titulo}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 text-[10px] font-mono px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/30 uppercase">
                {proyecto.categoria}
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-heading font-bold leading-none normal-case">{proyecto.titulo}</h4>
                <div className="flex gap-3">
                  <a href={proyecto.enlaceGitHub} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/10 transition-all">
                    <IconBrandGithub size={18} />
                  </a>
                  <a href={proyecto.enlaceNetlify} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                    <IconExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-sm font-light mb-8 text-primary/50 leading-relaxed">
                {proyecto.descripcion}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.split(',').map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-1 bg-primary/5 rounded text-primary/50 border border-primary/5 uppercase">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <IconTrendingUp size={20} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {hayMasProyectos && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="glass px-8 py-4 rounded-full font-heading font-medium text-sm tracking-wider uppercase hover:bg-primary/10 transition-all flex items-center gap-3 group"
          >
            {translations.project.loadMore}
            <IconChevronDown size={18} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};

export default memo(Feactured);
