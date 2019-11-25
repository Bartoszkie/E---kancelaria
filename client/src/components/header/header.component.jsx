import React from "react";
import Typography from "../typography/typography.component";

import {Link} from 'react-router-dom';

import "./header.styles.scss";

const Header = () => {
  return (
    <section className="header-container">
      <Link to="/">
        <Typography
          styles="header-container--h3"
          type="medium"
          text="E-kancelaria"
        />
      </Link>
    </section>
  );
};

export default Header;
