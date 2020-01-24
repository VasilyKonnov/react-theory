import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Drawer.module.css";
import classNames from "classnames";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Links = [
  { to: "/", label: "Список", exact: true },
  { to: "/auth", label: "Авторизация", exact: false },
  { to: "/quiz-creator", label: "Создать тест", exact: false }
];

class Drawer extends Component {
  renderLinks() {
    return Links.map((Link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={Link.to}
            exact={Link.exact}
            activeClassName={classes["active"]}
            onClick={this.props.onClose}
          >
            {Link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    let classNamesDrawer = "";
    if (this.props.isOpen) {
      classNamesDrawer = classNames(this.props.className, classes["Drawer"]);
    } else {
      classNamesDrawer = classNames(
        this.props.className,
        classes["Drawer"],
        classes["close"]
      );
    }

    return (
      <>
        <nav className={classNamesDrawer}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
