import React, { Component, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

class Modal extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextProps.ordered !== this.props.ordered ||
      nextProps.children !== this.props.children
    );
  };

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.ordered} clicked={this.props.cancleOrder} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.ordered
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.ordered ? "1" : "0",
            zIndex: this.props.ordered ? "500" : "-1",
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
