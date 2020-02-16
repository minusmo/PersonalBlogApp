import "bulma/css/bulma.css";
import React, { Component } from "react";
import Photocard from "./photocard";
import Article from "./article";
import Footer from "./footer";
import "./portfolio.css";
import "./article.css";

class portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title1 = "First Work";
    const subtitle1 = "Ghibli Movies Showcase";
    const title2 = "Second Work";
    const subtitle2 = "Knier Tree-Structure rendering";
    const title3 = "Third Work";
    const subtitle3 = "Artists Page";
    return (
      <div className="portContainer">
        <Photocard />
        <Article
          imgsrc={"ghiblithumbnail.jpg"}
          color={"white"}
          title={title1}
          subtitle={subtitle1}
        >
          <div>
            <p>
              Direct Url:{" "}
              <a href="https://minusmo.github.io/Ghibli-Movie-Showcase-/">
                https://minusmo.github.io/Ghibli-Movie-Showcase-/
              </a>
            </p>
            <p>
              Github Repo:{" "}
              <a href="https://github.com/minusmo/Ghibli-Movie-Showcase-">
                https://github.com/minusmo/Ghibli-Movie-Showcase-
              </a>
            </p>
            <h4>
              <strong>Brief Introduction</strong>
            </h4>
            <p>
              This is my first own project to show public. It's quite simple.
              This is made with html5, css3, vanillaJS. I made all the html
              elements dynamically that needs data from external API. Using
              vanillaJS, create elements, and put the data I want in the
              elements, and finally append it on the root element.
            </p>
          </div>
        </Article>
        <Article
          imgsrc={"knierproject.jpg"}
          color={"white"}
          title={title2}
          subtitle={subtitle2}
        >
          <div>
            <p>
              Github Repo:{" "}
              <a href="https://github.com/minusmo/KnierTreeproject">
                https://github.com/minusmo/KnierTreeproject
              </a>
            </p>
            <h4>
              <strong>Brief Introduction</strong>
            </h4>
            <p>
              This is my second webapp project. I worked with a team named
              Knier. Our goal was to make a webapp which helps to render
              tree-structured data from a user input. Once a user put code about
              tree-structured algorithm in the code editor and submit it, client
              send the data to server. The server gets the data and transform it
              to json data. Finally send the json data to client and client
              renders tree-structured shape based on the data.
            </p>
          </div>
        </Article>
        <Article
          imgsrc={"musicapp.jpg"}
          color={"white"}
          title={title3}
          subtitle={subtitle3}
        >
          <div>
            <p>
              Direct Url:{" "}
              <a href="https://musicapp.now.sh/">https://musicapp.now.sh/</a>
            </p>
            <p>
              Github Repo:{" "}
              <a href="https://github.com/minusmo/MusicApp">
                https://github.com/minusmo/MusicApp
              </a>
            </p>
            <h4>
              <strong>Brief Introduction</strong>
            </h4>
            <p>
              This work is totally derived from my passion. I really love to
              listen music. There are some korean artists whose songs I truely
              love and appreciate. Therefore I decided to make a web page for
              them so let many people know their songs live in countries without
              Republic of Korea. I used Next.js, React for frontend side, and
              express, mongodb for backend side. I deployed nextjs app via zeit
              now, and get my own data with axios on frontend side. The api
              endpoint is made myself, using mongodb atlas and json static file
              and deployed the api server on heroku.
            </p>
          </div>
        </Article>
        <Footer />
      </div>
    );
  }
}

export default portfolio;
