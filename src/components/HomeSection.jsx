import { useContext, useState } from "react";
import { DataContext } from "../datas/DataContaxt";

import React from "react";

function HomeSection() {

  const {homePage} = useContext(DataContext)

  return (
    <div id="home" className="secction">
      <div className="home-section">
        <div className="left-home">
          <h1>Hello, I'm</h1>
          <h2>{homePage.homeName}</h2>
          <p>{homePage.description}</p>
          <button>Download CV</button>
        </div>
        <div className="right-home">
          <div className="img-box">
            <img src={homePage.imageSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
