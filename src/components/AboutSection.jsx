import React, { useContext, useState } from 'react'
import { DataContext } from '../datas/DataContaxt'

function AboutSection() {

  const {aboutSection} = useContext(DataContext)

  return (
    <div id='about' className='secction'>
      <div className="about-section">
        <div className="first-about box">
          <h1>About Me</h1>
          <h2>{aboutSection.aboutTitle}</h2>
        </div>
        <div className="second-about box">
          <div className="img-box">
            <img src={aboutSection.imageSrc} alt="" srcset="" />
          </div>
        </div>
        <div className="third-about box">
          <h3>{aboutSection.semiTitle}</h3>
          <p>{aboutSection.description1}</p>
          <p>{aboutSection.decsription2}</p>
          <p>{aboutSection.decsription3}</p>
          <p>{aboutSection.decsription4}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
