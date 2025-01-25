import React, { useContext } from "react";
import { DataContext } from "../datas/DataContaxt";

function SkillsSection() {
  const { skillSection } = useContext(DataContext);
  return (
    <div id="skills" className="secction">
      <div className="skill-section">
        <div className="first-skill box">
          <h1>Skills</h1>
        </div>
        <div className="second-skill box">
          {skillSection.map((elm, key) => (
            <div key={key} className="skill-box">
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
