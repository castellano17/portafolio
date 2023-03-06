import React from "react";
import About from "./About";
import Contact from "./Contact";
import Feactured from "./Feactured";

const Home = () => {
  return (
    <>
      <header
        id="home"
        className="relative ml-4 grid h-full gap-y-16 pt-24 pb-8 md:h-525  md:flex md:gap-4 md:justify-center md:items-center   xl:pt-0 xl:py-0 xl:px-8 xl:max-w-custom  "
      >
        <div className="bg-personal-photo bg-no-repeat bg-bottom-right flex flex-col justify-center bg-80  z-2 w-[38vw] h-full  md:w-[90vw]">
          <div>
            <img src="/code.png" alt="Logo header" />
          </div>
          <h1 className="block">
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

        <div className="md:w-[90vw]">
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
