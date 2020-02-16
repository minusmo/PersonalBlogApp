import React, { Component } from "react";

class Writeposts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Writeposts</div>
        <form>
          <input placeholder="title"></input>
          <input placeholder="contents"></input>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Writeposts;
