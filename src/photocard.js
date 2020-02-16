import React from "react";
import "bulma/css/bulma.css";
import "./photocard.css";

class photocard extends React.Component {
  render() {
    return (
      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img className="is-rounded" src="/atyosemite.jpg" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>HoJoon EUM</strong> <small>bldolphin96@gmail.com</small>{" "}
              <a href="https://negativemo.wordpress.com/">
                <button style={{ cursor: "pointer" }}>My Wordpress</button>{" "}
              </a>
              <a href="https://github.com/minusmo?tab=repositories">
                <button style={{ cursor: "pointer" }}>My Github Repo</button>{" "}
              </a>
              <br></br>
              Hi I'm HoJoon Eum, junior web developer. I usually develop webapps
              using Javascript. I work with React, Next.js, Html5, CSS3,
              VanillaJS on Frontend deveolpment and Node.js, Express, mongodb,
              mongoose on Backend. I love to work on frontend side, and have
              passion to make web design more beautiful and useful.
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default photocard;
