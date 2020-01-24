import React from "react";
import classes from "./AnswersItem.module.css";

const AnswerItem = props => {
  const cls = [classes["AnswerItem"], classes[props.state]];

  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
