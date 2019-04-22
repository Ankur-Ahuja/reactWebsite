import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardComponent from './CardComponent.js';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>       
        <Route path="/" exact component={Index} />
        <Route path="/aboutUs/" component={About} />
        <Route path="/ourServices/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
