import React from "react";
import Typography from "../../components/typography/typography.component";

const StartPage = () => {
  return (
    <>
      <section className="start-page" id="home">
        <div className="start-page--col1">
          <Typography
            type="medium"
            text="Law solutions for You"
            styles="start-page--col1--heading start-page--col1--medium"
          />
          <Typography
            type="huge"
            text="E-Cancelary"
            styles="start-page--col1--heading start-page--col1--huge"
          />
          <Typography
            type="small"
            text="Cros eget nisi sit amet masso sollictudisn maximus vu a nibis. Lorem ipsum dolor sit amet, concestur adisplilict emit. Cros eget nisi sit amet masso sollictudisn maximus vu a nibis. "
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
