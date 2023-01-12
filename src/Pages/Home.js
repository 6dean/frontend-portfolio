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
          <div>
            <div className="card_title">RAWG.io</div>
            <div className="card_description">
              Website videogames with API getting more than 830.000 references
            </div>
            <div>IMG</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </div>
        </div>
        <div className="card__fp">
          <div>
            <div className="card_title">Vinted</div>
            <div className="card_description">Marketplace for customers</div>
            <div>IMG</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </div>
        </div>
        <div className="card___fp">
          <div>
            <div className="card_title">Deliveroo</div>
            <div className="card_description">
              Get a sandwich from Subway 🥖
            </div>
            <div>IMG</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </div>
        </div>
      </div>
      <div className="description">
        <Link to="/projects">
          Check all projects <FontAwesomeIcon icon={faArrowRight} size="sm" />{" "}
        </Link>
      </div>
      <div className="title">Abilities</div>
      <div className="description">
        I have few skills, I can code HTML, CSS, JS and JSX. I know how to use
        some softwares like Visual Studio Code, MongoDB Compass, Postman,
        Avidemux, Photoshop and more !
      </div>
      <div className="a_list">
        <div className="listing_cap">
          <div>Visual Studio Code</div>
          <div>LOGO</div>
        </div>
        <div className="listing_cap">
          <div> JavaScript Syntax Extension - JSX from React</div>
          <div>LOGO</div>
        </div>
        <div className="listing_cap">
          <div>MongoDB Compass</div>
          <div>LOGO</div>
        </div>
        <div className="listing_cap">
          <div>Photoshop</div>
          <div>LOGO</div>
        </div>
        <div className="description">
          <Link to="/more">
            Get all details <FontAwesomeIcon icon={faArrowRight} size="sm" />{" "}
          </Link>
        </div>
      </div>

      <div className="title">Spotify</div>
    </>
  );
};

export default Home;
