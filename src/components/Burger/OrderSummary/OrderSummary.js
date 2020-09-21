import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span>
          {ingKey}: {props.ingredients[ingKey]}
        </span>
      </li>
    );
  });

  return (
    <div>
      <h4>Your Order</h4>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total Price: {props.price}$</strong>
      </p>
      <Button clicked={props.orderCancled} btnType="Danger">
        CANCLE
      </Button>
      <Button clicked={props.orderContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderSummary;
