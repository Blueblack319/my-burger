import React from "react";

import classes from "./BuildControl.module.css";

const BurgerControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        onClick={props.deducting}
        className={classes.Less}
        disabled={props.disabled}
      >
        Less
      </button>
      <button onClick={props.adding} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default BurgerControl;
