import { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
// import Home from "./views/Home";
// import Movies from "./views/Movies";
import NotFound from "./views/NotFound";
import "./App.css";
// import MovieDetails from "./views/MovieDetails";
import routes from './routes';


const Home = lazy(() => import('./views/Home.js' /* webpackChunkName: "home"*/),);
const Movies = lazy(() => import('./views/Movies.js' /* webpackChunkName: "movies"*/),);
const MovieDetails = lazy(() => import('./views/MovieDetails.js' /* webpackChunkName: "movieDetails"*/),);

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
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink_active"
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.movieDetails} component={MovieDetails} />
        <Route path={routes.movies} component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
