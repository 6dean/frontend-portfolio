import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const More = () => {
  return (
    <>
      <div className="name_page">About Me</div>
      <div className="div_description">
        <div className="description">
          It's time to show you everything about me !
        </div>
        <span className="icon">🙃</span>
      </div>
      <div>
        <div className="title">Links</div>
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
              href="https://www.instagram.com/r0ckdean/"
              target="_blank"
              rel="noreferrer"
            >
              Resume
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
            </a>
          </li>
        </div>
      </div>
      <div className="title">Bio</div>
      <div className="sub_title">Introduction</div>
      <div className="div_description">
        <div className="description">
          My name is Rockdean Ferdjallah, but all my friends call me « Dean » I
          was born october 5th 1989 in Bondy, France. I am a geek since I was 4,
          i used to play on my SNES and my father's Macintosh. I live now in
          Paris. I love build apps, listen music, play videogames and checking
          my crypto wallet.
        </div>
      </div>
      <div className="sub_title">Before Coding</div>
      <div className="div_description">
        <div className="description">
          I left school at 18 and got into the professional world through
          several odd jobs. Then I found stability at the RATP, a public
          transport company. At the same time, I was following the tech universe
          and all its news with the idea to work in it.
        </div>
      </div>
      <div className="sub_title">Education</div>
      <div className="div_description">
        <div className="description">
          I first learned on my own as an autodidact, my first personal website
          was in 2007 with Joomla then I decided to go to a Coding Bootcamp in
          2022. It is an accelerated training to learn code but most of all to
          understand what state of mind of a developer is: autonomy. I learned
          at{" "}
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
        </div>
      </div>
      <div className="title">Photos</div>
      <div className="container">
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673734327/my-content/iconsRF/87292a6c9913d973b16852e7aaeaa842_kbjhiu.jpg"
          alt=""
          width="100"
        />
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673734327/my-content/iconsRF/87292a6c9913d973b16852e7aaeaa842_kbjhiu.jpg"
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
            Check my Setup <FontAwesomeIcon icon={faArrowRight} size="sm" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default More;
