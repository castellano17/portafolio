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
          </div>
        </div>

        <div className="header__home-right">
          <p className="header__intro">Hola!, soy un</p>
          <h2 className="header__title">
            Desarrollador web Front-end de Nicaragua
          </h2>
          <p className="header__home-description">
            Amante de su profesión y especializado en el desarrollo web Fron-end
            con estilos frescos y únicos. Actualmente me encuentro mejorando mis
            hablidades en Noje js.
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