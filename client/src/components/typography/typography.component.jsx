import React from "react";
import "./typography.styles.scss";

const Typography = props => {
  return (
    <>
      {props.type === "huge" ? (
        <h1 className={`h1--huge ${props.styles}`}>{props.text}</h1>
      ) : props.type === "big" ? (
        <h2 className={`h2--big ${props.styles}`}>{props.text}</h2>
      ) : props.type === "medium" ? (
        <h3 className={`h3--medium ${props.styles}`}>{props.text}</h3>
      ) : props.type === "small" ? (
        <h4 className={`h4--small ${props.styles}`}>{props.text}</h4>
      ) : props.type === "normall" ? (
        <p className={`normall ${props.styles}`}>{props.text}</p>
      ) : null}
    </>
  );
};

export default Typography;
