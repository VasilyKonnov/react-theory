import React from "react";
import classes from "./Loader.module.css";
import classNames from "classnames";

const Loader = props => {
  let LoaderClassNames = classNames(props.className, classes["Loader"]);
  return (
    <div className={classes["center"]}>
      <div className={LoaderClassNames}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
