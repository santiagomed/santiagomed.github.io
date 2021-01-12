import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import Home from "./components/Home/home.jsx";
import Projects from "./components/Projects/projects.jsx";
import NotFound from "./components/notFound.jsx";
import Contact from "./components/Contact/contact.jsx";
import CovidTracker from "./covid-tracker/App.js";
import "./App.module.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
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
