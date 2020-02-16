import React from "react";
import "./article.css";

const Article = props => {
  return (
    <section class={`hero is-${props.color} is-fullheight is-light is-bold`}>
      <div class="hero-body">
        <div class="container is-fluid has-background-info">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-parent">
              <div className="tile is-child box has-background-warning">
                <img src={props.imgsrc} alt="" className="thumbnail" />
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box has-background-warning">
                <h1 class="title">{props.title}</h1>
                <h2 class="subtitle">{props.subtitle}</h2>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
