import React from "react";
import "./styles/About.css";
import { skills } from "../util/Skills";

const About = ({ translations, studiesTranslations, language }) => {
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
              <p className="studies__date">{studie.date}</p>
              <p className="studies__description">{studie.description}</p>
              <div className="studes__button">
                <a href={studie.link} target="_blank">
                  <img src="./img/descargacv.png" alt="descargar" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default About;
