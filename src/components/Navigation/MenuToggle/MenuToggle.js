import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import classes from "./MenuToggle.module.css";
import classNames from "classnames";

const MenuToggle = props => {
  let MenuToggleClasses = "";
  if (props.isOpen) {
    MenuToggleClasses = classNames(
      props.className,
      classes["open"],
      classes["MenuToggle"]
    );
  } else {
    MenuToggleClasses = classNames(props.className, classes["MenuToggle"]);
  }

  return props.isOpen ? (
    <i className={MenuToggleClasses}>
      <CloseIcon onClick={props.onToggle} />
    </i>
  ) : (
    <i className={MenuToggleClasses}>
      <MenuIcon onClick={props.onToggle} />
    </i>
  );
};

export default MenuToggle;
