import React from "react";
import classes from "./Backdrop.module.css";
import classNames from "classnames";

const Backdrop = props => {
  let BackdropClassNames = classNames(props.className, classes["Backdrop"]);
  return <div className={BackdropClassNames} onClick={props.onClick} />;
};
export default Backdrop;
