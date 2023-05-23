import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { GrHomeRounded } from "react-icons/gr";
import { FaHamburger } from "react-icons/fa";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav-bar">
          <div>
            <Link className="top-logo-left" to={"/"}>
              <img className="logo-right" src="img/fork.png" alt="" />
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link className="top-logo" to={"/"}>
              <p>Best Recipes</p>
            </Link>
          </div>
        </div>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
