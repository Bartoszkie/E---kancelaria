import React, { useState } from "react";
import Typography from "../typography/typography.component";
import Button from "../button/button.components";

import { auth } from "../../redux/firebase/firebase.config";
import Hamburger from "../hamburger/hamburger.component";

import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <section className="header-container">
      <nav
        className={
          isHidden
            ? "header-container--nav header--closed"
            : "header-container--nav header--open"
        }
      >
        <Link to="/">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="Home"
          />
        </Link>
        <Link to="/documents">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="Product"
          />
        </Link>
        <Link to="/#works">
          <Typography
            styles="header-container--nav--link"
            type="small"
            text="How it works"
          />
        </Link>
        {currentUser ? (
          <div className="header-container--nav--link options" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="header-container--nav--link options" to="/registration">
            SIGN IN
          </Link>
        )}
        <Link to="/orders">
          <Button
            className="header-container--nav--btn"
            text="Go to requests"
          />
        </Link>
      </nav>
      <Hamburger isHidden={isHidden} setIsHidden={setIsHidden} />
    </section>
  );
};

export default Header;
