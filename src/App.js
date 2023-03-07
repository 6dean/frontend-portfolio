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
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [frenchMode, setFrenchMode] = useState(
    localStorage.getItem("frenchMode") === "true"
  );
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem("frenchMode", frenchMode);
    localStorage.setItem("darkMode", darkMode);
  }, [frenchMode, darkMode]);

  return (
    <div className={darkMode ? "darkmode" : null}>
      <div className="body-rf">
        <Router>
          <HeaderBar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setFrenchMode={setFrenchMode}
            frenchMode={frenchMode}
          />
          <HeaderResponsive
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            displayMenu={displayMenu}
            setDisplayMenu={setDisplayMenu}
            setFrenchMode={setFrenchMode}
            frenchMode={frenchMode}
          />
          <Routes>
            <Route path="/" element={<Home frenchMode={frenchMode} />}></Route>
            <Route
              path="/projects"
              element={<Projects frenchMode={frenchMode} />}
            ></Route>
            <Route
              path="/skills"
              element={<Skills frenchMode={frenchMode} />}
            ></Route>
            <Route
              path="/guestbook"
              element={<Guestbook frenchMode={frenchMode} />}
            ></Route>
            <Route
              path="/stats"
              element={<Stats frenchMode={frenchMode} />}
            ></Route>
            <Route
              path="/more"
              element={<More frenchMode={frenchMode} />}
            ></Route>
            <Route
              path="/setup"
              element={<Setup darkMode={darkMode} frenchMode={frenchMode} />}
            ></Route>
            <Route
              path="/navigation"
              element={
                <NavigationResp
                  setDisplayMenu={setDisplayMenu}
                  frenchMode={frenchMode}
                />
              }
            ></Route>
          </Routes>
          <Footer frenchMode={frenchMode} darkMode={darkMode} />
        </Router>
      </div>
    </div>
  );
}

export default App;
