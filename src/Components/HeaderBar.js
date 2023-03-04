import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

const HeaderBar = ({ darkMode, setDarkMode, setFrenchMode, frenchMode }) => {
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
              {frenchMode ? <>Accueil</> : <>Home</>}
            </div>
          </Link>
          <Link to="/projects">
            <div className={pageArea === "/projects" ? "h_elem_loc" : "h_elem"}>
              {frenchMode ? <>Projets</> : <>Projects</>}
            </div>
          </Link>
          <Link to="/skills">
            <div className={pageArea === "/skills" ? "h_elem_loc" : "h_elem"}>
              {frenchMode ? <>Capacités</> : <>Skills</>}
            </div>
          </Link>
          <Link to="/guestbook">
            <div
              className={pageArea === "/guestbook" ? "h_elem_loc" : "h_elem"}
            >
              {frenchMode ? <>Livre d'or</> : <>Guestbook</>}
            </div>
          </Link>
          <Link to="/more">
            <div className={pageArea === "/more" ? "h_elem_loc" : "h_elem"}>
              {frenchMode ? <>Plus</> : <>More</>}
            </div>
          </Link>
        </div>
        <div className="right-elem">
          <div
            onClick={() => {
              frenchMode ? setFrenchMode(false) : setFrenchMode(true);
            }}
          >
            {frenchMode ? (
              <div className="lang">FR</div>
            ) : (
              <div className="lang">EN</div>
            )}
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
        </div>
      </header>
    </div>
  );
};

export default HeaderBar;
