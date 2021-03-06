import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import Button from "../../components/UI/Button/Button";
import { createControl, validate, validateForm } from "../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import axios from "../../axios/axios-quiz";
// import classNames from "classnames";

function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      id: number,
      errorMessage: "Значение не может быть пустым"
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым"
      },
      { required: true }
    ),
    options1: createOptionControl(1),
    options2: createOptionControl(2),
    options3: createOptionControl(3),
    options4: createOptionControl(4)
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls()
  };
  submitHandler = event => {
    event.preventDefault();
  };
  addQuestionHandler = event => {
    event.preventDefault();
    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;

    const {
      question,
      options1,
      options2,
      options3,
      options4
    } = this.state.formControls;
    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {
          text: options1.value,
          id: options1.id
        },
        {
          text: options2.value,
          id: options2.id
        },
        {
          text: options3.value,
          id: options3.id
        },
        {
          text: options4.value,
          id: options4.id
        }
      ]
    };

    quiz.push(questionItem);
    this.setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls()
    });
  };
  createQuizHandler = async event => {
    event.preventDefault();
    try {
      await axios.post("/quiz.json", this.state.quiz);
      this.setState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
      });
    } catch (e) {
      console.log(e);
    }
  };
  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);
    formControls[controlName] = control;
    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    });
  };
  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </React.Fragment>
      );
    });
  }
  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: +event.target.value
    });
  };

  render() {
    const select = (
      <Select
        label="Выберите правильный ответ"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 }
        ]}
      />
    );
    return (
      <div className={classes["QuizCreator"]}>
        <div>
          <h1>Создание тестов</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControls()}
            {select}
            <Button
              className="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              className="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
