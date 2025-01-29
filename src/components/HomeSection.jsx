import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../datas/DataContaxt";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function HomeSection() {
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const boxRef4 = useRef();
  const boxRef5 = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(boxRef1.current, {
      duration: 0.7,
      y: 100,
      opacity: 0,
      stagger: 0,
    });
    tl.from(boxRef2.current, {
      duration: 0.7,
      y: 100,
      opacity: 0,
      stagger: 0,
    });
    tl.from(boxRef3.current, {
      duration: 0.7,
      y: 100,
      opacity: 0,
      stagger: 0,
    });
    tl.from(boxRef4.current, {
      duration: 0.7,
      y: 100,
      opacity: 0,
      stagger: 0,
    });
    gsap.from(boxRef5.current, {
      duration: 2,
      y: 50,
      opacity: 1,
    });
  }, []);
  const { homePage } = useContext(DataContext);
  return (
    <div id="home" className="secction">
      <div className="home-section">
        <div className="left-home">
          <h1 ref={boxRef1}>Hello, I'm</h1>
          <h2 ref={boxRef2}>{homePage.homeName}</h2>
          <h2 ref={boxRef3}>{homePage.devloper}</h2>
          <p ref={boxRef4}>{homePage.description}</p>
          <div className="btns">
            <a target="_blank" href={homePage.cvdown} className="down-cv">Download CV</a>
            <label className="down-cv" htmlFor="cvcheck">
              <span>See My CV</span>
            </label>
            <input type="checkbox" name="cvcheck" id="cvcheck" className="cvcheck" />
            <div className="mycv">
            <label htmlFor="cvcheck"><FontAwesomeIcon icon={faXmark} /></label>
              <img src={homePage.cvimage} alt="" />
            </div>
          </div>
        </div>
        <div ref={boxRef5} className="right-home">
          <div className="img-box">
            <img src={homePage.imageSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
