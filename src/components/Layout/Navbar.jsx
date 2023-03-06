import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-primary py-2  sticky top-0 left-0 right-0 shadow-custom ">
      <nav className=" mx-auto max-w-custom h-20 flex justify-between items-center ">
        <div className="ml-4">
          <div>
            {/* Link principal */}
            <RouterLink>
              <div>
                <img className="inline-block  h-16 w-14" src="/logoEsmir.png" />
              </div>
            </RouterLink>
          </div>
        </div>

        {/* Menú horizontal */}
        <div className="hidden md:flex md:items-center">
          <div className="mx-4 text-xl cursor-pointer py-3 hover:text-tertiary hover:scale-110">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Inicio
            </ScrollLink>
          </div>
          <div className="mx-4 text-xl cursor-pointer py-3 hover:text-tertiary hover:scale-110">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Sobre mi
            </ScrollLink>
          </div>
          <div className="mx-4 text-xl cursor-pointer py-3 hover:text-tertiary hover:scale-110">
            <ScrollLink
              to="feactured"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Proyectos
            </ScrollLink>
          </div>
          <div className="mx-4 text-xl cursor-pointer py-3 hover:text-tertiary hover:scale-110">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contacto
            </ScrollLink>
          </div>
        </div>

        {/* botón del menú hamburguesa*/}
        <div
          className="ml-4 md:hidden cursor-pointer text-5xl mr-12 "
          onClick={() => setMenuOpen(true)}
        >
          <i className="bx bx-menu "></i>
        </div>

        <div
          className={`${
            !menuOpen && "hidden"
          } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
          onClick={() => setMenuOpen(false)}
        ></div>

        <div
          className={`${
            menuOpen ? "w-80" : "w-0"
          } bg-tertiary min-h-screen fixed top-0 left-0 transition-all duration-300`}
        >
          <div className={`${!menuOpen && "hidden"} pt-3`}>
            <button
              className="ml-4 mb-14 text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <i className="bx bx-x"></i>
            </button>
            <div
              className="text-center text-xl hover:bg-primary cursor-pointer py-3 mb-2"
              onClick={() => setMenuOpen(false)}
            >
              <RouterLink to="/">Inicio</RouterLink>
            </div>
            <div
              className="text-center text-xl hover:bg-primary cursor-pointer py-3 mb-2"
              onClick={() => setMenuOpen(false)}
            >
              <RouterLink to="/about">Sobre mi</RouterLink>
            </div>
            <div
              className="text-center text-xl hover:bg-primary cursor-pointer py-3 mb-2"
              onClick={() => setMenuOpen(false)}
            >
              <RouterLink to="/feactured">Proyectos</RouterLink>
            </div>
            <div
              className="text-center text-xl hover:bg-primary cursor-pointer py-3 mb-2"
              onClick={() => setMenuOpen(false)}
            >
              <RouterLink to="/contact">Contacto</RouterLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
