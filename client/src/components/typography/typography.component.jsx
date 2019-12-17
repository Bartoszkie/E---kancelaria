import React from "react";

const Typography = props => {
  return (
    <>
      {props.type === "huge" ? (
        <p className={`p--huge ${props.styles}`}>{props.text}</p>
      ) : props.type === "big" ? (
        <p className={`p--big ${props.styles}`}>{props.text}</p>
      ) : props.type === "medium" ? (
        <p className={`p--medium ${props.styles}`}>{props.text}</p>
      ) : props.type === "small" ? (
        <p className={`p--small ${props.styles}`}>{props.text}</p>
      ) : props.type === "normall" ? (
        <p className={`normall ${props.styles}`}>{props.text}</p>
      ) : props.type === undefined ? (
        <p className="p">{props.text}</p>
      ) : null}
    </>
  );
};

export default Typography;
