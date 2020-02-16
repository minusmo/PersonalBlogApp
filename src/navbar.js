import "bulma/css/bulma.css";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  burgerHandler(e) {
    const burgerbutton = document.getElementById("burgerbutton");
    const target = burgerbutton.dataset.target;
    const navbar = document.getElementById(target);
    e.target.classList.toggle("is-active");
    navbar.classList.toggle("is-active");
  }
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <span id="logo" className="navbar-item">
            <img id="logoimg" src="logo_transparent.png" />
          </span>

          <a
            id="burgerbutton"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
            onClick={this.burgerHandler}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" class="navbar-menu">
          <div class="navbar-start">
            <span class="navbar-item is-disabled">Mo's Blog</span>

            {/* <a class="navbar-item">Documentation</a> */}

            <div class="navbar-item has-dropdown is-hoverable">
              {/* <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider"></hr>
                <a class="navbar-item">Report an issue</a>
              </div> */}
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="/">
                  <span className="button is-info">
                    <strong>Portfolio</strong>
                  </span>
                </Link>
                {/* <Link to="/blogposts"> */}
                <a href="https://negativemo.wordpress.com/">
                  <span className="button is-danger">
                    <strong>Blogposts</strong>
                  </span>
                </a>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
