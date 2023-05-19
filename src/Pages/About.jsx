import React from "react";
import "./styles/About.css";

const About = ({ translations, studiesTranslations }) => {
  return (
    <div id="about" className="about shadowBg">
      <article className="about-me">
        <h3>
          {translations.aboutMe.titleOne}
          <span> {translations.aboutMe.titleTwo}</span>
        </h3>
        <p>
          {translations.aboutMe.paragraphOne} <br />
          <br />
          {translations.aboutMe.paragraphTwo}
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
            <i className="arrow-about bx bxs-right-arrow"></i> MongoDB
          </p>
          <p>
            <i className="arrow-about bx bxs-right-arrow"></i> Axios
          </p>
        </section>
        <div className="about__button">
          <a href="/EsmirRoque.pdf " target="_blank">
            <img src="./img/descargacv.png" alt="descargar cv" />
            <p>{translations.aboutMe.cv}</p>
          </a>
        </div>
      </article>

      <article className="studies">
        <h3>
          {translations.aboutMe.studes.one}{" "}
          <span> {translations.aboutMe.studes.two}</span>
        </h3>
        <div className="studies__container">
          {studiesTranslations.map((studie) => (
            <div key={studie.id} className="studies__list">
              <img src={studie.img} alt="" />
              <h4>{studie.institution}</h4>
              <p>{studie.date}</p>
              <p>{studie.description}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default About;
