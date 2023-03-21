import "./styles/Feactured.css";

const Feactured = () => {
  return (
    <div id="feactured" className="feactured">
      <h3>Proyectos</h3>

      <section className="feactured__portafolio">
        <article className="feactured__portaffolio-card">
          <section className="feactured__portafolio-header">
            <i className="feactured-icon bx bxs-folder"></i>
            <div>
              <a
                href="https://github.com/castellano17/weather2"
                target="_blank"
              >
                <i className=" feactured-icon bx bxl-github"></i>
              </a>
              <a href="https://weather2-esmir.netlify.app/" target="_blank">
                <i className=" feactured-icon bx bx-git-branch"></i>
              </a>
            </div>
          </section>
          <section className="feactured__portafolio-description">
            <p className="principalStyles">Aplicación del clima</p>
            <p>
              Aplicación donde puedes ver el clima de tu localización y
              consultar el clima de otra ciudad
            </p>
            <p className="principalStyles">React js, JavaScript, CSS</p>
          </section>
        </article>

        <article className="feactured__portaffolio-card">
          <section className="feactured__portafolio-header">
            <i className=" feactured-icon bx bxs-folder"></i>
            <div>
              <a
                href="https://github.com/castellano17/entregable3"
                target="_blank"
              >
                <i className=" feactured-icon bx bxl-github"></i>
              </a>
              <a
                href="https://rick-and-morty-esmir.netlify.app/"
                target="_blank"
              >
                <i className=" feactured-icon bx bx-git-branch"></i>
              </a>
            </div>
          </section>
          <section className="feactured__portafolio-description">
            <p className="principalStyles">Rick and Morty Wiki</p>
            <p>
              Pagina web donde puedes consultar personajes y ver caracteristicas
              dependiento de su dimensión.
            </p>
            <p className="principalStyles">React js, JavaScript, CSS</p>
          </section>
        </article>

        <article className="feactured__portaffolio-card">
          <section className="feactured__portafolio-header">
            <i className=" feactured-icon bx bxs-folder"></i>
            <div>
              <a href="https://entregable5-esmir.netlify.app" target="_blank">
                <i className=" feactured-icon bx bxl-github"></i>
              </a>
              <a
                href="https://github.com/castellano17/entregable5"
                target="_blank"
              >
                <i className=" feactured-icon bx bx-git-branch"></i>
              </a>
            </div>
          </section>
          <section className="feactured__portafolio-description">
            <p className="principalStyles">Pokedex</p>
            <p>
              Aplicación donde puedes consultar la información detallada de los
              pokemon y filtrar por nombres y categorías
            </p>
            <p className="principalStyles">
              React js, JavaScript, CSS, React router-dom, GIT, Redux, Axios{" "}
            </p>
          </section>
        </article>

        <article className="feactured__portaffolio-card">
          <section className="feactured__portafolio-header">
            <i className=" feactured-icon bx bxs-folder"></i>
            <div>
              <a
                href="https://github.com/castellano17/entregable6"
                target="_blank"
              >
                <i className=" feactured-icon bx bxl-github"></i>
              </a>
              <a href="https://entregable6-esmir.netlify.app" target="_blank">
                <i className=" feactured-icon bx bx-git-branch"></i>
              </a>
            </div>
          </section>
          <section className="feactured__portafolio-description">
            <p className="principalStyles">E-Commerce</p>
            <p>
              Tienda en línea, permite filtrar por categorías, agregar al
              carrito y visualizar detalles de cada producto,
            </p>
            <p className="principalStyles">
              React JS, JavaScrit, Redux, axios, React-Router-dom, HTML y CSS
            </p>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Feactured;
