import React, { useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Feactured from "./Feactured";
import Estudies from "./Estudies";
import Footer from "./Footer";
import Experience from "./Experience";
import { IconBrandGithub, IconBrandLinkedin, IconArrowDown } from "@tabler/icons-react";
import gsap from "gsap";
import { scrollToSection } from "../util/lenis";

const Home = ({
  translations,
  studiesTranslations,
  frontEndTranslations,
  experienceTranslations,
  language,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-card", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section
        id="home"
        className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center px-6 pt-12 pb-6 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,_rgba(0,255,255,0.15)_0%,_transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,_rgba(0,255,255,0.1)_0%,_transparent_70%)] blur-[100px]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="mb-4 flex items-center gap-2 px-4 py-1.5 glass rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
              {translations.home.status}
            </span>
          </div>

          <h1 className="font-heading text-[clamp(1.5rem,6.5vw,4.5rem)] font-bold tracking-tight mb-5 leading-[0.9]">
            <div className="hero-title-line typewriter inline-block text-primary/90">
              ESMIR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">ROQUE CASTELLANO.</span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-primary/60 font-light max-w-2xl mb-8 leading-relaxed">
            {translations.home.Iam}
          </p>

          <div className="hero-card glass p-1 rounded-xl w-full max-w-xl mx-auto shadow-2xl -rotate-1">
            <div className="bg-black/40 rounded-lg p-6 font-mono text-sm text-left border border-white/5">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-1">
                <p><span className="text-pink-500">const</span> architect = {"{"}</p>
                <p className="pl-4">name: <span className="text-yellow-400">'Esmir Roque'</span>,</p>
                <p className="pl-4">role: <span className="text-yellow-400">'Fullstack Web Developer'</span>,</p>
                <p className="pl-4">backend: [<span className="text-cyan-400">'Node.js'</span>, <span className="text-cyan-400">'PostgreSQL'</span>, <span className="text-cyan-400">'Python'</span>],</p>
                <p className="pl-4">frontend: [<span className="text-cyan-400">'React'</span>, <span className="text-cyan-400">'Next.js'</span>, <span className="text-cyan-400">'Tailwind'</span>]</p>
                <p>{"};"}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="https://github.com/castellano17" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
              <IconBrandGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/esmir-roque/" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
              <IconBrandLinkedin size={22} />
            </a>
          </div>
        </div>

        <div className="relative z-10 hidden md:flex justify-center pt-6 opacity-50">
          <button
            type="button"
            onClick={() => scrollToSection("#about")}
            aria-label={translations.navbar.menuTwo}
            className="cursor-pointer"
          >
            <IconArrowDown className="text-cyan-400 animate-bounce" size={22} />
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <About
          translations={translations}
          studiesTranslations={studiesTranslations}
          language={language}
        />

        <Feactured
          translations={translations}
          frontEndTranslations={frontEndTranslations}
        />

        <Experience
          translations={translations}
          experienceTranslations={experienceTranslations}
        />

        <Estudies
          translations={translations}
          studiesTranslations={studiesTranslations}
        />

        <Contact translations={translations} />
      </div>

      <Footer translations={translations} />
    </div>
  );
};
export default Home;
