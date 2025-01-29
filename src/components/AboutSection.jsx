import React, { useContext, useRef, useState } from 'react'
import { DataContext } from '../datas/DataContaxt'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const {aboutSection} = useContext(DataContext)
  const boxRef = useRef()
  const boxRef1 = useRef()
  const boxRef2 = useRef()
  const boxRef3 = useRef()
  const boxRef4 = useRef()
  const boxRef5 = useRef()
  const boxRef6 = useRef()
  const boxRef7 = useRef()
  const imageRem = useRef()
  
  useGSAP(() => {
    const tl1 = gsap.timeline();
    const tl = gsap.timeline();
    gsap.from(imageRem.current, {
      scrollTrigger: {
        trigger: imageRem.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 4, 
      },
      x:-200,
      opacity:0,
      duration:4,
      stagger:0
    })
    tl1.from(boxRef1.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 2, 
      },
      y:100,
      opacity:0,
      duration:2,
      stagger:0
    })   
    tl1.from(boxRef2.current, {
      scrollTrigger: {
        trigger: boxRef2.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 2, 
      },
      y:100,
      opacity:0,
      duration:2,
      stagger:0
    })    
    tl.from(boxRef3.current, {
      scrollTrigger: {
        trigger: boxRef3.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 4, 
      },
      y:200,
      opacity:0,
      duration:2,
      stagger:0
    })    
    tl.from(boxRef4.current, {
      scrollTrigger: {
        trigger: boxRef4.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 4, 
      },
      y:200,
      opacity:0,
      duration:4,
      stagger:0
    })    
    tl.from(boxRef5.current, {
      scrollTrigger: {
        trigger: boxRef5.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 4, 
      },
      y:200,
      opacity:0,
      duration:4,
      stagger:0
    })    
    tl.from(boxRef6.current, {
      scrollTrigger: {
        trigger: boxRef6.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 4, 
      },
      y:200,
      opacity:0,
      duration:4,
      stagger:0
    })    
    tl.from(boxRef7.current, {
      scrollTrigger: {
        trigger: boxRef7.current,
        start:"top 90%",
        end:"top 90%",
        scrub: 4, 
      },
      y:200,
      opacity:0,
      duration:4,
      stagger:0
    })    
    
}, [])
  return (
    <div id='about' ref={boxRef} className='secction'>
      <div className="about-section">
        <div className="first-about box">
          <h1 ref={boxRef1}>About Me</h1>
          <h2 ref={boxRef2}>{aboutSection.aboutTitle}</h2>
        </div>
        <div className="second-about box">
          <div ref={imageRem} className="img-box">
            <img src={aboutSection.imageSrc} alt="" srcset="" />
          </div>
        </div>
        <div className="third-about box">
          <h3 ref={boxRef3}>{aboutSection.semiTitle}</h3>
          <p ref={boxRef4}>{aboutSection.description1}</p>
          <p ref={boxRef5}>{aboutSection.decsription2}</p>
          <p ref={boxRef6}>{aboutSection.decsription3}</p>
          <p ref={boxRef7}>{aboutSection.decsription4}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
