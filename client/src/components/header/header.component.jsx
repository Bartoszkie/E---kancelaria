import React, { useState } from "react";
import Typography from "../typography/typography.component";
import Button from "../button/button.components";

import Hamburger from '../hamburger/hamburger.component';

import { Link } from "react-router-dom";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <section className="header-container">
      <nav className={isHidden ? "header-container--nav header--closed" : "header-container--nav header--open"}>
        <Link to="/">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="Home"
          />
        </Link>
        <Link to="">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="Product"
          />
        </Link>
        <Link to="">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="How it works"
          />
        </Link>
        <Link to="">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="Solutions"
          />
        </Link>
        <Link to="">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="Career"
          />
        </Link>
        <Button className="header-container--nav--btn" text="Go to requests"/>
      </nav>
      <Hamburger isHidden={isHidden} setIsHidden={setIsHidden}/>
    </section>
  );
};

export default Header;
