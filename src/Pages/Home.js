import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  return (
    <>
      <div className="card_id">
        <div>
          <div className="name">Rockdean Ferdjallah</div>
          <div className="job">JavaScript Developer</div>
          <div className="description">
            I love create apps, improve my skills and listening chill music
          </div>
        </div>
        <div>photo</div>
      </div>
      <div className="title">Featured Projects</div>
      <div className="listing_projects">
        <div className="card_fp">
          RAWG <FontAwesomeIcon icon={faEye} size="sm" />
        </div>
        <div className="card__fp">VINTED</div>
        <div className="card___fp">DELIVEROO</div>
      </div>
      <Link to="/projects">
        <div className="description">
          Check all projects <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </div>
      </Link>
      <div className="title">About Myself</div>
      <div className="description">
        I have few skills, I can code HTML, CSS, JS and JSX. I know how to use
        some softwares like Visual Studio Code, MongoDB Compass, Postman,
        Avidemux, Photoshop and more !
      </div>
      <Link to="/more">
        <div className="description">
          Get all details <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </div>
      </Link>
    </>
  );
};

export default Home;
