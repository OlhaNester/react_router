import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./views/Home";
import Movies from "./views/Movies";
import NotFound from "./views/NotFound";
import "./App.css";

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
            to="/Movies"
          >
            {" "}
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
