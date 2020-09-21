import React from "react";

import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];
  for (let ing in props.ingredients) {
    ingredients.push({
      name: ing,
      amount: props.ingredients[ing],
    });
  }

  const ingredientsOutput = ingredients.map((ingredient) => {
    return (
      <span key={ingredient.name} className={classes.Ingredient}>
        {ingredient.name}({ingredient.amount})
      </span>
    );
  });

  return (
    <div className={classes.Container}>
      <div className={classes.IngredientsContainer}>
        <span>Ingredients: </span>
        {ingredientsOutput}
      </div>
      <div>
        <span>
          Price: <strong>USD {props.price}</strong>
        </span>
      </div>
    </div>
  );
};

export default Order;
