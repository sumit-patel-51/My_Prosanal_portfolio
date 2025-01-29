import React, { useContext, useRef } from "react";
import { DataContext } from "../datas/DataContaxt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SkillsSection() {
  const { skillSection } = useContext(DataContext);

  const skillani = useRef()
  const skillani2 = useRef([])

  useGSAP(()=> {
    gsap.from(skillani.current, {
      scrollTrigger: {
        trigger:skillani.current,
        start:"top 85%",
        end: "top 85%",
        scrub: 4
      },
      duration:2,
      opacity:0,
      y:100,
      stagger:0
    })
    gsap.from(skillani2.current, {
      scrollTrigger: {
        trigger:skillani2.current,
        start:"top 85%",
        end: "top 85%",
        scrub: 5
      },
      duration:2,
      opacity:0,
      y:100,
      stagger:0.7
    })
  },[])

  return (
    <div id="skills" className="secction">
      <div className="skill-section">
        <div className="first-skill box">
          <h1 ref={skillani}>Skills</h1>
        </div>
        <div className="second-skill box">
          {skillSection.map((elm, key) => (
            <div key={key} ref={(e)=> skillani2.current[key] = e} className="skill-box">
              <p><span className="w-90" style={{ width: `${elm.firstWidth}` }}>
                {elm.skillName}</span><p>{elm.progressWidth}</p></p>
              <h1>
                <p className="pogress90" style={{ width: `${elm.progressWidth}` }}></p>
              </h1>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
