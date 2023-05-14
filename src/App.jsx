import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav-bar">
          <Link className="top-logo" to={"/"}>
            <img className="home-icon" src="/public/img/home.png" alt="" />
          </Link>
          <Link className="top-logo" to={"/"}>
            <p>Best Recipes</p>
          </Link>
          <Link className="top-logo" to={"/"}>
            <img
              className="home-icon"
              src="/public/img/restaurant.png"
              alt=""
            />
          </Link>
        </div>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
