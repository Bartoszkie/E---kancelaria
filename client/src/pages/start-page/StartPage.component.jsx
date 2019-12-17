import React from "react";
import Typography from "../../components/typography/typography.component";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const StartPage = () => {
  return (
    <>
      <section className="start-page-container">
        <div className="start-page-container--col1">
          <p className="col1--heading">Search for Enterprise</p>
          <Typography
            styles="start-page-container--big"
            type="huge"
            text="AI to power Enterprise Search"
          ></Typography>
          <Typography
            styles="start-page-container--small"
            type="small"
            text="Cros eget nisi sit amet massa ollictudin maximus ut a nibig. Lorem ipsum dolor sit amet, conssectur adipliscing elit"
          ></Typography>
          <div className="arrow arrow--col1">
            <p>Features</p>
          </div>
        </div>
        <div className="start-page-container--col2">
          <div className="start-page-container--col2-box">
            <Typography type="small" text="Product Tour"></Typography>
            <div className="arrow">A</div>
          </div>
        </div>
        <div className="start-page-container--col3">
          <div className="start-page-container--col3-box">
            <Typography
              styles="start-page-container--col3-box--p"
              type="medium"
              text="Our solutions"
            ></Typography>
            <ul className="start-page-container--col3--list">
              <li className="start-page-container--col3--list--item">
                IT solutions
              </li>
              <li className="start-page-container--col3--list--item">
                Law advices
              </li>
              <li className="start-page-container--col3--list--item">
                Project managment
              </li>
              <li className="start-page-container--col3--list--item">
                Experienced tech stack
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartPage;
