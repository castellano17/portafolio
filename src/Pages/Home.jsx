import React from "react";
import About from "./About";
import Contact from "./Contact";
import Feactured from "./Feactured";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <header id="home">
        <div>
          <div>
            <img src="/code.png" alt="Logo header" />
          </div>
          <h1>
            Esmir
            <br />
            Roque
          </h1>

          <div></div>
          <div>
            <a href="https://www.linkedin.com/in/esmir-roque/" target="_blank">
              <img src="/linkedin.png" alt="Linkedin Social Media" />
            </a>
            <a href="https://github.com/castellano17" target="_blank">
              <img src="/github.png" alt="Github Repository" />
            </a>
          </div>
        </div>

        <div>
          <p>Hola!, soy un</p>
          <h2>Desarrollador web From-end de Nicaragua</h2>
          <p>
            Amante de su profesión y especializado en el desarrollo web Fron-end
            con estilos frescos y únicos. Actualmente me encuentro mejorando mis
            hablidades en Noje js para ampliar y mejorar mis halilidades
          </p>
        </div>
      </header>

      <About />
      <Feactured />
      <Contact />
    </>
  );
};
export default Home;
