import "./styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact shadowBg">
      <h3>Contacto</h3>
      <div className="contact__container">
        <div className="contact__container-component">
          <div className="contact__img">
            <a href="tel:+50586498505">
              <img src="./img/phone.png" alt="phone" />
            </a>
          </div>
        </div>

        <div className="contact__container-component">
          <div className="contact__img">
            <a href="mailto:castellano17@gmail.com">
              <img src="./img/gmail.png" alt="mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
