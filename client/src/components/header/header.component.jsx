import React from "react";
import Typography from "../typography/typography.component";
import Button from "../button/button.components";

import { Link } from "react-router-dom";

const Header = props => {
  return (
    <section
      className={
        props.isHidden ? "header-container-closed" : "header-container-open"
      }
    >
      <Link to="/">
        <Typography styles="header-container--h3" type="small" text="Home" />
      </Link>
      <Typography type="small" text="Product" />
      <Typography type="small" text="How it works" />
      <Typography type="small" text="Solutions" />
      <Typography type="small" text="Carrers" />
      <Button className="header-container-open--button" text="go to requests" />
    </section>
  );
};

export default Header;
