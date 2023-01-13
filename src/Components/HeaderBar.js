import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const HeaderBar = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <div className="h_list">
        <Link to="/">
          <div className="h_elem">Home</div>
        </Link>
        <Link to="/projects">
          <div className="h_elem">Projects</div>
        </Link>
        <Link to="/skills">
          <div className="h_elem">Skills</div>
        </Link>
        <Link to="/guestbook">
          <div className="h_elem">Guestbook</div>
        </Link>
        <Link to="/more">
          <div className="h_elem">More</div>
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
  );
};

export default HeaderBar;
