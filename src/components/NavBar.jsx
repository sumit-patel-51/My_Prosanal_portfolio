import { useContext, useState } from "react";
import { DataContext } from "../datas/DataContaxt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { data, links } = useContext(DataContext);
  return (
    <>
      <header>
        <nav>
          <div className="left-nav">
            <FontAwesomeIcon className="i" icon={faS} />
            <h1>{data.titleName}</h1>
          </div>
            <input type="checkbox" className="check" name="" id="check" />
          <div className="manu-btn">
            <label htmlFor="check" className="btn-manu">
              <FontAwesomeIcon className="manu" icon={faBarsStaggered} />
            </label>
          </div>
          <label htmlFor="check" className="hidden"></label>
          <div className="right-nav">
            {Object.entries(links).map(([key, value]) => {
              if (key == "contact") {
                return (
                  <a href={`#${key}`} key={key} className="active">
                    {value}
                  </a>
                );
              } else {
                return (
                  <a href={`#${key}`} key={key}>
                    {value}
                  </a>
                );
              }
            })}
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
