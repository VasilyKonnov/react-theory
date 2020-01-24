import React from "react";
import classes from "./Select.module.css";
import classNames from "classnames";

const Select = props => {
  const SelectClassNames = classNames(props.className, classes["Select"]);
  const htmlFor = `${props.label}-${Math.random()}`;
  return (
    <div className={SelectClassNames}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
