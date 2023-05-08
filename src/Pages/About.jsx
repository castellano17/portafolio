import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div id="about" className="about shadowBg">
      <article className="about-me">
        <h3>
          Sobre <span>mi</span>
        </h3>
        <p>
          Como un apasionado de la lectura, me atraen los desafíos y disfruto de
          la competencia sana en todas mis actividades. Creo firmemente que la
          búsqueda constante de la mejora en múltiples aspectos es clave para el
          éxito. <br />
          <br />
          Tengo una actitud optimista y disfruto motivando a los demás y
          motivándome a mí mismo. Siempre intento encontrar el lado positivo de
          cualquier adversidad para evitar frustraciones innecesarias. Me
          encuentro actualmente en busca de nuevas oportunidades, estas son
          algunas de las tecnologías que manejo y si gustas contactarme tienes
          la sección de contacto para hacerlo.
        </p>
        <section className="container-skills">
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> HTML5
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> CSS
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> Tailwind CSS
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> JavaScript
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> React
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> Nodejs
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> PostgreSQL
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> GitHub
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> Redux
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> MongoDb
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> Axios
          </p>
        </section>
        <div className="about__button">
          <a href="/EsmirRoque.pdf " target="_blank">
            <img src="./img/descargacv.png" alt="descargar cv" />
            <p>Download CV</p>
          </a>
        </div>
      </article>

      <article className="studies">
        <h3>
          Mis <span>estudios</span>
        </h3>
        <div className="studies__container">
          <div className="studies__list">
            <img src="./img/platzi.webp" alt="" />
            <h4>Platzi</h4>
            <p>2023-2023</p>
            <p>Curso de Programación Básica</p>
          </div>

          <div className="studies__list">
            <img src="./img/logo_academlo.png" alt="" />
            <h4>Academlo</h4>
            <p>2022-2023</p>
            <p>Fundamentos de desarrollo web</p>
          </div>
          <div className="studies__list">
            <img src="./img/logo_academlo.png" alt="" />
            <h4>Academlo</h4>
            <p>2023-2023</p>
            <p>Desarrollo de aplicaciones web con React</p>
          </div>
          <div className="studies__list">
            <img src="./img/Microsoft-logo.jpg" alt="" />
            <h4>Microsoft</h4>
            <p>2020-2020</p>
            <p>Certificación Internacional Data Analyst Associate</p>
          </div>
          <div className="studies__list">
            <img src="./img/ceabad.jpg" alt="" />
            <h4>CEABAD</h4>
            <p>2020-2020</p>
            <p>Internet de las Cosas</p>
          </div>
          <div className="studies__list">
            <img src="./img/uraccan.png" alt="" />
            <h4>Universidad URACCAN</h4>
            <p>2012-2016</p>
            <p>Licenciatura en Informática Administrativa</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
