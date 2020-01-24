import React, { Component } from "react";
import classes from "./QuizList.module.css";
// import classNames from "classnames";
import { NavLink } from "react-router-dom";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

export default class QuizList extends Component {
  state = {
    quizes: [],
    loading: true
  };
  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }
  async componentDidMount() {
    try {
      const response = await axios.get("/quiz.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        });
      });
      this.setState({
        quizes,
        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    // const QuizListClassNames = classNames();
    return (
      <div className={classes["QuizList"]}>
        <div>
          <h1>Quiz List</h1>
          {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}
