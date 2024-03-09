import React from "react";
import "./styles/About.css";
import { skills } from "../util/Skills";

const About = ({ translations, language }) => {
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
          {skills.map((skill) => (
            <i className="arrow-about bx bxs-right-arrow" key={skill.id}>
              <span className="container-skills__name"> {skill.name}</span>
            </i>
          ))}
        </section>
        <div className="about__button">
          <a
            href={
              language === "es" ? "/EsmirRoque_es.pdf" : "/EsmirRoque_en.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/descargacv.png" alt="descargar cv" />
            <p>{translations.aboutMe.cv}</p>
          </a>
        </div>
      </article>
    </div>
  );
};

export default About;
