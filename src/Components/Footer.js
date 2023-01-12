import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="description">Home</div>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="description">Projects</div>
        </Link>
        <Link
          to="/stats"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="description">Statistics</div>
        </Link>
      </div>
      <div>
        <a href="https://github.com/6dean">
          <div className="description">GitHub</div>
        </a>
        <a href="https://www.linkedin.com/in/rockdean-ferdjallah-4b3a45247/">
          <div className="description">LinkedIn</div>
        </a>
        <Link
          to="/more"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="description">More</div>
        </Link>
      </div>
      <div>
        <div className="description">React</div>
      </div>
    </footer>
  );
};

export default Footer;
