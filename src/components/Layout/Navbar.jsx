import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-3 w-full bg-primary shadow-md">
      <div className="h-20 flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-8 flex justify-center items-center no-underline">
          {/* Link principal */}
          <Link>
            <a href="#">
              <span>E</span>
              <span>R</span>
              <span>.</span>
            </a>
          </Link>
        </div>
        {/* container link */}
        <div>
          <Link to="/"> Inicio </Link>
          <Link to="/about"> Sobre mi </Link>
          <Link to="/feactured"> Proyectos </Link>
          <Link to="/contact"> Contacto </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
