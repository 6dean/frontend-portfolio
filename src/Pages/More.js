import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SpotifyAuth from "../Functions/SpotifyAuth";
import YouTubeAuth from "../Functions/YoutubeAuth";
import axios from "axios";

const More = ({ frenchMode }) => {
  const [dataSpotify, setDataSpotify] = useState({});
  const [dataYoutube, setDataYoutube] = useState({});
  const [tokenSpotify, setTokenSpotify] = useState("");
  const [tokenYoutube, setTokenYoutube] = useState("");

  useEffect(() => {
    if (tokenSpotify) {
      const fetchDataSpotify = async () => {
        const responseSpotify = await axios.post(
          "https://site--backend-portfolio--6qn7tv96v7tt.code.run/spotify",
          {
            tokenSpotify: tokenSpotify,
          }
        );
        setDataSpotify(responseSpotify.data.tracks.items);
      };
      setTimeout(() => {
        fetchDataSpotify();
      }, 800);
    }
    if (tokenYoutube) {
      const fetchDataYoutube = async () => {
        const responseYoutube = await axios.post(
          "https://site--backend-portfolio--6qn7tv96v7tt.code.run/youtube",
          {
            tokenYoutube: tokenYoutube,
          }
        );
        setDataYoutube(responseYoutube.data);
      };
      setTimeout(() => {
        fetchDataYoutube();
      }, 800);
    }
  }, [tokenSpotify, tokenYoutube]);

  useEffect(() => {
    SpotifyAuth(setTokenSpotify);
    YouTubeAuth(setTokenYoutube);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="name_page">
        {frenchMode ? <>À propos de moi</> : <>About Me</>}
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>C'est le moment de me dévoiler ! </>
          ) : (
            <>It's time to show you everything about me !</>
          )}
        </div>
        <p className="icon">🙃</p>
      </div>
      <div>
        <div className="title">{frenchMode ? <>Liens</> : <>Links</>}</div>
        <div className="listing_contact">
          <li className="list_li">
            <a
              className="link_more"
              href="https://github.com/6dean"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="list_li">
            <a
              className="link_more"
              href="https://www.linkedin.com/in/rockdean-ferdjallah-4b3a45247/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="list_li">
            <a
              className="link_more"
              href="https://www.instagram.com/r0ckdean/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="list_li">
            <a
              className="link_more"
              href="https://drive.google.com/file/d/1XYJ4NaoefUdL3SyK_jYgruu36IcZg42t/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              {frenchMode ? <>CV</> : <>Resume</>}
            </a>
          </li>
          <li className="list_li">
            <a
              className="link_more"
              href="mailto:ferdjallahrockdean@gmail.com?Subject=Hello%20Rockdean%20from%20RF%20Portfolio!"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>{" "}
            (ferdjallahrockdean@gmail.com)
          </li>
        </div>
      </div>
      <div className="title">Bio</div>
      <div className="sub_title">Introduction</div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              Je m'appelle Rockdean Ferdjallah, mais tous mes amis m'appellent «
              Dean » je suis né le 5 octobre 1989 à Bondy, France. Je suis un
              geek depuis l'âge de 4 ans, je jouais sur ma SNES et le Macintosh
              de mon père. je vis maintenant à Paris. J'aime créer des
              applications, écouter de la musique, jouer à des jeux vidéo et
              vérifier mon portefeuille crypto.
              <br />
              Si je devais me résumer en trois mots : <span>
                impliqué
              </span>, <span>curieux</span> avec{" "}
              <span>un sens de l'humour</span> .
            </>
          ) : (
            <>
              My name is Rockdean Ferdjallah, but all my friends call me « Dean
              » I was born october 5th 1989 in Bondy, France. I am a geek since
              I was 4, i used to play on my SNES and my father's Macintosh. I
              live now in Paris. I love build apps, listen music, play
              videogames and checking my crypto wallet.
              <br /> If I had to recap myself in three words : <span>keen</span>
              , <span>interested</span> and <span>full of good humour</span> .
            </>
          )}
        </div>
      </div>
      <div className="sub_title">
        {frenchMode ? <>Avant de Coder</> : <>Before Coding</>}
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              J'ai quitté les bancs de l'école à 18 ans et je suis entré dans le
              monde professionnel à travers plusieurs petits boulots. Puis j'ai
              trouvé de la stabilité à la RATP, un établissement public de
              transport. En parallèle, je suivais l'univers tech et toute son
              actualité avec le désir d'y travailler. En 2022, j'ai décidé de
              commencer un changement de carrière et vivre mon rêve.
            </>
          ) : (
            <>
              I left school at 18 and got into the professional world through
              several odd jobs. Then I found stability at the RATP, a public
              transport company. At the same time, I was following the tech
              universe and all its news with the idea to work in it. In 2022, I
              decided to start a career change and live my dream.
            </>
          )}
        </div>
      </div>
      <div className="sub_title">
        {frenchMode ? <>Éducation</> : <>Education</>}
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              J'ai d'abord appris en autodidacte, mon premier site web personnel
              était en 2007 avec Joomla, puis j'ai décidé de rejoindre à un
              Coding Bootcamp. Il s'agit d'une formation accélérée pour
              apprendre le code mais surtout pour comprendre quel est l'état
              d'esprit d'un développeur : l'autonomie.
              <br />
              J'ai appris quelques techno comme ReactJS, NodeJS et bien d'autres
              à{" "}
              <span className="link_more">
                <a
                  href="https://www.lereacteur.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Le Reacteur
                </a>
              </span>{" "}
              à Paris avec{" "}
              <span className="link_more">
                <a
                  href="https://github.com/XavierColombel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xavier Colombel
                </a>
              </span>{" "}
              et{" "}
              <span className="link_more">
                <a
                  href="https://github.com/FaridSafi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Farid Safi
                </a>
              </span>
            </>
          ) : (
            <>
              I first learned on my own as an autodidact, my first personal
              website was in 2007 with Joomla then I decided to go to a Coding
              Bootcamp. It is an accelerated training to learn code but most of
              all to understand what state of mind of a developer is: autonomy.
              <br />I learned few technologies like ReactJS, NodeJS and more at{" "}
              <span className="link_more">
                <a
                  href="https://www.lereacteur.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Le Reacteur
                </a>
              </span>{" "}
              in Paris with{" "}
              <span className="link_more">
                <a
                  href="https://github.com/XavierColombel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xavier Colombel
                </a>
              </span>{" "}
              and{" "}
              <span className="link_more">
                <a
                  href="https://github.com/FaridSafi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Farid Safi
                </a>
              </span>
              .
            </>
          )}
        </div>
      </div>
      <div className="title">Photos</div>
      <div className="container">
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1674221637/my-content/iconsRF/FaceRevealColor_ia5x7n.jpg"
          alt=""
          width="100"
        />
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1674221637/my-content/iconsRF/FaceRevealBlackandWhite_kwtsvy.jpg"
          alt=""
          width="100"
        />
      </div>
      <div className="div_description">
        <div className="f_description">
          <Link
            to="/setup"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {frenchMode ? <>Voir ma config </> : <>Check my Setup </>}
            <FontAwesomeIcon icon={faArrowRight} size="sm" />{" "}
          </Link>
        </div>
      </div>
      <div className="title">
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1678127409/my-content/iconsRF/YTB_nexesj_fuih3r.png"
          alt="youtube"
          width="20"
        />{" "}
        Youtube
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              Il est super important de rester connecté au milieu du
              développement et des autres développeurs. Je partage donc avec
              vous quelques devs au top présent sur Youtube que je visionne pour
              continuer de progresser ou revoir des sujets.{" "}
            </>
          ) : (
            <>
              It's super important to stay connected to the development
              community and other developers. I share with you some top devs
              present on Youtube that I'm watching to continue to progress or
              review some topics.
            </>
          )}
        </div>
      </div>
      <div className="listing-card-ytb">
        {Array.isArray(dataYoutube) ? (
          dataYoutube.map((e, i) => {
            return (
              <div className="card-ytb" key={i}>
                <a
                  href={`https://www.youtube.com/channel/${e.snippet.resourceId.channelId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="elem-card-ytb">
                    <img
                      className="avatar-ytb"
                      src={e.snippet.thumbnails.default.url}
                      alt="avatar-ytb"
                    />
                  </div>
                  <p className="title-ytb">{e.snippet.title}</p>{" "}
                </a>
              </div>
            );
          })
        ) : (
          <div className="container-loader">
            <span className="loader"></span>
            <span>Loading</span>
          </div>
        )}
      </div>
      <div className="title">
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1674156658/my-content/iconsRF/SPOTIFY_nexesj.png"
          alt="spotify"
          width="20"
        />{" "}
        Spotify
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              J'écoute beaucoup de musique, alors je vais partager avec vous
              quelques musiques avec lesquelles j'aime coder ! C'est issu de mon
              compte Spotify, mis à jour fréquemment et automatiquement.{" "}
            </>
          ) : (
            <>
              I listen music a lot, so I'm going to share with you some cool
              musics I like to code with ! This is directly from my Spotify, so
              it's updated frequently and automatically.
            </>
          )}
        </div>
      </div>
      <div className="elem_song">
        {dataSpotify.length > 1 ? (
          dataSpotify.map((elem, i) => {
            return (
              <div key={i} className="spotify_elem_user">
                <div className="id_img">
                  <img
                    src={
                      elem.track.album.images[1] !== undefined
                        ? elem.track.album.images[1].url
                        : null
                    }
                    alt="img_music"
                  />
                </div>
                <div className="title_singer">
                  <div className="title_style">{elem.track.name}</div>
                  <div className="separator_spotify"></div>
                  <div className="text__date">
                    <div className="artist_style">
                      {elem.track.artists[0].name}{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="container-loader">
            <span className="loader"></span>
            <span>Loading</span>
          </div>
        )}
      </div>
    </>
  );
};

export default More;
