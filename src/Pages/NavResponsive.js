import { Link } from "react-router-dom";

const NavigationResp = ({ setDisplayMenu, frenchMode }) => {
  return (
    <div className="navResp">
      <div className="resp_list">
        <Link
          to="/"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">{frenchMode ? <>Accueil</> : <>Home</>}</div>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">
            {frenchMode ? <>Projets</> : <>Projects</>}
          </div>
        </Link>
        <Link
          to="/skills"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">
            {frenchMode ? <>Capacités</> : <>Skills</>}
          </div>
        </Link>
        <Link
          to="/guestbook"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">
            {frenchMode ? <>Livre d'or</> : <>Guestbook</>}
          </div>
        </Link>
        <Link
          to="/stats"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">
            {frenchMode ? <>Statistiques</> : <>Statistics</>}
          </div>
        </Link>
        <Link
          to="/more"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">{frenchMode ? <>Plus</> : <>More</>}</div>
        </Link>
        <a
          href="https://github.com/6dean/frontend-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <div className="h_elem">Source</div>
        </a>
      </div>
    </div>
  );
};

export default NavigationResp;
