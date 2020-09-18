import React from "react";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const BurgerControls = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
  ];

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>4.00</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          label={ctrl.label}
          key={ctrl.label}
          adding={props.adding.bind(this, ctrl.type)}
          deducting={props.deducting.bind(this, ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button className={classes.OrderButton} onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BurgerControls;
