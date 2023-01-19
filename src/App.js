// STYLING PAGE
import "./Reset.css";
import "./App.css";

// DEPENDANCES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import HeaderBar from "./Components/HeaderBar";
import HeaderResponsive from "./Components/HeaderResponsive";
import Footer from "./Components/Footer";

// PAGES
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Stats from "./Pages/Stats";
import Guestbook from "./Pages/Guestbook";
import More from "./Pages/More";
import Setup from "./Pages/Setup";
import NavigationResp from "./Pages/NavResponsive";

// STATES
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className={darkMode ? "rf" : null}>
      <div className="body">
        <Router>
          <HeaderBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <HeaderResponsive
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            displayMenu={displayMenu}
            setDisplayMenu={setDisplayMenu}
          />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/guestbook" element={<Guestbook />}></Route>
            <Route path="/stats" element={<Stats />}></Route>
            <Route path="/more" element={<More />}></Route>
            <Route
              path="/setup"
              element={<Setup darkMode={darkMode} />}
            ></Route>
            <Route
              path="/navigation"
              element={<NavigationResp setDisplayMenu={setDisplayMenu} />}
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
