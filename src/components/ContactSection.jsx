import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import { DataContext } from "../datas/DataContaxt";

function ContactSection() {

  const {contactSection} = useContext(DataContext);

  return (
    <div id="contact" className="secction">
      <div className="contact-section">
        <div className="first-contact box">
          <h1>Contact Me</h1>
        </div>
        <div className="second-contact box">
          <div className="second-first-contact info">
            <p>{contactSection.description}</p>
            <div className="contact-info">
              <FontAwesomeIcon
                className="info-icon"
                icon={faLocationCrosshairs}
              />
              <span>
                <h1>Address: </h1>
                <p>{contactSection.address}</p>
              </span>
            </div>
            <div className="contact-info">
              <FontAwesomeIcon className="info-icon" icon={faEnvelope} />
              <span>
                <h1>Email: </h1>
                <p>{contactSection.email}</p>
              </span>
            </div>
            <div className="contact-info">
              <FontAwesomeIcon className="info-icon" icon={faPhone} />
              <span>
                <h1>Mobile: </h1>
                <p>{contactSection.mobile}</p>
              </span>
            </div>
          </div>
          <div className="second-second-contact info">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
