import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import Count from "../Functions/Count";

const Projects = ({ frenchMode }) => {
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--backend-portfolio--6qn7tv96v7tt.code.run/allprojects"
      );
      setData(response.data);
      setIsLoading(true);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="name_page">
        {frenchMode ? <>Projets</> : <>Projects</>}
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              J'ai plusieurs projets avec différentes fonctionnalités, toujours
              partant pour créer de nouvelles apps.
            </>
          ) : (
            <>
              I built several projects with different features for each, I'm
              always up to create Apps.
            </>
          )}
        </div>
      </div>
      <div className="title-bis">
        {frenchMode ? <>Projets Étudiant</> : <>Student Projects</>}
      </div>
      <div className="listing_p_card">
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("RAWG", "00001");
              }}
            >
              <a
                href="https://rawg-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                RAWG.io{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">
              {IsLoading && data[0].visit} {frenchMode ? <>vues</> : <>views</>}
            </div>
          </div>
          <div className="p_project">
            <div className="p_description">
              {frenchMode ? (
                <>API de jeux vidéos contenant plus de 830.000 références</>
              ) : (
                <>Videogames API holding more than 830.000 references</>
              )}{" "}
              <div className="p_features">
                {frenchMode ? (
                  <>
                    Fonctionnalités : Design réactif, Recherche, Défilement
                    infini...
                  </>
                ) : (
                  <>
                    Features : Responsive, Search, InfiniteScroll, Members
                    features...
                  </>
                )}
              </div>
              <div className="p_stack">
                Stack : NodeJS, ReactJS, MongoDB, GitHub, Netlify, NorthFlank
              </div>
            </div>
            <div
              className="img_project"
              onClick={() => {
                Count("RAWG", "00001");
              }}
            >
              <a
                href="https://rawg-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.14.35_lb68p4.png"
                  alt="rawg"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Vinted", "00002");
              }}
            >
              <a
                href="https://vinted-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Vinted{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">
              {IsLoading && data[1].visit} {frenchMode ? <>vues</> : <>views</>}
            </div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                {frenchMode ? (
                  <>
                    Marketplace en ligne pour acheter, vendre et échanger
                    articles
                  </>
                ) : (
                  <>
                    Marketplace for buying, selling & exchanging new or
                    secondhand items
                  </>
                )}
              </div>
              <div className="p_features">
                {frenchMode ? (
                  <>
                    Fonctionnalités : Parcourir, Créer une offre,
                    Acheter-Vendre, inscription...
                  </>
                ) : (
                  <>Features : Browsing, Offer creation, Buy, Login...</>
                )}
              </div>
              <div className="p_stack">
                Stack : NodeJS, ReactJS, MongoDB, Stripe, Forest Admin
              </div>
            </div>
            <div
              className="img_project"
              onClick={() => {
                Count("Vinted", "00002");
              }}
            >
              <a
                href="https://vinted-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.15.04_c565pe.png"
                  alt="vinted"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Deliveroo", "00003");
              }}
            >
              <a
                href="https://deliveroo-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Deliveroo{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">
              {IsLoading && data[2].visit} {frenchMode ? <>vues</> : <>views</>}
            </div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                {frenchMode ? (
                  <>Réplique d'une page Deliveroo - Subway Paris</>
                ) : (
                  <>Webpage replica from Deliveroo - Subway Paris</>
                )}
              </div>
              <div className="p_features">
                {frenchMode ? (
                  <>
                    Fonctionnalités : Panier, mise à jour prix et nombre
                    d'articles...
                  </>
                ) : (
                  <>
                    {" "}
                    Features : Add items, remove items from basket, price
                    update...
                  </>
                )}
              </div>
              <div className="p_stack">Stack : NodeJS, ReactJS, Render</div>
            </div>
            <div
              className="img_project"
              onClick={() => {
                Count("Deliveroo", "00003");
              }}
            >
              <a
                href="https://deliveroo-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.16.10_lh8fsy.png"
                  alt="deliveroo"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Marvel", "00004");
              }}
            >
              <a
                href="https://marvel-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Marvel{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">
              {IsLoading && data[3].visit} {frenchMode ? <>vues</> : <>views</>}
            </div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                {frenchMode ? (
                  <>Test technique sur le thème Marvel</>
                ) : (
                  <>Coding test interview on Marvel theme from a Tech Company</>
                )}
              </div>
              <div className="p_features">
                {frenchMode ? (
                  <>Fonctionnalités : Recherche, parcourir et favoris</>
                ) : (
                  <>Features : Searching, Favorites</>
                )}
              </div>
              <div className="p_stack">
                Stack : NodeJS, ReactJS, Netlify, NorthFlank
              </div>
            </div>
            <div
              className="img_project"
              onClick={() => {
                Count("Marvel", "00004");
              }}
            >
              <a
                href="https://marvel-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.16.48_lah9hv.png"
                  alt="marvel"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Tripadvisor", "00005");
              }}
            >
              <a
                href="https://tripadvisor-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                TripAdvisor{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">
              {IsLoading && data[4].visit} {frenchMode ? <>vues</> : <>views</>}
            </div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                {frenchMode ? (
                  <>Front-End de la page de Kochi, Japon 🇯🇵</>
                ) : (
                  <>Front-End replica of Kochi, Japan 🇯🇵</>
                )}
              </div>
              <div className="p_features">
                {frenchMode ? (
                  <>Fonctionnalités : Design réactif, carrousel d'images</>
                ) : (
                  <>Features : Responsive, Carousel</>
                )}
              </div>
              <div className="p_stack">Stack : HTML, CSS, Netlify</div>
            </div>
            <div
              className="img_project"
              onClick={() => {
                Count("Tripadvisor", "00005");
              }}
            >
              <a
                href="https://tripadvisor-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.17.13_bez0xd.png"
                  alt="tripadvisor"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("AirBnB", "00006");
              }}
            >
              <a
                href="https://tinyurl.com/airbnbEXPO"
                target="_blank"
                rel="noreferrer"
              >
                AirBnB Mobile{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">
              {IsLoading && data[5].visit} {frenchMode ? <>vues</> : <>views</>}
            </div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                {frenchMode ? (
                  <>
                    Version allégée du fameux service de location d'hébergements
                  </>
                ) : (
                  <>
                    Light App replica of the famous online service for lodging
                  </>
                )}
              </div>
              <div className="p_features">
                {frenchMode ? (
                  <>
                    Fonctionnalités : S'inscrire, parcourir, editer,
                    géolocalisation...
                  </>
                ) : (
                  <>
                    Features : Sign in, Sign up, Browsing, Editing profile,
                    Geolocation...
                  </>
                )}
              </div>
              <div className="p_stack">
                Stack : React Native, Expo, Xcode, Android Studio
              </div>
            </div>
            <div
              className="img_project"
              onClick={() => {
                Count("AirBnb", "00006");
              }}
            >
              <a
                href="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673544644/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.29.59_niqixe.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673544644/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.29.59_niqixe.png"
                  alt="airbnb"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="title-bis">
          {frenchMode ? <>Divers</> : <>Others</>}
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("THE DOGS", "00008");
              }}
            >
              <a
                href="https://xoxno.com/collection/THEDOGS-e42b11"
                target="_blank"
                rel="noreferrer"
              >
                THE DOGS{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">
              {IsLoading && data[7].visit} {frenchMode ? <>vues</> : <>views</>}
            </div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                {frenchMode ? (
                  <>Collection NFTs - Projet blockchain disponible sur Xoxno</>
                ) : (
                  <>
                    NFTs Collection - Project on Blockchain available on Xoxno
                    market
                  </>
                )}
              </div>
              <div className="p_features">
                {frenchMode ? (
                  <>Fonctionnalité : 10.000 NFTs unique</>
                ) : (
                  <>Feature : 10.000 NFTs unique</>
                )}
              </div>
              <div className="p_stack">Stack : Bash, VSC, Rust</div>
            </div>
            <div
              className="img_project"
              onClick={() => {
                Count("THEDOGS", "00008");
              }}
            >
              <a
                href="https://xoxno.com/collection/THEDOGS-e42b11"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1674206969/my-content/iconsRF/Capture_d_e%CC%81cran_2023-01-20_a%CC%80_10.28.49_j1dgch.png"
                  alt="THEDOGS"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
