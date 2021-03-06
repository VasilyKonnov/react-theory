import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswersItem/AnswersItem";

const AnswerList = props => (
  <ul className={classes["AnswersList"]}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswerList;
