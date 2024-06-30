
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Project from "./Project";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar">
          <div>
            <a href="#">
              <img src="/logo.png" alt="loading" />
            </a>
          </div>

          <div>
            <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "0 10px" }}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#C76904" : "#292F36",
                  })}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li><a href="#">Page</a></li>
              <li style={{ margin: "0 10px" }}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#C76904" : "#292F36",
                  })}
                  to="/Services"
                >
                  Services
                </NavLink>
              </li>
              <li style={{ margin: "0 10px" }}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#C76904" : "#292F36",
                  })}
                  to="/Project"
                >
                  Project
                </NavLink>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a href="#">Blog</a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a href="#">Contact</a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <button>
                  <img src="/search.png" alt="loading" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
