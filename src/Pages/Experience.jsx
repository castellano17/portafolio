import React, { memo, useMemo } from "react";
import "./styles/Experience.css";
import "boxicons";

const Experience = ({ translations, experienceTranslations }) => {
  const experienceItems = useMemo(() => {
    return experienceTranslations.map((experience) => (
      <article key={experience.id} className="experience-entry">
        <img src={experience.img} alt={experience.img} loading="lazy" />
        <section className="experience-card">
          <section className="experience-header">
            <box-icon
              name="folder"
              size="md"
              type="solid"
              color="white"
            ></box-icon>
            <div>
              <a
                href={experience.enlaceGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  name="github"
                  type="logo"
                  color="white"
                  size="md"
                ></box-icon>
              </a>
              <a
                href={experience.enlaceWeb}
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  name="link-external"
                  size="md"
                  color="white"
                ></box-icon>
              </a>
            </div>
          </section>
          <section className="experience-description">
            <p className="experience-titles">{experience.titulo}</p>
            <p>{experience.descripcion}</p>
            <p className="experience-titles">{experience.tecnologias}</p>
          </section>
        </section>
      </article>
    ));
  }, [experienceTranslations]);

  return (
    <div id="experience" className="experience-container shadowBg">
      <h3>{translations.Experience.title}</h3>
      <section className="container-experience">{experienceItems}</section>
    </div>
  );
};

export default memo(Experience);
