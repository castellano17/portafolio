import React, { useState } from "react";
import "./styles/Feactured.css";

const Feactured = ({ translations, frontEndTranslations }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");

  const handleFilter = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const proyectosFiltrados =
    categoriaSeleccionada === "all"
      ? frontEndTranslations
      : frontEndTranslations.filter(
          (proyecto) => proyecto.categoria === categoriaSeleccionada
        );

  return (
    <div id="feactured" className="feactured ">
      <h3>{translations.project.title}</h3>

      <div className="portfolio-filter">
        <button
          type="button"
          className={categoriaSeleccionada === "all" ? "active" : ""}
          onClick={() => handleFilter("all")}
        >
          Todos
        </button>
        <button
          type="button"
          className={categoriaSeleccionada === "front-end" ? "active" : ""}
          onClick={() => handleFilter("Front-End")}
        >
          Front-End
        </button>
        <button
          type="button"
          className={categoriaSeleccionada === "back-end" ? "active" : ""}
          onClick={() => handleFilter("Back-End")}
        >
          Back-End
        </button>
      </div>

      <div className="feactured__container-card">
        {proyectosFiltrados.map((proyecto) => (
          <div key={proyecto.id} className="contenedor">
            <div className="glass">
              <h2 className="feactured__glass-title">
                <b>{proyecto.titulo}</b>
              </h2>
              <h2 className="feactured__glass-description">
                {proyecto.descripcion}
              </h2>
              <p className="feactured__glass-tecno">
                <b>{proyecto.tecnologias}</b>
              </p>
              <div className="contenido">
                <a
                  href={proyecto.enlaceGitHub}
                  target="_blank"
                  className="feactured__glass-contenido"
                >
                  <i className="feactured-icon bx bxl-github"></i>
                </a>
                <a
                  href={proyecto.enlaceNetlify}
                  target="_blank"
                  className="feactured__glass-contenido"
                >
                  <i className="feactured-icon bx bx-link-external"></i>
                </a>
              </div>
            </div>

            <div className="imagen">
              <img src={proyecto.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feactured;
