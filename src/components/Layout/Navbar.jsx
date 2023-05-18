import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./styles/Navbar.css";
import useLocalStorage from "use-local-storage";

const Navbar = ({ switchTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme] = useLocalStorage("theme", "dark");

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

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
              Inicio
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
              Sobre mi
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
              Proyectos
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
              Contacto
            </ScrollLink>
          </div>
        </div>

        <div>
          <i
            onClick={switchTheme}
            className="theme-toggle bx bx-toggle-right"
          ></i>
          <h3 className="text-toggle">{theme}</h3>
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
              <RouterLink to="/">Inicio</RouterLink>
            </div>
            <div className="" onClick={handleCloseMenu}>
              <RouterLink to="/about">Sobre mi</RouterLink>
            </div>
            <div className="" onClick={handleCloseMenu}>
              <RouterLink to="/feactured">Proyectos</RouterLink>
            </div>
            <div className="" onClick={handleCloseMenu}>
              <RouterLink to="/contact">Contacto</RouterLink>
            </div>
          </div>

          <div>
            <i
              onClick={switchTheme}
              className="theme-toggle2 bx bx-toggle-right"
            ></i>
            <h3 className="text-toggle2">{theme}</h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
