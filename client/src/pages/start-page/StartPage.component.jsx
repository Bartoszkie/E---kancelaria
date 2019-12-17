import React from "react";
import Typography from "../../components/typography/typography.component";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const StartPage = () => {
  return (
    <section className="start-page-conatiner">

      <Fade top delay={1400}>
        <Link to="/documents">
          <Typography styles="start-page-container--p" type="big" text="Docs" />
        </Link>
      </Fade>
    </section>
  );
};

export default StartPage;
