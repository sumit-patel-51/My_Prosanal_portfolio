import React, { useContext } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { DataContext } from "../datas/DataContaxt";

function FooterSection() {
  const {footerSection} = useContext(DataContext)
  return (
    <div>
      <div className="footer-section">
        <div className="top-footer">
          <div className="top-top-footer">
            <a href={footerSection.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={footerSection.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href={footerSection.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={footerSection.linked} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a
              href={footerSection.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="bottom-top-footer">
            <a href="#home">Home</a>
            <span>|</span>
            <a href="#about">About</a>
            <span>|</span>
            <a href="#education">Education</a>
            <span>|</span>
            <a href="#skills">Skills</a>
            <span>|</span>
            <a href="#contact">Contact_Me</a>
          </div>
        </div>
        <div className="bottom-footer">
          <h1>Designed By {footerSection.designedName}</h1>
          <p>
            <span>©</span>
            <p>{footerSection.websiteName} | All rights reserved</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
