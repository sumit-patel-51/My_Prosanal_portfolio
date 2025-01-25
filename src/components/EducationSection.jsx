import React, { useContext } from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from '../datas/DataContaxt';


function EducationSection() {
  const {educationSection} = useContext(DataContext)
  return (
    <div id='education' className='secction'>
      <div className="education-section ">
        <div className="first-education boxs">
          <h1>My Education and Qualification</h1>
        </div>
        <div className="second-education boxs">
            {
              educationSection.map((elm, key) => (
                <div key={key}  className="first-box">
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
