// STYLING PAGE
import "./Reset.css";
import "./App.css";

// DEPENDANCES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import HeaderBar from "./Components/HeaderBar";
import Footer from "./Components/Footer";

// PAGES
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Stats from "./Pages/Stats";
import Guestbook from "./Pages/Guestbook";
import More from "./Pages/More";

function App() {
  return (
    <body>
      <Router>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/guestbook" element={<Guestbook />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/more" element={<More />}></Route>
        </Routes>
        <Footer />
      </Router>
    </body>
  );
}

export default App;
