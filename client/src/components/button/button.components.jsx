import React from "react";
import Typography from "../typography/typography.component";

const Button = props => {
  return (
    <button
      className={
        props.className !== undefined ? `${props.className} button` : "button"
      }
    >
      <Typography type={props.type} text={props.text} />
    </button>
  );
};

export default Button;
