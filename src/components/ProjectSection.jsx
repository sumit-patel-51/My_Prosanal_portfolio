import React, { useContext, useRef } from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { DataContext } from "../datas/DataContaxt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectSection() {
  const {projectSection} = useContext(DataContext);
    const projectani = useRef()
    const projectani2 = useRef([])
    
  useGSAP(()=> {
    gsap.from(projectani.current, {
      scrollTrigger: {
        trigger:projectani.current,
        start:"top 80%",
        end: "top 80%",
        scrub: 10
      },
      duration:2,
      opacity:0,
      y:100,
      stagger:0
    })
    gsap.from(projectani2.current, {
      scrollTrigger: {
        trigger:projectani2.current,
        start:"top 85%",
        end: "top 85%",
        scrub: 5,
      },
      duration:2,
      opacity:0,
      y:200,
      stagger:0.5
    })
  },[])
  return (
    <div id="projects">
      <div className="project-section">
        <div className="first-project">
          <h1 ref={projectani}>Projects</h1>
        </div>
        <div className="second-project">
          {
            projectSection.map((elm, key)=>(
          <div key={key} ref={(e)=> projectani2.current[key] = e} className="card-project">
            <span>{elm.type}</span>
            <div className="image-card">
              <img src={elm.imageSrc} alt="None" />
            </div>
            <h3>{elm.projectName}</h3>
            <p>
              <a href={elm.visitLink} target="_blank">
                Visit <FaLink />
              </a>
              <a href={elm.gitLink} target="_blank">
                Code
                <FaGithub />
              </a>
            </p>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
