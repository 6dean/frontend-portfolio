import { Link } from "react-router-dom";

const NavigationResp = ({ setDisplayMenu }) => {
  return (
    <div className="navResp">
      <div className="resp_list">
        <Link
          to="/"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">Home</div>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">Projects</div>
        </Link>
        <Link
          to="/skills"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">Skills</div>
        </Link>
        <Link
          to="/guestbook"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">Guestbook</div>
        </Link>
        <Link
          to="/stats"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">Statistics</div>
        </Link>
        <Link
          to="/more"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          <div className="h_elem">More</div>
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
