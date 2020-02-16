import React, { Component } from "react";
import "./blogposts.css";
import "bulma/css/bulma.css";
class Blogposts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tile is-ancestor has-background-info">
        <div className="tile is-3 is-parent is-vertical has-background-warning">
          <div className="tile is-child">index</div>
        </div>
        <div className="tile is-parent is-vertical">
          <div className="tile is-child">space</div>
        </div>
      </div>
    );
  }
}

export default Blogposts;
