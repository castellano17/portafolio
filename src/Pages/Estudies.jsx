import React from "react";
import "./styles/Estudies.css";

const Estudies = ({ translations, studiesTranslations, language }) => {
  return (
    <div id="estudies" className="estudies_container shadowBg">
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
                <a
                  href={studie.link}
                  target="_blank"
                  title={translations.aboutMe.button}
                >
                  <img
                    src="./img/descargacv.png"
                    alt={translations.aboutMe.button}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Estudies;
