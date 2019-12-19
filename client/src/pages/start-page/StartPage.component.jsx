import React from "react";
import Typography from "../../components/typography/typography.component";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const StartPage = () => {
  return (
    <>
      <section className="start-page">
        <div className="start-page--col1">
          <Typography
            type="medium"
            text="Search for Enterprise"
            styles="start-page--col1--heading start-page--col1--medium"
          />
          <Typography
            type="huge"
            text="AI to power Enterprise Search"
            styles="start-page--col1--heading start-page--col1--huge"
          />
          <Typography
            type="small"
            text="Cros eget nisi sit amet masso sollictudisn maximus vu a nibis. Lorem ipsum dolor sit amet, concestur adisplilict emit."
            styles="start-page--col1--heading start-page--col1--small"
          />
        </div>
        <div className="start-page--col2">
          <div className="start-page--col2--box">
            <Typography
              type="small"
              text="Product Tour ->"
              styles="start-page--col2--txt"
            />
          </div>
        </div>
        <div className="start-page--col3">
          <Typography
            type="medium"
            text="Our solutions"
            styles="start-page--col3--heading"
          />
          <ul className="start-page--col3--list">
            <li className="start-page--col3--list--item">
              <Typography type="normall" text="Law" />
            </li>
            <li className="start-page--col3--list--item">
              <Typography type="normall" text="Rules" />
            </li>
            <li className="start-page--col3--list--item">
              <Typography type="normall" text="Unfair cases" />
            </li>
            <li className="start-page--col3--list--item">
              <Typography type="normall" text="Untypicall solutions" />
            </li>
            <li className="start-page--col3--list--item">
              <Typography type="normall" text="Fast travel" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default StartPage;
