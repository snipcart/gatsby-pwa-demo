import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";

import image from "./what-is-progressive-web-app.png";

import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <CardText>
              <h2>A PWA demo with Gastby &amp; Snipcart</h2>
            </CardText>
            <img
              src={image}
              className="about-img"
              alt={config.siteTitle}
            />
            <CardText>
              <p className="about-text md-body-1">
                This PWA e-commerce example was built using Gastby &amp; Snipcart.
                You should try it on mobile! ;)
              </p>
              <p className="about-text md-body-1">
                Oh, and the full tutorial is available {" "}
                <a href="https://snipcart.com/blog/pwa-example-ecommerce-gatsby">here</a>.
              </p>

            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
