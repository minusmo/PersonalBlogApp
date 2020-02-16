import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MyPortfolio from "./portforlio";
import Blogposts from "./Blogposts";
import Navbar from "./navbar";
import "./App.css";

class BlogApp extends Component {
  render() {
    return (
      <Router>
        {/* <nav>
          <Link to="/">MyPortfolio</Link>
          <Link to="/blogposts">blogposts</Link>
        </nav> */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MyPortfolio />
          </Route>
          <Route exact path="/blogposts">
            <Blogposts />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default BlogApp;
