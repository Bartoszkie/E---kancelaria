import React, { useState } from "react";
import Typography from "../typography/typography.component";
import Button from "../button/button.components";

import { Link } from "react-router-dom";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  const setHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <section className="header-container">
      <div
        className={
          isHidden ? "header-container-closed" : "header-container-open"
        }
      >
        <div className="header-container-grid">
          <Link to="/">
            <Typography
              styles="header-container--h3"
              type="small"
              text="Home"
            />
          </Link>
          <Link to="">
            <Typography type="small" text="Product" />
          </Link>
          <Link to="">
            <Typography type="small" text="How it works" />
          </Link>
          <Link to="">
            <Typography type="small" text="Solutions" />
          </Link>
          <Link to="">
            <Typography type="small" text="Carrers" />
          </Link>
          <Button
            className="header-container-closed--button header-container-open--button"
            text="go to requests"
          />
        </div>

        <div className="header-container--button">
          <div className="el" onClick={() => setHidden()}>
            Menu
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
