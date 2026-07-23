import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Feactured from "./Pages/Feactured";
import { useLocalStorage } from "./util/useLocalStorage";
import { en } from "./translations/en.js";
import { es } from "./translations/es.js";
import { studiesEN, studiesEs } from "./util/studies";
import { proyectosES, proyectosEn } from "./util/FrontEnd";
import { experienceEn, experienceEs } from "./util/Experience.js";
import Experience from "./Pages/Experience.jsx";
import Estudies from "./Pages/Estudies.jsx";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { scroller } from "react-scroll";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    // Handle initial hash scroll
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 1000,
          smooth: true,
          offset: -100
        });
      }, 500);
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const handleLanguageToggle = () => setLanguage(prev => (prev === "es" ? "en" : "es"));

  const translations = language === "es" ? es : en;
  const studiesTranslations = language === "es" ? studiesEs : studiesEN;
  const frontEndTranslations = language === "es" ? proyectosES : proyectosEn;
  const experienceTranslations = language === "es" ? experienceEs : experienceEn;

  useEffect(() => {
    document.body.dataset.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-background grid-bg transition-colors duration-700">
      <Navbar
        switchTheme={switchTheme}
        handleLanguageToggle={handleLanguageToggle}
        translations={translations}
        language={language}
      />
      
      <main className="relative z-10 pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                translations={translations}
                studiesTranslations={studiesTranslations}
                frontEndTranslations={frontEndTranslations}
                language={language}
                experienceTranslations={experienceTranslations}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
