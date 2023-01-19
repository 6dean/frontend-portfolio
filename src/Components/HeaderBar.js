import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

const HeaderBar = ({ darkMode, setDarkMode }) => {
  const [pageArea, SetPageArea] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      SetPageArea("/");
    } else if (location.pathname === "/projects") {
      SetPageArea("/projects");
    } else if (location.pathname === "/skills") {
      SetPageArea("/skills");
    } else if (location.pathname === "/guestbook") {
      SetPageArea("/guestbook");
    } else if (location.pathname === "/more") {
      SetPageArea("/more");
    } else {
      SetPageArea();
    }
  }, [location.pathname]);

  return (
    <div className="headerBar">
      <header>
        <div className="h_list">
          <Link to="/">
            <div className={pageArea === "/" ? "h_elem_loc" : "h_elem"}>
              Home
            </div>
          </Link>
          <Link to="/projects">
            <div className={pageArea === "/projects" ? "h_elem_loc" : "h_elem"}>
              Projects
            </div>
          </Link>
          <Link to="/skills">
            <div className={pageArea === "/skills" ? "h_elem_loc" : "h_elem"}>
              Skills
            </div>
          </Link>
          <Link to="/guestbook">
            <div
              className={pageArea === "/guestbook" ? "h_elem_loc" : "h_elem"}
            >
              Guestbook
            </div>
          </Link>
          <Link to="/more">
            <div className={pageArea === "/more" ? "h_elem_loc" : "h_elem"}>
              More
            </div>
          </Link>
        </div>
        <div
          className={darkMode ? "h_mode_light" : "h_mode"}
          onClick={() => {
            darkMode ? setDarkMode(false) : setDarkMode(true);
          }}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="lg" />
          )}
        </div>
      </header>
    </div>
  );
};

export default HeaderBar;
