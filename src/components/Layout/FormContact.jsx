import { useState } from "react";
import "./styles/FormContact.css";

const FormContact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="contact-form-container">
      <h2 className="title">Escríbeme</h2>

      {!formSubmitted ? (
        <form
          className="form-group"
          action="https://formsubmit.co/e3ed59455143d2ead7e46b3282428262"
          method="POST"
        >
          <div className="form-group">
            <label className="contact-label" htmlFor="name">
              Nombre:
            </label>
            <input
              className="contact-input"
              type="text"
              name="name"
              //value={formData.name}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="contact-label" htmlFor="email">
              Email:
            </label>
            <input
              className="contact-input"
              type="email"
              name="email"
              //  value={formData.email}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="contact-label" htmlFor="message">
              Mensaje:
            </label>
            <textarea
              className="contact-input"
              name="message"
              //  value={formData.message}
              // onChange={handleChange}
            ></textarea>
          </div>
          <button
            className="button"
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
              setFormSubmitted(true);
            }}
          >
            Enviar
          </button>
          {/* <input
            type="hidden"
            name="_next"
          value="https://www.esmirroque.com"
          /> */}
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      ) : (
        <p className="success-message">¡Formulario enviado con éxito!</p>
      )}
    </div>
  );
};

export default FormContact;
