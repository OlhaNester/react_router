import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./views/Home";
import Movies from "./views/Movies";
import NotFound from "./views/NotFound";
import "./App.css";
import MovieDetails from "./views/MovieDetails";

//API_key = ee059677e8bdbcfa281a4ce6304abcdd;

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink_active"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink_active"
            to="/movies"
          >
            {" "}
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:movieId" component={MovieDetails} />
        <Route path="/movies" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
