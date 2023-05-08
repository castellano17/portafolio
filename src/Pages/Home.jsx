import React from "react";
import About from "./About";
import Contact from "./Contact";
import Feactured from "./Feactured";
import Footer from "./Footer";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <header id="home" className="header__home">
        <div className="header__home-left">
          <div className="home__logo">
            <img src="/logocode.png" alt="Logo header" />
          </div>
          <h1>
            Esmir
            <br />
            Roque.
          </h1>

          <div></div>
          <div className="icon-social">
            <a href="https://www.linkedin.com/in/esmir-roque/" target="_blank">
              <img src="/linkedin-logo-240.png" alt="Linkedin Social Media" />
            </a>
            <a href="https://github.com/castellano17" target="_blank">
              <img src="/github-logo-240.png" alt="Github Repository" />
            </a>

            <a
              href="https://wa.me/50586498505?text=Hola,%20estoy%20interesado%20en%20tu%20perfil"
              target="_blank"
              className="whatsapp-button"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="header__home-right">
          <p className="header__intro">Hola!, soy un</p>
          <h2 className="header__title">
            Desarrollador web Full-stack de Nicaragua
          </h2>
          <p className="header__home-description">
            Amante de su profesión y especializado en el desarrollo web Fron-end
            y Back-end con estilos frescos y únicos. Actualmente me encuentro
            mejorando mis hablidades en Python para ampliar y mejorar mis
            habilidades.
          </p>
        </div>
      </header>

      <About />
      <Feactured />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
