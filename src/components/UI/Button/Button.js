import React from "react";
import classes from "./Button.module.css";
import classNames from "classnames";

const Button = props => {
  let buttonClassNames = classNames(
    classes[props.className],
    classes["Button"]
  );
  return (
    <button
      onClick={props.onClick}
      className={buttonClassNames}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
