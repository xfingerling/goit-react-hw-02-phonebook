import React, { Component } from "react";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import style from "./SectionTitle.module.css";
import logoTransition from "../../transitions/logoTransition.module.css";

class SectionTitle extends Component {
  state = {
    isLogoShow: false,
  };

  componentDidMount() {
    this.setState((state) => ({ isLogoShow: !state.isLogoShow }));
  }

  render() {
    const { isLogoShow } = this.state;
    const { title, isLogo } = this.props;

    return (
      <div className={style.background}>
        {isLogo ? (
          <CSSTransition
            in={isLogoShow}
            timeout={500}
            classNames={logoTransition}
          >
            <h2 className={style.title}>{title}</h2>
          </CSSTransition>
        ) : (
          <h2 className={style.title}>{title}</h2>
        )}
      </div>
    );
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isLogo: PropTypes.bool,
};

export default SectionTitle;
