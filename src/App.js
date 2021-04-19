import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import Home from "./components/Home/home";
import NotFound from "./components/notFound.jsx";
import CovidTracker from "./covid-tracker/App.js";
import "./App.module.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/santiago-portfolio" component={Home} />
          <Route path="/covid-tracker-demo" component={CovidTracker} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect from="/santiago-portfolio" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
