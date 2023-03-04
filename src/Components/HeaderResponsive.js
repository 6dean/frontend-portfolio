import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const HeaderResponsive = ({
  darkMode,
  setDarkMode,
  displayMenu,
  setDisplayMenu,
  setFrenchMode,
  frenchMode,
}) => {
  const navigate = useNavigate();

  return (
    <div className="HeaderResponsive">
      <header>
        {!displayMenu ? (
          <Link to="/navigation">
            <div
              className="faBars"
              onClick={() => {
                setDisplayMenu(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </Link>
        ) : (
          <div
            className="faBars"
            onClick={() => {
              setDisplayMenu(false);
              navigate(-1);
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </div>
        )}
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
export default HeaderResponsive;
