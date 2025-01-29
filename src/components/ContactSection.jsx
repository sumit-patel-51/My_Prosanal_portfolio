import React, { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import { DataContext } from "../datas/DataContaxt";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function ContactSection() {

  const {contactSection} = useContext(DataContext);

  const contactani = useRef();
  const contactani1 = useRef();
  const contactani2 = useRef();
  const contactani3 = useRef();
  const contactani4 = useRef();
  const contactForm = useRef();
  useGSAP(()=> {
    const tl = gsap.timeline();
    gsap.from(contactani.current, {
      scrollTrigger: {
        trigger:contactani.current,
        start:"top 90%",
        end:"top 90%",
        scrub:4
      },
      y:100,
      duration:2,
      opacity:0,
      stagger:0.3
    })
    tl.from(contactani1.current, {
      scrollTrigger: {
        trigger:contactani1.current,
        start:"top 90%",
        end:"top 90%",
        scrub:4
      },
      y:100,
      duration:2,
      opacity:0,
      stagger:0.3
    })
    tl.from(contactani2.current, {
      scrollTrigger: {
        trigger:contactani2.current,
        start:"top 90%",
        end:"top 90%",
        scrub:4
      },
      y:100,
      duration:2,
      opacity:0,
      stagger:0.3
    })
    tl.from(contactani3.current, {
      scrollTrigger: {
        trigger:contactani3.current,
        start:"top 90%",
        end:"top 90%",
        scrub:4
      },
      y:100,
      duration:2,
      opacity:0,
      stagger:0.3
    })
    tl.from(contactani4.current, {
      scrollTrigger: {
        trigger:contactani4.current,
        start:"top 90%",
        end:"top 90%",
        scrub:4
      },
      y:100,
      duration:2,
      opacity:0,
      stagger:0.3
    })
    tl.from(contactForm.current, {
      scrollTrigger: {
        trigger:contactForm.current,
        start:"top 90%",
        end:"top 90%",
        scrub:4
      },
      y:100,
      duration:2,
      opacity:0,
      stagger:0.3
    })
  },[])

  return (
    <div id="contact" className="secction">
      <div className="contact-section">
        <div className="first-contact box">
          <h1 ref={contactani}>Contact Me</h1>
        </div>
        <div className="second-contact box">
          <div className="second-first-contact info">
            <p ref={contactani1}>{contactSection.description}</p>
            <div ref={contactani2} className="contact-info">
              <FontAwesomeIcon
                className="info-icon"
                icon={faLocationCrosshairs}
              />
              <span>
                <h1>Address: </h1>
                <p>{contactSection.address}</p>
              </span>
            </div>
            <div ref={contactani3} className="contact-info">
              <FontAwesomeIcon className="info-icon" icon={faEnvelope} />
              <span>
                <h1>Email: </h1>
                <p>{contactSection.email}</p>
              </span>
            </div>
            <div ref={contactani4} className="contact-info">
              <FontAwesomeIcon className="info-icon" icon={faPhone} />
              <span>
                <h1>Mobile: </h1>
                <p>{contactSection.mobile}</p>
              </span>
            </div>
          </div>
          <div ref={contactForm} className="second-second-contact info">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
