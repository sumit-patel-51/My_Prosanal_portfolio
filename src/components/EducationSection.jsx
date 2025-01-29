import React, { useContext, useRef } from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from '../datas/DataContaxt';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function EducationSection() {
  const {educationSection} = useContext(DataContext)

  const educationani = useRef()
  const arrRef = useRef([])
  useGSAP(()=> {
    gsap.from(educationani.current, {
      scrollTrigger: {
        trigger: educationani.current,
        start:"top 80%",
        end:"top 80%",
        scrub: 4, 
      },
      y:100,
      opacity:0,
      duration:2,
      stagger:0
    })
    gsap.from(arrRef.current, {
      scrollTrigger: {
        trigger:arrRef.current,
        start: "top 80%",
        end: "top 80%",
        scrub:5
      },
      duration:2,
      y:100,
      opacity:0,
      stagger:0.2
    })
  }, [])

  return (
    <div id='education' className='secction'>
      <div className="education-section ">
        <div className="first-education boxs">
          <h1 ref={educationani}>My Education and Qualification</h1>
        </div>
        <div className="second-education boxs">
            {
              educationSection.map((elm, key) => (
                <div key={key} ref={(e)=>arrRef.current[key] = e}  className="first-box">
                  <h3>{elm.degree}</h3>
                  <p>{elm.univarsity}</p>
                  <p>Graduation Year: <FontAwesomeIcon icon={faCalendarDays}/> {elm.year}</p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default EducationSection
