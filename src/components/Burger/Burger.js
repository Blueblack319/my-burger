import React from "react";

import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  const transferredIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients)]
      .map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      })
      .reduce((array, element) => array.concat(element));
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transferredIngredients.length === 0 ? (
        <p>Pleas Start Adding Ingredients</p>
      ) : (
        transferredIngredients
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
