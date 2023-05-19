import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./styles/Navbar.css";
import useLocalStorage from "use-local-storage";

const Navbar = ({
  switchTheme,
  handleLanguageToggle,
  translations,
  language,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme] = useLocalStorage("theme", "dark");

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  // Obtener el texto del tema traducido según el idioma actual
  const themeText =
    language === "es"
      ? translations.navbar.themes[theme]
      : translations.navbar.themes[theme];

  return (
    <div className="navbar__container ">
      <nav className="navbar ">
        <div>
          <div>
            {/* Link principal */}
            <RouterLink to="/">
              <img className="logo" src="/logoEsmir.png" />
            </RouterLink>
          </div>
        </div>

        {/* Menú horizontal */}
        <div className="navbar__link-horizontal">
          <div className="navbar__link-horizontal">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="scroll-link"
            >
              {translations.navbar.menuOne}
            </ScrollLink>
          </div>
          <div className="navbar__link-horizontal">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="scroll-link"
            >
              {translations.navbar.menuTwo}
            </ScrollLink>
          </div>
          <div className="navbar__link-horizontal">
            <ScrollLink
              to="feactured"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="scroll-link"
            >
              {translations.navbar.menuThree}
            </ScrollLink>
          </div>
          <div className="navbar__link-horizontal">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="scroll-link"
            >
              {translations.navbar.menuFour}
            </ScrollLink>
          </div>
        </div>

        <div>
          <i
            onClick={switchTheme}
            className="theme-toggle bx bx-toggle-right"
          ></i>
          <h3 className="text-toggle">{themeText}</h3>
        </div>

        {/* Agregar el botón de traducción */}
        <div
          onClick={handleLanguageToggle}
          className="translate-icon"
          title={language === "es" ? "Traducir" : "Translate"}
        >
          <i className="bx bx-globe"></i>
          {language === "es" ? " ES" : " EN"}
        </div>

        {/* botón del menú hamburguesa*/}
        <div
          className="navbar__menu-hamburguesa-buttom"
          onClick={handleMenuOpen}
        >
          <i className="bx bx-menu "></i>
        </div>

        <div onClick={handleCloseMenu}></div>

        <div className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <div>
            <button className="navbar__close" onClick={handleCloseMenu}>
              <i className="bx bx-x"></i>
            </button>
            <div onClick={handleCloseMenu}>
              <RouterLink to="/">{translations.navbar.menuOne}</RouterLink>
            </div>
            <div className="" onClick={handleCloseMenu}>
              <RouterLink to="/about">{translations.navbar.menuTwo}</RouterLink>
            </div>
            <div className="" onClick={handleCloseMenu}>
              <RouterLink to="/feactured">
                {translations.navbar.menuThree}
              </RouterLink>
            </div>
            <div className="" onClick={handleCloseMenu}>
              <RouterLink to="/contact">
                {translations.navbar.menuFour}
              </RouterLink>
            </div>
          </div>

          <div>
            <i
              onClick={switchTheme}
              className="theme-toggle2 bx bx-toggle-right"
            ></i>
            <h3 className="text-toggle2">{themeText}</h3>
          </div>

          {/* Agregar el botón de traducción */}
          <div
            onClick={handleLanguageToggle}
            className="translate-icon2"
            title={language === "es" ? "Traducir" : "Translate"}
          >
            <i className="bx bx-globe"></i>
            {language === "es" ? " ES" : " EN"}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
