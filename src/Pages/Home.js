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
          <div className="div_description">
            <div className="description">
              I love create apps, improve my skills and listening chill music
            </div>
          </div>
        </div>
        <div>photo</div>
      </div>
      <div className="title">Featured Projects</div>
      <div className="listing_projects">
        <div className="card_fp">
          <div>
            <a
              href="https://rawg-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card_title">RAWG.io</div>
            </a>
            <div className="card_description">
              Website videogames with API getting more than 830.000 references
            </div>
            <div>
              <a
                href="https://rawg-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.14.35_lb68p4.png"
                  alt="rawg"
                  width="150"
                />
              </a>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </div>
        </div>
        <div className="card__fp">
          <div>
            <a
              href="https://vinted-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card_title">Vinted</div>
            </a>
            <div className="card_description">Marketplace for customers</div>
            <div>
              <a
                href="https://vinted-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.15.04_c565pe.png"
                  alt="vinted"
                  width="150"
                />{" "}
              </a>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </div>
        </div>
        <div className="card___fp">
          <div>
            <a
              href="https://deliveroo-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card_title">Deliveroo</div>
            </a>
            <div className="card_description">
              Get a sandwich from Subway 🥖
            </div>
            <div>
              <a
                href="https://deliveroo-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.16.10_lh8fsy.png"
                  alt="deliveroo"
                  width="150"
                />
              </a>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} size="lg" />
          </div>
        </div>
      </div>
      <div className="div_description">
        <div className="description">
          <Link
            to="/projects"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Check all projects <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </Link>
        </div>
      </div>
      <div className="title">Abilities</div>
      <div className="div_description">
        <div className="description">
          I have few skills, I can code HTML, CSS, JS and JSX. I know how to use
          some softwares like Visual Studio Code, MongoDB Compass, Postman,
          Avidemux, Photoshop and more !
        </div>
      </div>
      <div className="a_list">
        <div className="listing_cap">
          <div>Visual Studio Code</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618331/my-content/iconsRF/VSC_peiuxk.png"
              alt="vsc"
              width="40"
            />
          </div>
        </div>
        <div className="listing_cap">
          <div> JavaScript Syntax Extension - JSX from React</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618332/my-content/iconsRF/JS_qcbfpa.png"
              alt="JS"
              width="40"
            />
          </div>
        </div>
        <div className="listing_cap">
          <div>MongoDB Compass</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618332/my-content/iconsRF/MONGODB_rm65ke.png"
              alt="mongoDB"
              width="40"
            />
          </div>
        </div>
        <div className="listing_cap">
          <div>Photoshop</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618331/my-content/iconsRF/PS_anhaul.png"
              alt="PS"
              width="40"
            />
          </div>
        </div>
        <div className="div_description">
          <div className="description">
            <Link
              to="/skills"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Get all details <FontAwesomeIcon icon={faArrowRight} size="sm" />{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="title">Spotify</div>
    </>
  );
};

export default Home;
