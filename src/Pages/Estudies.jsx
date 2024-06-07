import React, { memo, useMemo } from "react";
import "./styles/Estudies.css";

const Estudies = ({ translations, studiesTranslations }) => {
  const studiesList = useMemo(() => {
    return studiesTranslations.map((studie) => (
      <div key={studie.id} className="studies__list">
        <img src={studie.img} alt={studie.institution} loading="lazy" />
        <h4>{studie.institution}</h4>
        <p className="studies__date">{studie.date}</p>
        <p className="studies__description">{studie.description}</p>
        <div className="studes__button">
          <a
            href={studie.link}
            target="_blank"
            rel="noopener noreferrer"
            title={translations.aboutMe.button}
          >
            <img
              src="./img/descargacv.png"
              alt={translations.aboutMe.button}
              loading="lazy"
            />
          </a>
        </div>
      </div>
    ));
  }, [studiesTranslations, translations.aboutMe.button]);

  return (
    <div id="estudies" className="estudies_container shadowBg">
      <article className="studies">
        <h3>
          {translations.aboutMe.studes.one}{" "}
          <span>{translations.aboutMe.studes.two}</span>
        </h3>
        <div className="studies__container">{studiesList}</div>
      </article>
    </div>
  );
};

export default memo(Estudies);
