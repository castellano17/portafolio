import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Feactured from "./Pages/Feactured";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";
import { en } from "./translations/en.js";
import { es } from "./translations/es.js";
import { studiesEN, studiesEs } from "./util/studies";
import { proyectosES, proyectosEn } from "./util/FrontEnd";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [language, setLanguage] = useState("es"); // Estado del idioma actual

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleLanguageToggle = () => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };

  const translations = language === "es" ? es : en; // Obtiene las traducciones según el idioma actual
  const studiesTranslations = language === "es" ? studiesEs : studiesEN; // Obtiene las traducciones de "studies" según el idioma actual
  const frontEndTranslations = language === "es" ? proyectosES : proyectosEn; // Obtienes las traducciones de "FrontEnd" según el idioma actual

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      <Navbar
        switchTheme={switchTheme}
        handleLanguageToggle={handleLanguageToggle}
        translations={translations}
        language={language}
      />
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/feactured">Feactured</Link>
        <Link to="/contact">Contact</Link> */}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              translations={translations}
              studiesTranslations={studiesTranslations}
              frontEndTranslations={frontEndTranslations}
              language={language}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              translations={translations}
              studiesTranslations={studiesTranslations}
              language={language}
            />
          }
        />
        <Route
          path="/feactured"
          element={
            <Feactured
              translations={translations}
              frontEndTranslations={frontEndTranslations}
            />
          }
        />
        <Route
          path="/contact"
          element={<Contact translations={translations} />}
        />
      </Routes>
    </div>
  );
}

export default App;
