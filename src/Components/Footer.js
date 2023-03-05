import { Link } from "react-router-dom";

const Footer = ({ frenchMode, darkMode }) => {
  return (
    <footer>
      <div className="img-footer">
        {darkMode ? (
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1678029644/my-content/iconsRF/rf_wgednd_qtatbk.png"
              alt="rf"
              width="50"
            />
          </Link>
        ) : (
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1678028885/my-content/iconsRF/rf_wgednd.jpg"
              alt="rf"
              width="50"
            />
          </Link>
        )}
      </div>
      <div>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="f_description">
            {" "}
            {frenchMode ? <>Accueil</> : <>Home</>}
          </div>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="f_description">
            {frenchMode ? <>Projets</> : <>Projects</>}
          </div>
        </Link>
        <Link
          to="/stats"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="f_description">
            {frenchMode ? <>Statistiques</> : <>Statistics</>}
          </div>
        </Link>
      </div>
      <div>
        <a href="https://github.com/6dean" target="_blank" rel="noreferrer">
          <div className="f_description">GitHub</div>
        </a>
        <a
          href="https://www.linkedin.com/in/rockdean-ferdjallah-4b3a45247/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="f_description">LinkedIn</div>
        </a>
        <Link
          to="/more"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="f_description">
            {" "}
            {frenchMode ? <>Plus</> : <>More</>}
          </div>
        </Link>
      </div>
      <div>
        <a
          href="https://github.com/6dean/frontend-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <div className="f_description">Source</div>
        </a>
        <Link
          to="/setup"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="f_description">
            {" "}
            {frenchMode ? <>Config</> : <>Setup</>}
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
