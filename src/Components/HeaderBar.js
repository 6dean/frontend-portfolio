import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const HeaderBar = () => {
  return (
    <header>
      <div className="h_list">
        <Link to="/">
          <div className="h_elem">Home</div>
        </Link>
        <Link to="/projects">
          <div className="h_elem">Projects</div>
        </Link>
        <Link to="/guestbook">
          <div className="h_elem">Guestbook</div>
        </Link>
        <Link to="/stats">
          <div className="h_elem">Stats</div>
        </Link>
        <Link to="/more">
          <div className="h_elem">More</div>
        </Link>
      </div>
      <div className="h_mode">
        <FontAwesomeIcon icon={faMoon} size="lg" />
      </div>
    </header>
  );
};

export default HeaderBar;
