import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import style from "./Notification.module.css";
import slideTransition from "../../transitions/slideTransition.module.css";

const Notification = ({ text, isShow }) => (
  <CSSTransition
    in={isShow}
    timeout={250}
    classNames={slideTransition}
    unmountOnExit
  >
    <div className={style.alert}>
      <p>{text}</p>
    </div>
  </CSSTransition>
);

Notification.propTypes = {
  text: PropTypes.string,
  isShow: PropTypes.bool,
};

export default Notification;
