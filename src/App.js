import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/:id" component={MovieList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
