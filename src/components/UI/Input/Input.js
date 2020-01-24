import React from "react";
import classes from "./Input.module.css";
import classNames from "classnames";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = props => {
  const InputType = props.type || "text";
  const InputClassNames = classNames(
    classes[props.className],
    classes["Input"],
    isInvalid(props) ? classes["ivalid"] : null
  );
  const htmlFor = `${InputType}-${Math.random()}`;
  return (
    <div className={InputClassNames}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={InputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
};

export default Input;
