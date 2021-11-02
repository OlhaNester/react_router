import { Suspense, lazy } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
// import Home from "./views/Home";
// import Movies from "./views/Movies";
import NotFound from "./views/NotFound";
import "./App.css";
// import MovieDetails from "./views/MovieDetails";
import routes from "./routes";

const Home = lazy(() =>
  import("./views/Home.js" /* webpackChunkName: "home"*/)
);
const Movies = lazy(() =>
  import("./views/Movies.js" /* webpackChunkName: "movies"*/)
);
const MovieDetails = lazy(() =>
  import("./views/MovieDetails.js" /* webpackChunkName: "movieDetails"*/)
);

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
            Movies
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<h3>Загружаем...</h3>}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Route path={routes.movies} component={Movies} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
