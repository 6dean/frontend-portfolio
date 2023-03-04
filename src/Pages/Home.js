import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import Count from "../Functions/Count";

const Home = ({ frenchMode }) => {
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--backend-portfolio--6qn7tv96v7tt.code.run/allprojects"
    );

    setData(response.data);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="card_id">
        <div className="text_id">
          <div className="name">Rockdean Ferdjallah</div>
          <div className="job">
            {frenchMode ? (
              <>Développeur JavaScript FullStack</>
            ) : (
              <>FullStack JavaScript Developer</>
            )}
          </div>
          <div className="div_description">
            <div className="description">
              {frenchMode ? (
                <>
                  Je suis un développeur web passionné de technologies,
                  d'univers geek et des jeux vidéos. J'adore apprendre et
                  progresser afin de réussir tous les prochains challenges qui
                  se présenteront à moi.
                </>
              ) : (
                <>
                  I am a web developer passionate about coding, the geek
                  universe and videogames. I am constantly evolving to improve
                  my skills and take on new challenges in web development.
                </>
              )}
            </div>
          </div>
        </div>
        <div className="avatar">
          <img
            src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1674221637/my-content/iconsRF/avatar_k70upw.jpg"
            alt="Dean"
          />
        </div>
      </div>
      {/* <div className="description_job">
        Currently looking for a 6 month internship. Check my{" "}
        <a
          href="https://drive.google.com/file/d/1sL1ZUVweVzWuMV5DSNQSyl7NOZ1J0jog/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="link_more">Resume</span>
        </a>{" "}
        and{" "}
        <Link to="/more">
          <span className="link_more">More</span>
        </Link>{" "}
        !
      </div> */}
      <div className="title">
        {frenchMode ? <>Mes Projets</> : <>Featured Projects</>}
      </div>
      <div className="listing_projects">
        <div className="card_fp">
          <div>
            <a
              href="https://rawg-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                Count("RAWG", "00001");
              }}
            >
              <div className="card_title">RAWG.io</div>
            </a>
            <div className="card_description">
              {frenchMode ? (
                <>
                  Plateforme de JV avec une API contenant plus de 830.000
                  références
                </>
              ) : (
                <>
                  Videogames platform with API holding more than 830.000
                  references
                </>
              )}
            </div>
          </div>
          <div className="img_card">
            <a
              href="https://rawg-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                Count("RAWG", "00001");
              }}
            >
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.14.35_lb68p4.png"
                alt="rawg"
                width="100%"
              />
            </a>
          </div>
          <div className="h_count">
            <FontAwesomeIcon icon={faEye} size="lg" />{" "}
            <p className="count_style">{IsLoading && data[0].visit}</p>
          </div>
        </div>
        <div className="card__fp">
          <div>
            <a
              href="https://vinted-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                Count("Vinted", "00002");
              }}
            >
              <div className="card_title">Vinted</div>
            </a>
            <div className="card_description">
              {frenchMode ? (
                <>
                  Marketplace en ligne pour acheter, vendre et échanger articles
                </>
              ) : (
                <>
                  Online marketplace solution for buying, selling and exchanging
                  items
                </>
              )}
            </div>
          </div>
          <div className="img_card">
            <a
              href="https://vinted-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                Count("Vinted", "00002");
              }}
            >
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.15.04_c565pe.png"
                alt="vinted"
                width="100%"
              />{" "}
            </a>
          </div>
          <div className="h_count">
            <FontAwesomeIcon icon={faEye} size="lg" />{" "}
            <p className="count_style">{IsLoading && data[1].visit}</p>
          </div>
        </div>
        <div className="card___fp">
          <div>
            <a
              href="https://deliveroo-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                Count("Deliveroo", "00003");
              }}
            >
              <div className="card_title">Deliveroo</div>
            </a>
            <div className="card_description">
              {frenchMode ? (
                <>
                  Une petite faim ? Prenez un sandwich de Subway 🥖 livraison au
                  travail
                </>
              ) : (
                <>
                  Are you hungry ? Get a sandwich from Subway 🥖 delivery at
                  work
                </>
              )}
            </div>
          </div>
          <div className="img_card">
            <a
              href="https://deliveroo-rockdean.netlify.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                Count("Deliveroo", "00003");
              }}
            >
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.16.10_lh8fsy.png"
                alt="deliveroo"
                width="100%"
              />
            </a>
          </div>
          <div className="h_count">
            <FontAwesomeIcon icon={faEye} size="lg" />{" "}
            <p className="count_style">{IsLoading && data[2].visit}</p>
          </div>
        </div>
      </div>
      <div className="div_description">
        <div className="f_description">
          <Link
            to="/projects"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {frenchMode ? <>Voir tous mes projets </> : <>Check all projects</>}
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </Link>
        </div>
      </div>
      <div className="title">
        {frenchMode ? <>Mes Capacités</> : <>My Abilities</>}
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              Voici quelques compétences, je peux coder en HTML, CSS, JS et JSX.
              je sais utiliser certains logiciels comme Visual Studio Code,
              MongoDB, Postman, Avidemux, Photoshop et plus encore !
            </>
          ) : (
            <>
              There's some skills, I can code HTML, CSS, JS and JSX. I know how
              to use some softwares like Visual Studio Code, MongoDB Compass,
              Postman, Avidemux, Photoshop and more !
            </>
          )}
        </div>
      </div>
      <div className="a_list">
        <div className="listing_cap">
          <div>ReactJS</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618331/my-content/iconsRF/REACTJS_meqvqz.png"
              alt="react"
              width="40"
            />
          </div>
        </div>
        <div className="listing_cap">
          <div> JavaScript</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618332/my-content/iconsRF/JS_qcbfpa.png"
              alt="JS"
              width="40"
            />
          </div>
        </div>
        <div className="listing_cap">
          <div>MongoDB</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618332/my-content/iconsRF/MONGODB_rm65ke.png"
              alt="mongoDB"
              width="40"
            />
          </div>
        </div>
        <div className="listing_cap">
          <div>NodeJS</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618333/my-content/iconsRF/NODE_xnda20.png"
              alt="Node"
              width="40"
            />
          </div>
        </div>
        <div className="listing_cap">
          <div>Expo</div>
          <div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673618332/my-content/iconsRF/EXPO_a32pti.png"
              alt="postman"
              width="40"
            />
          </div>
        </div>
        <div className="div_description">
          <div className="f_description">
            <Link
              to="/skills"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              {frenchMode ? <>Voir tout </> : <>Get all details </>}
              <FontAwesomeIcon icon={faArrowRight} size="sm" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
