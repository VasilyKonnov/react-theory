import React from "react";
import classes from "./FinishQuiz.module.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className={classes["FinishQuiz"]}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const iconResult =
            props.results[quizItem.id] === "error" ? (
              <span className={classes["error"]}>&nbsp; &#10006;</span>
            ) : (
              <span className={classes["success"]}>&nbsp; &#10004;</span>
            );

          return (
            <li key={index + 1}>
              <strong>{index + 1}</strong>. &nbsp;
              {quizItem.question}
              {iconResult}
            </li>
          );
        })}
      </ul>
      <p>
        Правильно {successCount} из {props.quiz.length}{" "}
      </p>
      <div>
        <Button onClick={props.onRetry} className="primary">
          Повторить
        </Button>
        <Link to="/">
          <Button className="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
